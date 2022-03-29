import { Input } from 'antd-mobile';
import { DemoTitle } from 'antd-mobile/src/demos';
import React from 'react';

import './demo.less';

const demoEnhancer = <div className={`demo-common-enhancer`}></div>;
const customEnhancer = <div className={`demo-custom-enhancer`}></div>;
const demoCloseBtn = (
  <div className={`demo-closeCircleFill`}>
    <div className={`demo-closeCircleFill-leftLine`}></div>
    <div className={`demo-closeCircleFill-rightLine`}></div>
  </div>
);

export default () => {
  return (
    <>
      <DemoTitle title="Common" />
      <Input label="Label" defaultValue="common" />
      <Input label="Label" defaultValue="outlined" outlined />

      <DemoTitle title="placeholder" />
      <Input label="Label" placeholder="Hint text here" />
      <Input label="Label" placeholder="Hint text here" outlined />

      <DemoTitle title="No label" />
      <Input placeholder="no label" />
      <Input placeholder="no label" outlined />

      <DemoTitle title="Error" />
      <Input label="Label" defaultValue="Error message" warning="Error message on left side" />
      <Input
        label="Label"
        defaultValue="Error message"
        warning="Error message on left side"
        outlined
      />

      <DemoTitle title="Disabled" />
      <Input label="Disabled" disabled />
      <Input label="Disabled" outlined disabled />

      <DemoTitle title="Enhancer" />
      <Input
        startEnhancer={demoEnhancer}
        endEnhancerOne={demoEnhancer}
        endEnhancerTwo={demoEnhancer}
        placeholder="no label"
      />
      <Input
        label="Label"
        startEnhancer={demoEnhancer}
        endEnhancerOne={demoEnhancer}
        endEnhancerTwo={demoEnhancer}
        placeholder="startEnhancer"
      />
      <Input
        label="Label"
        endEnhancerTwo={demoEnhancer}
        endEnhancerOne={demoEnhancer}
        placeholder="One endEnhancer"
      />
      <Input
        startEnhancer={demoEnhancer}
        endEnhancerTwo={demoEnhancer}
        endEnhancerOne={demoEnhancer}
        placeholder="no label"
        outlined
      />
      <Input
        label="label"
        startEnhancer={demoEnhancer}
        endEnhancerOne={demoEnhancer}
        endEnhancerTwo={demoEnhancer}
        placeholder="startEnhancer"
        outlined
      />
      <Input
        label="label"
        endEnhancerOne={demoEnhancer}
        endEnhancerTwo={demoEnhancer}
        placeholder="Two endEnhancers"
        outlined
      />

      <DemoTitle title="clearable" />
      <Input clearable defaultValue="no label" />
      <Input label="Label" clearable defaultValue="with label" />

      <DemoTitle title="Read only input" />
      <Input label="Readonly input" defaultValue="Read only" readOnly />

      <DemoTitle title="Custom component" />
      <Input
        startEnhancer={customEnhancer}
        endEnhancerOne={customEnhancer}
        endEnhancerTwo={customEnhancer}
        clearable={demoCloseBtn}
        label="Custom demo"
        defaultValue="Custom demo"
        style={{
          '--background-color': '#151515',
          '--input-color': 'white',
          '--label-active-color': 'orange',
          '--divider-active-color': 'green',
          '--left-right-spacing': '0px',
        }}
      />
      <Input
        startEnhancer={customEnhancer}
        endEnhancerOne={customEnhancer}
        endEnhancerTwo={customEnhancer}
        clearable={demoCloseBtn}
        label="Custom demo"
        defaultValue="Custom demo"
        style={{
          '--border-active-color': 'orange',
          '--label-active-color': 'pink',
        }}
        outlined
        radius="large"
      />

      <DemoTitle title="Format" />
      <Input
        label="Format example"
        defaultValue="12345678901234"
        format={{
          templates: '{4} {4} {4} {4} {4} {4}',
          pattern: '[0-9]+',
        }}
        clearable
      />
      <Input
        label="Format string"
        defaultValue="123456"
        placeholder="Hint: xxx xxx"
        format={{
          templates: '{3} {3}',
          pattern: '[0-9]+',
        }}
      />
      <Input
        defaultValue="aaabbbcccddd"
        label="Multiple templates"
        format={{
          templates: ['{3} {3}', '{4}-{4}-{4}'],
          pattern: '[a-zA-z0-9]+',
        }}
      />
    </>
  );
};
