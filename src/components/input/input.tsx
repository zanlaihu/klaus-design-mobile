import React, {
  forwardRef,
  useImperativeHandle,
  useState,
  useRef,
  useEffect,
  useLayoutEffect,
} from 'react';
import classNames from 'classnames';
import { withNativeProps } from '../../utils/native-props';
import { stringFormatter } from '../../utils/string-formatter';
import { useMemoizedFn, useUpdate } from 'ahooks';
import { InputFormat, InputInstance, InputProps } from './type';



const classPrefix = 'adw-input';

export interface InputRef {
  clear: () => void;
  focus: () => void;
  blur: () => void;
  value: string;
}

interface Options {
  value?: string;
  defaultValue: string;
  onChange?: (v: string) => void;
  format?: InputFormat;
}

const getPureValue = (raw: string, patternReg: string) => {
  const reg = new RegExp(patternReg);
  return raw.replace(/./g, (char) => ((reg ? reg.test(char) : true) ? char : ''));
};

const getCursorPos = (el: HTMLInputElement) => {
  return el.selectionStart || 0;
};

/**
 * Format input content
 *
 * @param {string} textValue
 * @param {string} oldValue
 * @param {InputFormat} [format]
 * @param {(HTMLInputElement | null)} [el]
 * @return {*}
 */
const formatInputField = (
  textValue: string,
  oldValue: string,
  format?: InputFormat,
  el?: HTMLInputElement | null,
) => {
  if (format && format.templates) {
    const currPattern = format?.pattern || '[0-9]+';
    const currFormatAdvanced = !!(format?.formatAdvanced || true);
    const isBack = oldValue.length >= textValue.length;
    const pureValue = getPureValue(textValue, currPattern);
    const cursorIndex = el
      ? getPureValue(textValue.slice(0, getCursorPos(el)), currPattern).length
      : 0;
    return stringFormatter(pureValue, format?.templates, cursorIndex, isBack, currFormatAdvanced);
  }
  return { value: textValue, index: 0 };
};

/**
 * usePropsValue
 *
 * @param {Options} options
 * @param {React.RefObject<HTMLInputElement>} inputRef
 * @return {*}
 */
const usePropsValue = (options: Options, inputRef: React.RefObject<HTMLInputElement>) => {
  const { value, defaultValue, onChange, format } = options;
  const update = useUpdate();
  const cursorPos = useRef(0);
  const stateRef = useRef<string>(
    formatInputField(value !== undefined ? value : defaultValue, '', format).value,
  );
  if (value !== undefined && value !== stateRef.current) {
    const { value: val, index } = formatInputField(
      value,
      stateRef.current,
      format,
      inputRef.current,
    );
    stateRef.current = val;
    cursorPos.current = index;
  }

  const setState = useMemoizedFn((v: string) => {
    const { value: val, index } = formatInputField(v, stateRef.current, format, inputRef.current);
    if (value === undefined) {
      update();
    }
    stateRef.current = val;
    onChange?.(val);
    cursorPos.current = index;
  });

  // Set input cursor position after rendering
  useEffect(() => {
    if (format && format.templates && inputRef.current) {
      if (document.activeElement === inputRef.current) {
        inputRef.current.setSelectionRange(cursorPos.current, cursorPos.current);
      }
    }
  }, [stateRef.current, cursorPos.current]);

  return [stateRef.current, setState] as const;
};

/**
 * Prevent Default MouseEvent
 *
 * @param {React.MouseEvent<Element>} e
 */
const keepFocus = (e: React.MouseEvent<Element>) => {
  e.preventDefault();
};

/**
 * Hidden placeholder while the input is not focused.
 *
 * @param {boolean} inputFocus
 * @param {string} [label]
 * @param {string} [placeholder]
 * @return {*}
 */
const checkPlaceholderVisible = (inputFocus: boolean, label?: string, placeholder?: string) => {
  if (placeholder) {
    return !(label && label.trim() && !inputFocus) ? placeholder : '';
  }
  return '';
};

/**
 * Add ${classPrefix}-no-label class while no label
 *
 * @param {string} [label]
 * @return {*}
 */
const noLabel = (label?: string) => {
  return !(label && label.trim()) ? `${classPrefix}-no-label` : '';
};

/**
 * Add ${classPrefix}-wrapper-outlined while the outlined variable is used
 *
 * @param {boolean} [outlined]
 * @return {*}
 */
const outlinedLabel = (
  outlined?: boolean,
  hasFocus?: boolean,
  warming?: string | React.ReactNode,
  disable?: boolean | undefined,
) => {
  if (outlined) {
    if (warming) {
      return `${classPrefix}-outlined-warming`;
    }
    if (hasFocus) {
      return `${classPrefix}-outlined-active`;
    }
    if (disable) {
      return `${classPrefix}-outlined-disable`;
    }
    return `${classPrefix}-outlined-inactive`;
  }
};

