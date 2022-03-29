import classNames from 'classnames';
import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from '../Button';
import { ColorToken, FillToken, RadiusToken } from '../_types';
import Dialog from './Dialog';
import { DialogProps } from './type';

const classPrefix = 'adw-dialog';

const show = (props: DialogProps) => {
  const container = document.createElement('div');

  document.body.appendChild(container);

  const unmount = () => {
    const unmountResult = ReactDOM.unmountComponentAtNode(container);
    if (unmountResult && container.parentNode) {
      container.parentNode.removeChild(container);
    }
  };
  const Wrapper = () => {
    const [visible, setVisible] = useState(true);

    const handleClose = () => {
      props.onClose?.();
      setVisible(false);
    };

    const confirmFooter = (props.confirmText || props.closeText) && (
      <div
        className={classNames(
          `${classPrefix}-button-content`,
          `${
            props.direction === 'row'
              ? `${classPrefix}-button-content-row`
              : `${classPrefix}-button-content-column`
          }`,
        )}
      >
        {props.confirmText && (
          <ActionButton
            fill="solid"
            color="primary"
            text={props.confirmText}
            onAction={async () => {
              await props.onConfirm?.();
              if (props.closeOnConfirm) {
                handleClose();
              }
            }}
          />
        )}
        {props.closeText && (
          <ActionButton
            fill="text"
            color="primary"
            text={props.closeText}
            onAction={async () => {
              await Promise.resolve(props.onClose?.());
              handleClose();
            }}
          />
        )}
      </div>
    );

    return (
      <Dialog
        {...props}
        visible={visible}
        afterClose={unmount}
        onClose={handleClose}
        footer={confirmFooter}
      />
    );
  };

  ReactDOM.render(<Wrapper />, container);
};

const ActionButton = ({
  text,
  onAction,
  fill,
  color,
  radius,
}: {
  text: string;
  onAction: () => void | Promise<void>;
  fill?: FillToken;
  color?: ColorToken;
  radius?: RadiusToken;
}) => {
  const [loading, setLoading] = useState(false);

  const handleClick = async () => {
    setLoading(true);
    try {
      await onAction();
      setLoading(false);
    } catch (e) {
      setLoading(false);
      throw e;
    }
  };

  const buttonRadius = typeof radius === 'undefined' ? 'small' : radius;

  return (
    <Button
      onClick={handleClick}
      block
      loading={loading}
      fill={fill}
      color={color}
      radius={buttonRadius}
    >
      {text}
    </Button>
  );
};

export default show;
