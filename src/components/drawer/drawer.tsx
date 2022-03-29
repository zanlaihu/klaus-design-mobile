import React, { forwardRef } from 'react';
import classNames from 'classnames';

import { DrawerProps, DrawerInstance } from './type';

import { createPortal } from 'react-dom';
import { mergeProps } from 'antd-mobile/src/utils/with-default-props';
import { Mask } from 'antd-mobile';

const classPrefix = 'adw-drawer';

let defaultProps: DrawerProps = {
  direction: 'bottom',
  visible: false,
  hideMask: false,
  radius: 'small',
  length: '75%',
  closeBtnPosition: 'right',
};

const BaseDrawer = forwardRef<HTMLDivElement, DrawerProps>((p, ref) => {
  const props = mergeProps(defaultProps, p);
  const renderContent = props.renderContent || document.body;

  const getWidth = () => {
    if (props.direction === 'left' || props.direction === 'right') {
      return `${props.length}`;
    }
    return `100%`;
  };

  const getHeight = () => {
    if (props.direction === 'top' || props.direction === 'bottom') {
      return `${props.length}`;
    }
    return `100%`;
  };

  const content = (
    <div ref={ref} className={classNames(props.className, `${classPrefix}`)} style={props.style}>
      <Mask
        visible={props.visible && !props.hideMask}
        style={props.maskStyle}
        className={props.maskClass}
        onMaskClick={props.onMaskClick}
      ></Mask>
      <div
        className={classNames(
          `${classPrefix}-content`,
          `${classPrefix}-${props.direction}-radius-${props.radius}`,
          `${classPrefix}-${props.direction}`,
          `${props.visible && `${classPrefix}-show`}`,
        )}
        style={{
          ...props.style,
          width: getWidth(),
          height: getHeight(),
        }}
      >
        {props.closeBtn && (
          <div
            className={classNames(
              `${classPrefix}-close`,
              `${classPrefix}-close-${props.closeBtnPosition}`,
            )}
            onClick={props.onClose}
          >
            {React.isValidElement(props.closeBtn) ? (
              props.closeBtn
            ) : (
              <div className={`${classPrefix}-close-button`}>
                <div className={`${classPrefix}-close-button-leftLine`}></div>
                <div className={`${classPrefix}-close-button-rightLine`}></div>
              </div>
            )}
          </div>
        )}
        {props.children && <div className={`${classPrefix}-children`}>{props.children}</div>}
      </div>
    </div>
  );

  return createPortal(content, renderContent);
});

const Drawer = BaseDrawer as typeof BaseDrawer & DrawerInstance;

Drawer.setDefaultOption = (options: DrawerProps) => {
  defaultProps = mergeProps(defaultProps, options);
};

Drawer.displayName = 'Drawer';
export default Drawer;