let defaultProps = {
  defaultValue: '',
  mode: 'normal',
};

/**
 * Input component
 */
const BaseInput = forwardRef<InputRef, InputProps>((p, ref) => {
  const props = Object.assign({}, defaultProps, p);
  const nativeInputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = usePropsValue(props, nativeInputRef);
  const [hasFocus, setHasFocus] = useState(false);

  useImperativeHandle(ref, () => ({
    clear: () => {
      setValue('');
    },
    focus: () => {
      nativeInputRef.current?.focus();
    },
    blur: () => {
      nativeInputRef.current?.blur();
    },
    value,
  }));

  useLayoutEffect(() => {
    if (!props.enterKeyHint) return;
    nativeInputRef.current?.setAttribute('enterkeyhint', props.enterKeyHint);
    return () => {
      nativeInputRef.current?.removeAttribute('enterkeyhint');
    };
  }, [props.enterKeyHint]);

  const handleKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (props.onEnterPress && (e.code === 'Enter' || e.keyCode === 13)) {
      props.onEnterPress(e);
    }
    props.onKeyDown?.(e);
  };

  return withNativeProps(
    props,
    <div className={classNames(props.className, `${classPrefix}`)} style={props.style}>
      <div
        className={classNames(
          `${classPrefix}-wrapper`,
          `${classPrefix}-mode-${props.mode}`,
          `${props.warning && `${classPrefix}-warning`}`,
          `${hasFocus && `${classPrefix}-focus`}`,
          `${noLabel(props?.label)}`,
          `${props.disabled && `${classPrefix}-disable-label`}`,
          `${outlinedLabel(props?.outlined, hasFocus, props?.warning, props?.disabled)}`,
          `${classPrefix}-radius-${props.radius}`,
        )}
      >
        <div className={`${classPrefix}-content`}>
          {props.startEnhancer && (
            <div className={`${classPrefix}-start-enhancer`} onMouseDown={keepFocus}>
              {props.startEnhancer}
            </div>
          )}
          <label className={`${classPrefix}-main-content`}>
            {props.label && (
              <div
                className={classNames(
                  `${classPrefix}-label`,
                  `${(hasFocus || !!value) && `${classPrefix}-label-filled`}`,
                )}
                onMouseDown={keepFocus}
              >
                {props.label}
              </div>
            )}
            <input
              ref={nativeInputRef}
              className={`${classPrefix}-input`}
              value={value}
              id={props.id}
              placeholder={checkPlaceholderVisible(hasFocus, props.label, props.placeholder)}
              disabled={props.disabled}
              readOnly={props.readOnly}
              maxLength={props.maxLength}
              minLength={props.minLength}
              max={props.max}
              min={props.min}
              autoComplete={props.autoComplete}
              pattern={props.pattern}
              type={props.type}
              autoCapitalize={props.autoCapitalize}
              autoCorrect={props.autoCorrect}
              onChange={(e) => {
                setValue(e.target.value);
              }}
              onFocus={(e) => {
                setHasFocus(true);
                props.onFocus?.(e);
              }}
              onBlur={(e) => {
                setHasFocus(false);
                props.onBlur?.(e);
              }}
              onKeyDown={handleKeydown}
              onKeyUp={props.onKeyUp}
            />
          </label>
          {props.clearable && !!value && hasFocus && (
            <div
              className={`${classPrefix}-clear`}
              onMouseDown={keepFocus}
              onClick={() => {
                setValue('');
                props.onClear?.();
              }}
            >
              {React.isValidElement(props.clearable) ? (
                props.clearable
              ) : (
                <div className={`${classPrefix}-closeCircleFill`}>
                  <div className={`${classPrefix}-closeCircleFill-leftLine`}></div>
                  <div className={`${classPrefix}-closeCircleFill-rightLine`}></div>
                </div>
              )}
            </div>
          )}
          {props.endEnhancerOne && (
            <div className={`${classPrefix}-end-enhancer-one`} onMouseDown={keepFocus}>
              {props.endEnhancerOne}
            </div>
          )}
          {props.endEnhancerTwo && (
            <div className={`${classPrefix}-end-enhancer-two`} onMouseDown={keepFocus}>
              {props.endEnhancerTwo}
            </div>
          )}
        </div>
      </div>
      {props.warning && <div className={`${classPrefix}-helper-text`}>{props.warning}</div>}
    </div>,
  );
});

const Input = BaseInput as typeof BaseInput & InputInstance;

Input.setDefaultOption = (options: InputProps) => {
  defaultProps = Object.assign({}, defaultProps, options);
};

Input.displayName = 'Input';

export default Input;
