import { Button, Dialog } from 'antd-mobile';
import { DemoTitle } from 'antd-mobile/src/demos';
import React, { useState } from 'react';

import './demo.less';

const demoEnhancer = (
  <div className={'demo-enhancer'}>
    <div></div>
  </div>
);

const demoWholeImg = (
  <div className={'demo-whole-img'}>
    <div></div>
  </div>
);

export default () => {
  const [visible, setVisible] = useState(false);

  return (
    <>
      <DemoTitle title="Common" />
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            confirmText: 'confirm',
            closeOnConfirm: true,
          });
        }}
      >
        Confirm
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
          });
        }}
      >
        Close
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            renderContent: document.body,
          });
        }}
      >
        Confirm and Close
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            topImg: demoEnhancer,
          });
        }}
      >
        topImg1
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            topImg: demoWholeImg,
          });
        }}
      >
        topImg2
      </Button>

      <DemoTitle title="Button Direction" />
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
          });
        }}
      >
        column ( default )
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            direction: 'row',
          });
        }}
      >
        row
      </Button>

      <DemoTitle title="Close methods" />
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            closeOnMaskClick: true,
          });
        }}
      >
        Close on Mask Click
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            closeIcon: true,
          });
        }}
      >
        Close Icon
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            closeIcon: <span>X</span>,
          });
        }}
      >
        Custom Close Icon
      </Button>

      <DemoTitle title="Dialog radius" />
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            radius: 'zero',
          });
        }}
      >
        zero
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            radius: 'small',
          });
        }}
      >
        small
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            radius: 'medium',
          });
        }}
      >
        medium
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            closeText: 'close',
            confirmText: 'confirm',
            radius: 'large',
          });
        }}
      >
        large ( default )
      </Button>

      <DemoTitle title="Function"></DemoTitle>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Show function',
            content: 'It is a easy way to call dialog.',
            confirmText: 'action1',
            closeText: 'close',
            closeIcon: true,
            closeOnMaskClick: true,
            onConfirm: () => {
              alert('onConfirm.');
            },
            onClose: () => {
              alert('Has been closed.');
            },
          });
        }}
      >
        Synchronous Function
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Show function',
            content: 'It is a easy way to call dialog.',
            confirmText: 'action1',
            closeText: 'close',
            closeIcon: true,
            closeOnMaskClick: true,
            onConfirm: async () => {
              await new Promise((resolve) => setTimeout(resolve, 2000));
              alert('onConfirm.');
            },
            onClose: async () => {
              await new Promise((resolve) => setTimeout(resolve, 2000));
              alert('Has been closed.');
            },
          });
        }}
      >
        Asynchronous Function
      </Button>

      <DemoTitle title="Button radius"></DemoTitle>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            confirmText: 'confirm',
            closeOnConfirm: true,
          });
        }}
      >
        zero
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            confirmText: 'confirm',
            closeOnConfirm: true,
          });
        }}
      >
        small ( default )
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            confirmText: 'confirm',
            closeOnConfirm: true,
          });
        }}
      >
        large
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Dialog.show({
            title: 'Title',
            content:
              'Far out in the uncharted backwaters of the unfashionable end of the western spiral arm of the Galaxy lies a small unregarded yellow sun.',
            confirmText: 'confirm',
            closeOnConfirm: true,
          });
        }}
      >
        max
      </Button>

      <DemoTitle title="Custom children"></DemoTitle>
      <Button
        block
        onClick={() => {
          setVisible(true);
        }}
        fill="text"
      >
        customized Title &amp; Content &amp; Button
      </Button>
      <Dialog
        visible={visible}
        closeOnMaskClick={true}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div style={{ fontSize: '20px', textAlign: 'center' }}>Custom</div>
        <div style={{ textAlign: 'center' }}>No styles.</div>
        <Button
          onClick={() => {
            setVisible(false);
          }}
          fill="text"
          block
        >
          Close
        </Button>
      </Dialog>
    </>
  );
};
