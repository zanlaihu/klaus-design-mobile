import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';
import Toast from '.';
import { ToastProps } from './type';

const classPrefix = 'adw-toast';

const containers = [] as HTMLDivElement[];

const unmount = (container: HTMLDivElement) => {
  const unmountResult = ReactDOM.unmountComponentAtNode(container);
  if (unmountResult && container.parentNode) {
    container.parentNode.removeChild(container);
  }
};

export const show = (props: ToastProps) => {
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

    return <Toast {...props} visible={true} />;
  };

  ReactDOM.render(<Wrapper />, container);
};

export const loading = (props: ToastProps) => {
  const container = document.createElement('div');
  const bodyContainer = props.renderContent || document.body;
  bodyContainer.appendChild(container);
  containers.push(container);

  const Wrapper = () => {
    return (
      <Toast {...props} visible={true} img={<div className={`${classPrefix}-loading`}></div>} />
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
