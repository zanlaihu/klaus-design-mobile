import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Snackbar from '.';
import { SnackbarProps } from './type';

const containers = [] as HTMLDivElement[];

const unmount = (container: HTMLDivElement) => {
  const unmountResult = ReactDOM.unmountComponentAtNode(container);
  if (unmountResult && container.parentNode) {
    container.parentNode.removeChild(container);
  }
};

export const show = (props: SnackbarProps) => {
  const container = document.createElement('div');
  const bodyContainer = props.renderContent || document.body;
  bodyContainer.appendChild(container);
  containers.push(container);

  const Wrapper = () => {
    const duration = typeof props.duration === 'undefined' ? 2000 : props.duration;

    useEffect(() => {
      if (props.infinity === true) {
        return;
      }

      const timer = window.setTimeout(() => {
        unmount(container);
      }, duration);

      return () => {
        window.clearTimeout(timer);
      };
    }, [props.infinity]);

    return <Snackbar {...props} visible={true} />;
  };

  ReactDOM.render(<Wrapper />, container);
};

export const action = (props: SnackbarProps) => {
  const container = document.createElement('div');
  const bodyContainer = props.renderContent || document.body;
  bodyContainer.appendChild(container);
  containers.push(container);

  const Wrapper = () => {
    return (
      <Snackbar
        {...props}
        visible={true}
        onAction={async () => {
          await props.onAction?.();
          if (props.closeOnAction) {
            unmount(container);
          }
        }}
      />
    );
  };

  ReactDOM.render(<Wrapper />, container);
};

export const clear = () => {
  while (true) {
    const container = containers.pop();
    if (!container) break;
    unmount(container);
  }
};
