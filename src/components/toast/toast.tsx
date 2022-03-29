import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { ToastProps, ToastInstance } from './type';
import Mask from '../Mask';
import { show, clear, loading } from './methods';
import { mergeProps } from 'antd-mobile/src/utils/with-default-props';

const classPrefix = 'adw-toast';

let defaultProps: ToastProps = {
  visible: false,
  hideMask: false,
  radius: 'large',
  infinity: false,
  maskStyle: { backgroundColor: 'rgba(0,0,0,0)' },
};

const BaseToast = forwardRef<HTMLDivElement, ToastProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);

  const content = (
    <div ref={ref} className={classNames(props.className, `${classPrefix}`)} style={props.style}>
      <Mask
        visible={props.visible && !props.hideMask}
        style={props.maskStyle}
        className={props.maskClass}
      ></Mask>
      <div
        className={classNames(`${classPrefix}-wrap`, `${props.visible && `${classPrefix}-show`}`)}
      >
        <div
          className={classNames(
            `${classPrefix}-content`,
            `${props.label && `${classPrefix}-with-label`}`,
            `${classPrefix}-radius-${props.radius}`,
          )}
        >
          {props.state && (
            <div className={`${classPrefix}-${props.state}`}>
              <div className={`${classPrefix}-${props.state}-up`} />
              <div className={`${classPrefix}-${props.state}-down`} />
            </div>
          )}
          {props.img && <div className={`${classPrefix}-img`}>{props.img}</div>}
          {props.label && (
            <div
              className={classNames(
                `${classPrefix}-label`,
                `${props.img && props.label && `${classPrefix}-label-with-img`}`,
                `${props.state && props.label && `${classPrefix}-label-with-img`}`,
              )}
            >
              {props.label}
            </div>
          )}
        </div>
      </div>
    </div>
  );

  return content;
});

const Toast = BaseToast as typeof BaseToast & ToastInstance;

Toast.setDefaultOption = (options: ToastProps) => {
  defaultProps = mergeProps(defaultProps, options);
};

Toast.show = show;
Toast.loading = loading;
Toast.clear = clear;

Toast.displayName = 'Toast';
export default Toast;
