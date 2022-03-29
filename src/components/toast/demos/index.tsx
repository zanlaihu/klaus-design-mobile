import { Button, Toast } from 'antd-mobile';
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
          Toast.show({ label: 'label', duration: 5000 });
        }}
      >
        single label
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({ img: demoImg });
        }}
      >
        single image
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({ img: demoImg, label: 'label' });
        }}
      >
        image with label
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({
            img: demoImg,
            label:
              'Favorite and favourite are two variant spellings of the same word with the exact same definition.',
          });
        }}
      >
        long label
      </Button>

      <DemoTitle title="default state" />
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({ state: 'success' });
        }}
      >
        success
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({ state: 'fail' });
        }}
      >
        fail
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({ state: 'color-success' });
        }}
      >
        colorful success
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({ label: 'Success', state: 'success' });
        }}
      >
        success with label
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({ label: 'Fail', state: 'fail' });
        }}
      >
        fail with label
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({ label: 'Added to my favorite list', state: 'color-success' });
        }}
      >
        colorful success with label
      </Button>

      <DemoTitle title="loading" />
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.loading({});
        }}
      >
        loading
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.loading({ label: 'Loading' });
        }}
      >
        loading with label
      </Button>

      <DemoTitle title="hideMask" />
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({
            label: 'Success',
            state: 'success',
          });
        }}
      >
        unhidden - default
      </Button>
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.loading({
            hideMask: true,
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
          Toast.show({
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
          Toast.show({
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
          Toast.show({
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
          Toast.clear();
        }}
      >
        clear
      </Button>

      <DemoTitle title="custom width" />
      <Button
        block
        fill="text"
        onClick={() => {
          Toast.show({
            img: demoImg,
            label:
              'Favorite and favourite are two variant spellings of the same word with the exact same definition.',
            style: {
              '--width': '200px',
              '--top': '20%',
              '--background-color': 'rgba(12,124,15,0.2)',
              '--label-color': 'pink',
              '--box-shadow': '0px 4px 16px 0px rgba(0, 200, 200, 0.5)',
            },
            radius: 'zero',
          });
        }}
      >
        custom toast
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
      <Toast visible={visible} hideMask={true} state="color-success" />
    </>
  );
};
