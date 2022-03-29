import { Progress } from 'antd-mobile';
import { DemoTitle } from 'antd-mobile/src/demos';
import React from 'react';


export default () => {
  return (
    <>
      <DemoTitle title="Linear Progress"></DemoTitle>
      <Progress percent={30} label="30%" />
      <Progress
        percent={40}
        label="It is a customized progress."
        radius="large"
        size="large"
        style={{
          '--label-color': '#fe6673',
          '--finished-color': '#2ae0c8',
        }}
      />

      <DemoTitle title="Steps Progress"></DemoTitle>
      <Progress steps={5} currentStep={3} label="3/5" />
      <Progress
        steps={5}
        currentStep={4}
        label="4/5"
        radius="large"
        size="medium"
        style={{
          '--label-color': '#fe6673',
          '--finished-color': '#2ae0c8',
          '--current-color': '#cbf5fb',
          '--height': '4px',
        }}
      />
    </>
  );
};
