import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { DialogProps, DialogInstance } from './type';
import { createPortal } from 'react-dom';
import { useSpring, animated } from '@react-spring/web';
import show from './show';
import Mask from '../Mask';
import { mergeProps } from 'antd-mobile/src/utils/with-default-props';

const classPrefix = 'adw-dialog';

/**
 * The default props of Dialog component
 */
let defaultProps: DialogProps = {
  visible: false,
  radius: 'large',
  closeOnConfirm: false,
  closeOnMaskClick: false,
  closeIcon: false,
};

/**
 * The main function of Dialog component
 */
const BaseDialog = forwardRef<HTMLDivElement, DialogProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const renderContent = props.renderContent || document.body;
  const [active, setActive] = React.useState(props.visible);
  const style = useSpring({
    opacity: props.visible ? 1 : 0,
    config: {
      precision: 0.01,
      mass: 1,
      tension: 200,
      friction: 30,
    },
    onStart: () => {
      setActive(true);
    },
    onRest: () => {
      setActive(props.visible);
      if (props.visible) {
        props.afterShow?.();
      } else {
        props.afterClose?.();
      }
    },
  });
  const content = (
    <animated.div style={style}>
      <Mask
        visible={props.visible}
        onMaskClick={props.closeOnMaskClick ? props.onClose : undefined}
        className={props.maskClass}
        style={props.maskStyle}
      ></Mask>
      <div
        ref={ref}
        className={classNames(
          props.className,
          `${classPrefix}`,
          `${active ? `${classPrefix}-show` : ''}`,
          {
            [`${classPrefix}-radius-${props.radius}`]: !!props.radius,
          },
        )}
        style={props.style}
      >
        {props.closeIcon &&
          (typeof props.closeIcon === 'boolean' ? (
            <div className={`${classPrefix}-close-icon`} onClick={props.onClose}>
              <CloseCircleFill />
            </div>
          ) : (
            <div onClick={props.onClose}>{props.closeIcon}</div>
          ))}
        {props.topImg && <div className={`${classPrefix}-enhancer`}>{props.topImg}</div>}
        {props.title && <div className={`${classPrefix}-title`}>{props.title}</div>}
        {props.content && <div className={`${classPrefix}-content`}>{props.content}</div>}
        {props.children && <div className={`${classPrefix}-children`}>{props.children}</div>}
        {props.footer}
      </div>
    </animated.div>
  );

  return createPortal(content, renderContent);
});

/**
 * The default close icon on the top right side
 * @returns
 */
const CloseCircleFill = () => {
  return (
    <div className={`${classPrefix}-closeCircleFill`}>
      <div className={`${classPrefix}-closeCircleFill-leftLine`}></div>
      <div className={`${classPrefix}-closeCircleFill-rightLine`}></div>
    </div>
  );
};

const Dialog = BaseDialog as typeof BaseDialog & DialogInstance;

Dialog.setDefaultOption = (options: DialogProps) => {
  defaultProps = mergeProps(defaultProps, options);
};

Dialog.show = show;

Dialog.displayName = 'Dialog';
export default Dialog;
