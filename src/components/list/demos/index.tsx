import { List } from 'antd-mobile';
import { DemoTitle } from 'antd-mobile/src/demos';
import React from 'react';

import './demo.less';

const divStyle = {
  width: '44px',
  height: '44px',
  backgroundColor: '#C0C0C0',
};

const avatar = <div style={divStyle}></div>;
const customAvatar = <div className={'demo-avatar'}></div>;
const customExtra = <div className={'demo-extra'}></div>;

export default () => {
  return (
    <>
      <DemoTitle title="Common-Compact"></DemoTitle>
      <List>
        <List.Item label="Label"></List.Item>
        <List.Item label="Label" title="title"></List.Item>
        <List.Item label="Label" title="title" subTitle="subTitle"></List.Item>
      </List>

      <DemoTitle title="Divider" />
      <List>
        <List.Item label="Label" divider></List.Item>
        <List.Item label="Label" title="title" divider></List.Item>
        <List.Item label="Label" title="title" subTitle="subTitle" divider></List.Item>
      </List>

      <DemoTitle title="onClick"></DemoTitle>
      <List>
        <List.Item label="Label" onClick={() => {}} divider></List.Item>
        <List.Item label="Label" title="title" onClick={() => {}} divider></List.Item>
        <List.Item
          label="Label"
          title="title"
          subTitle="subTitle"
          onClick={() => {}}
          divider
        ></List.Item>
      </List>

      <DemoTitle title="Avator"></DemoTitle>
      <List>
        <List.Item prefix={avatar} label="Label" onClick={() => {}} divider></List.Item>
        <List.Item
          prefix={avatar}
          label="Label"
          title="title"
          onClick={() => {}}
          divider
        ></List.Item>
        <List.Item
          prefix={avatar}
          label="Label"
          title="title"
          subTitle="subTitle"
          onClick={() => {}}
          divider
        ></List.Item>
      </List>

      <DemoTitle title="Extra"></DemoTitle>
      <List>
        <List.Item
          prefix={avatar}
          label="Label"
          onClick={() => {}}
          divider
          extra="extra"
        ></List.Item>
        <List.Item
          prefix={avatar}
          label="Label"
          title="title"
          onClick={() => {}}
          divider
          extra="extra"
        ></List.Item>
        <List.Item
          prefix={avatar}
          label="Label"
          title="title"
          subTitle="subTitle"
          onClick={() => {}}
          divider
          extra="extra"
        ></List.Item>
        <List.Item
          prefix={avatar}
          label="Label"
          title="title"
          subTitle="subTitle"
          onClick={() => {}}
          divider
          extra={
            <label>
              <input type="radio" name="radio" />
            </label>
          }
        ></List.Item>
      </List>

      <DemoTitle title="Label position"></DemoTitle>
      <List>
        <List.Item label="default" divider></List.Item>
        <List.Item
          style={{
            '--label-position': 'center',
          }}
          label="center"
          divider
        ></List.Item>
        <List.Item
          style={{
            '--label-position': 'right',
          }}
          label="right"
          divider
        ></List.Item>
      </List>

      <DemoTitle title="Title position"></DemoTitle>
      <List>
        <List.Item title="default" divider></List.Item>
        <List.Item
          style={{
            '--font-position': 'center',
          }}
          title="center"
          divider
        ></List.Item>
        <List.Item
          style={{
            '--font-position': 'right',
          }}
          title="right"
          divider
        ></List.Item>
      </List>

      <DemoTitle title="Custom"></DemoTitle>
      <List>
        <List.Item
          prefix={customAvatar}
          label="custom"
          title="title"
          subTitle="subTitle"
          onClick={() => {
            alert('list clicked.');
          }}
          divider
          extra={customExtra}
          style={{
            '--background-color': 'black',
            '--active-background-color': 'blue',
            '--radius': '5px',
            '--label-color': 'white',
            '--font-color': 'white',
            '--padding': '0px',
            '--content-padding': '0px',
            '--divider-color': 'green',
            '--divider-height': '3px',
          }}
        ></List.Item>
        <List.Item
          prefix={customAvatar}
          label="custom"
          title="title"
          subTitle="subTitle"
          onClick={() => {
            alert('list clicked.');
          }}
          divider
          extra={customExtra}
          style={{
            '--background-color': 'black',
            '--content-color': 'grey',
            '--active-background-color': 'blue',
            '--radius': '5px',
            '--content-radius': '5px',
            '--label-color': 'white',
            '--font-color': 'white',
            '--padding': '0px',
            '--divider-color': 'green',
            '--divider-height': '3px',
          }}
        ></List.Item>
      </List>

      <DemoTitle title="Multiple custom for Paying"></DemoTitle>
      <List style={{ '--background-color': 'black' }}>
        <List.Item
          style={{
            '--label-position': 'center',
            '--label-color': 'white',
          }}
          label="Summary"
        ></List.Item>
        <List.Item
          style={{
            '--font-size': '10px',
            '--font-color': '#cccccc',
            '--padding': '0px 0px',
          }}
          title="Network provider"
          extra="Scan to Pay"
        ></List.Item>
        <List.Item
          style={{
            '--font-size': '10px',
            '--font-color': '#cccccc',
            '--padding': '0px 0px',
          }}
          title="Buy for"
          extra="account 081 224 5352"
        ></List.Item>
        <List.Item
          style={{
            '--font-color': 'white',
            '--font-position': 'center',
          }}
          title="Select your payment method:"
        ></List.Item>
        <List.Item
          title="Your wallet or card"
          style={{
            '--font-color': '#cccccc',
            '--font-size': '5px',
          }}
        ></List.Item>
        <List.Item
          style={{
            '--font-color': 'white',
            '--font-size': '10px',
            '--content-color': 'rgb(37,39,55)',
            '--content-radius': '3px',
          }}
          prefix={avatar}
          title="Mastercard"
          subTitle="Credit **** 2246"
          extra="Default"
          onClick={() => {}}
        ></List.Item>
        <List.Item
          style={{
            '--font-color': 'white',
            '--font-position': 'center',
          }}
          title="Cost details"
        ></List.Item>
        <List.Item
          style={{
            '--font-color': 'white',
            '--content-color': 'rgb(37,39,55)',
            '--content-radius': '3px',
          }}
          title="Total"
          extra="R 1 000.00"
        ></List.Item>
        <List.Item
          divider
          style={{
            '--divider-color': 'rgb(69,70,87)',
            '--divider-height': '2px',
          }}
        ></List.Item>
        <List.Item
          style={{
            '--font-position': 'center',
            '--font-size': '10px',
            '--font-color': '#cccccc',
          }}
          title="Secure checkout"
        ></List.Item>
      </List>
    </>
  );
};
