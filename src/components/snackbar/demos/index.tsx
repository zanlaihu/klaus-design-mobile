import { Button, Snackbar } from 'antd-mobile';
import { DemoTitle } from 'antd-mobile/src/demos';
import React, { useState } from 'react';

import './demo.less';

const demoImg = <div className={`demo-img`}></div>;

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <DemoTitle title="common" />
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({ label: 'Snackbar message.' });
        }}
      >
        single message
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({ label: 'Snackbar message is too long to display in a single line.' });
        }}
      >
        long message
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({
            img: demoImg,
            label: 'Snackbar message.',
          });
        }}
      >
        message with image
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({
            img: demoImg,
            label: 'Snackbar message is too long to display in a single line.',
          });
        }}
      >
        long message with image
      </Button>

      <DemoTitle title="action" />
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.action({
            state: 'success',
            label: 'It is a very long sentence.',
            actionText: 'Action',
            closeOnAction: true,
          });
        }}
      >
        close on action
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.action({
            state: 'success',
            label: 'snackbar',
            actionText: 'Action',
            closeOnAction: true,
            onAction: () => {
              alert('action.');
            },
          });
        }}
      >
        on action function
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.action({
            state: 'success',
            label: 'snackbar',
            actionText: 'Action',
            closeOnAction: true,
            onAction: async () => {
              await new Promise((resolve) => setTimeout(resolve, 2000));
              alert('onConfirm.');
            },
          });
        }}
      >
        on action async function
      </Button>

      <DemoTitle title="default state" />
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({ label: 'accent', state: 'accent' });
        }}
      >
        accent
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({ label: 'success', state: 'success' });
        }}
      >
        success
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({ label: 'Error', state: 'error' });
        }}
      >
        error
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({ label: 'Warning', state: 'warning' });
        }}
      >
        warning
      </Button>

      <DemoTitle title="hideMask" />
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.action({
            label: 'Success',
            state: 'success',
            actionText: 'Action',
            closeOnAction: true,
          });
        }}
      >
        unhidden - default
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.action({
            label: 'Success',
            state: 'success',
            hideMask: true,
            actionText: 'Action',
            closeOnAction: true,
          });
        }}
      >
        hide
      </Button>

      <DemoTitle title="duration" />
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({
            label: 'Success',
            state: 'success',
          });
        }}
      >
        2000 - default
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({
            label: 'Success',
            state: 'success',
            duration: 5000,
          });
        }}
      >
        5000
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.show({
            label: 'Success',
            state: 'success',
            infinity: true,
            hideMask: true,
          });
        }}
      >
        infinity
      </Button>

      <DemoTitle title="clear" />
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.clear();
        }}
      >
        clear
      </Button>

      <DemoTitle title="custom style" />
      <Button
        block
        fill="text"
        onClick={() => {
          Snackbar.action({
            state: 'success',
            label: 'snackbar',
            actionText: 'Action',
            closeOnAction: true,
            style: {
              '--width': '250px',
              '--top': '20%',
              '--background-color': 'rgba(12,14,115,0.2)',
              '--label-color': 'pink',
              '--box-shadow': '0px 4px 16px 0px rgba(0, 300, 0, 0.4)',
            },
            buttonProps: {
              style: { '--text-color': 'orange', '--background-color': 'black' },
              radius: 'large',
            },
            radius: 'zero',
          });
        }}
      >
        custom style
      </Button>

      <DemoTitle title="manually show and hide"></DemoTitle>
      <Button
        block
        fill="text"
        onClick={() => {
          setVisible(true);
        }}
      >
        Show
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          setVisible(false);
        }}
      >
        Hide
      </Button>
      <Snackbar visible={visible} hideMask={true} state="accent" label="snackbar" />
    </>
  );
};
