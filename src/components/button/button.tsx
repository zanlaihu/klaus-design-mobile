import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { ButtonProps, ButtonInstance } from './type';
import { mergeProps } from 'antd-mobile/src/utils/with-default-props';

const classPrefix = 'adw-button';

let defaultProps: ButtonProps = {
  color: 'default',
  fill: 'solid',
  block: false,
  size: 'middle',
  loading: false,
  type: 'button',
  radius: 'zero',
};

const BaseButton = forwardRef<HTMLButtonElement, ButtonProps>((p, ref) => {
  const {
    color,
    block,
    fill,
    size,
    loading,
    radius,
    disabled,
    className,
    leftIcon,
    rightIcon,
    ...props
  } = mergeProps(defaultProps, p);
  const btnDisabled = disabled || loading;
  return (
    <button
      ref={ref}
      disabled={btnDisabled}
      className={classNames(
        classPrefix,
        className,
        `${classPrefix}-fill-${fill}`,
        `${classPrefix}-${color}`,
        `${classPrefix}-${size}`,
        `${classPrefix}-radius-${radius}`,
        `${block && `${classPrefix}-block`}`,
        `${disabled && `${classPrefix}-disabled`}`,
        `${loading && `${classPrefix}-loading`}`,
      )}
      {...props}
    >
      {leftIcon && <span className={`${classPrefix}-Icon-leftIcon ${classPrefix}-Icon`}></span>}
      {loading ? (
        <>
          <div className={`${classPrefix}-loading-wrapper`}>
            <span className={`${classPrefix}-Icon-loading ${classPrefix}-Icon`}></span>
            {/* {props.loadingText ?? 'loading'} */}
          </div>
        </>
      ) : (
        props.children
      )}
      {rightIcon && <span className={`${classPrefix}-Icon-rightIcon ${classPrefix}-Icon`}></span>}
    </button>
  );
});

const Button = BaseButton as typeof BaseButton & ButtonInstance;

Button.setDefaultOption = (options: ButtonProps) => {
  defaultProps = mergeProps(defaultProps, options);
};

Button.displayName = 'Button';
export default Button;
