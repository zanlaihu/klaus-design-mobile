import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { SnackbarProps, SnackbarInstance } from './type';
import Mask from '../Mask';
import { show, clear, action } from './methods';
import Button from '../Button';
import { mergeProps } from 'antd-mobile/src/utils/with-default-props';

const classPrefix = 'adw-snackbar';

let defaultProps: SnackbarProps = {
  visible: false,
  hideMask: false,
  radius: 'medium',
  infinity: false,
  maskStyle: { backgroundColor: 'rgba(0,0,0,0)' },
  buttonProps: {
    size: 'small',
    radius: 'small',
    style: { '--text-color': 'var(--adw-color-content-onlightcolor, #151515)' },
  },
};

const BaseSnackbar = forwardRef<HTMLDivElement, SnackbarProps>((p, ref) => {
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
          className={classNames(`${classPrefix}-content`, `${classPrefix}-radius-${props.radius}`)}
        >
          <div className={`${classPrefix}-flex-content`}>
            {props.state && (
              <div className={`${classPrefix}-${props.state}`}>
                <div className={`${classPrefix}-${props.state}-up`} />
                <div className={`${classPrefix}-${props.state}-down`} />
              </div>
            )}
            {props.img && <div className={`${classPrefix}-img`}>{props.img}</div>}
            {props.label && <div className={`${classPrefix}-label`}>{props.label}</div>}
            {props.actionText && (
              <div className={`${classPrefix}-action`}>
                <Button
                  className={`${classPrefix}-button`}
                  style={props.buttonProps?.style}
                  fill={props.buttonProps?.fill}
                  color={props.buttonProps?.color}
                  radius={props.buttonProps?.radius}
                  size={props.buttonProps?.size}
                  block={props.buttonProps?.block}
                  disabled={props.buttonProps?.disabled}
                  loading={props.buttonProps?.loading}
                  loadingText={props.buttonProps?.loadingText}
                  onClick={props.onAction}
                >
                  {props.actionText}
                </Button>
              </div>
            )}
          </div>
          {props.children && <div className={`${classPrefix}-children`}>{props.children}</div>}
        </div>
      </div>
    </div>
  );

  return content;
});

const Snackbar = BaseSnackbar as typeof BaseSnackbar & SnackbarInstance;

Snackbar.setDefaultOption = (options: SnackbarProps) => {
  defaultProps = mergeProps(defaultProps, options);
};

Snackbar.show = show;
Snackbar.action = action;
Snackbar.clear = clear;

Snackbar.displayName = 'Snackbar';
export default Snackbar;
