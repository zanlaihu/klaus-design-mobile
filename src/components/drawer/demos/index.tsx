import React, { useState } from 'react'
import { Button, Drawer, List } from 'antd-mobile'

import './demo.less'
import { DemoTitle } from 'antd-mobile/src/demos'

const customButton = (
  <div className={`custom-close-button`}>
    <div className={`custom-close-button-leftLine`}></div>
    <div className={`custom-close-button-rightLine`}></div>
  </div>
)

const avatar = <div className={`avatar`}></div>

export default () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [visible7, setVisible7] = useState(false)
  const [visible8, setVisible8] = useState(false)
  const [visible9, setVisible9] = useState(false)
  const [visible10, setVisible10] = useState(false)
  const [visible11, setVisible11] = useState(false)
  const [visible12, setVisible12] = useState(false)
  const [visible13, setVisible13] = useState(false)

  return (
    <>
      <DemoTitle title='common' />
      <Button
        onClick={() => {
          setVisible1(true)
        }}
        fill='text'
        block
      >
        Bottom
      </Button>
      <Drawer
        visible={visible1}
        onMaskClick={() => {
          setVisible1(false)
        }}
      ></Drawer>

      <Button
        onClick={() => {
          setVisible2(true)
        }}
        fill='text'
        block
      >
        top
      </Button>
      <Drawer
        visible={visible2}
        onMaskClick={() => {
          setVisible2(false)
        }}
        direction={'top'}
      ></Drawer>

      <Button
        onClick={() => {
          setVisible3(true)
        }}
        fill='text'
        block
      >
        left
      </Button>
      <Drawer
        visible={visible3}
        onMaskClick={() => {
          setVisible3(false)
        }}
        direction={'left'}
      ></Drawer>

      <Button
        onClick={() => {
          setVisible4(true)
        }}
        fill='text'
        block
      >
        right
      </Button>
      <Drawer
        visible={visible4}
        onMaskClick={() => {
          setVisible4(false)
        }}
        direction={'right'}
      ></Drawer>

      <DemoTitle title='length' />
      <Button
        onClick={() => {
          setVisible5(true)
        }}
        fill='text'
        block
      >
        35%
      </Button>
      <Drawer
        visible={visible5}
        onMaskClick={() => {
          setVisible5(false)
        }}
        length='35%'
      ></Drawer>

      <Button
        onClick={() => {
          setVisible6(true)
        }}
        fill='text'
        block
      >
        400px
      </Button>
      <Drawer
        visible={visible6}
        onMaskClick={() => {
          setVisible6(false)
        }}
        length='400px'
      ></Drawer>

      <DemoTitle title='radius' />
      <Button
        onClick={() => {
          setVisible7(true)
        }}
        fill='text'
        block
      >
        zero
      </Button>
      <Drawer
        visible={visible7}
        onMaskClick={() => {
          setVisible7(false)
        }}
        radius='zero'
      ></Drawer>

      <Button
        onClick={() => {
          setVisible8(true)
        }}
        fill='text'
        block
      >
        small
      </Button>
      <Drawer
        visible={visible8}
        onMaskClick={() => {
          setVisible8(false)
        }}
        direction='top'
      ></Drawer>

      <Button
        onClick={() => {
          setVisible9(true)
        }}
        fill='text'
        block
      >
        medium
      </Button>
      <Drawer
        visible={visible9}
        onMaskClick={() => {
          setVisible9(false)
        }}
        radius='medium'
        direction='right'
      ></Drawer>

      <Button
        onClick={() => {
          setVisible10(true)
        }}
        fill='text'
        block
      >
        large
      </Button>
      <Drawer
        visible={visible10}
        onMaskClick={() => {
          setVisible10(false)
        }}
        radius='large'
        direction='left'
      ></Drawer>

      <DemoTitle title='close button' />
      <Button
        onClick={() => {
          setVisible11(true)
        }}
        fill='text'
        block
      >
        default button
      </Button>
      <Drawer
        visible={visible11}
        onMaskClick={() => {
          setVisible11(false)
        }}
        closeBtn={true}
        onClose={() => {
          setVisible11(false)
        }}
      ></Drawer>

      <Button
        onClick={() => {
          setVisible12(true)
        }}
        fill='text'
        block
      >
        custom button
      </Button>
      <Drawer
        visible={visible12}
        onMaskClick={() => {
          setVisible12(false)
        }}
        closeBtn={customButton}
        onClose={() => {
          setVisible12(false)
        }}
        closeBtnPosition='left'
      ></Drawer>

      <DemoTitle title='custom' />
      <Button
        onClick={() => {
          setVisible13(true)
        }}
        fill='text'
        block
      >
        custom drawer
      </Button>
      <Drawer
        visible={visible13}
        onMaskClick={() => {
          setVisible13(false)
        }}
        style={{
          'backgroundColor': 'rgb(36,39,56)',
        }}
      >
        {/* <List
          style={{
            '--background-color': 'rgb(36,39,56)',
            '--font-color': 'white',
            '--font-size': '10px',
          }}
        >
          <List.Item
            title='Please select the wallet or card you would like to use for this payment'
            style={{ '--font-position': 'center' }}
          ></List.Item>
          <List.Item
            style={{ '--divider-height': '2px' }}
            prefix={avatar}
            title='Mastercard'
            subTitle='Credit **** 2246'
            extra='Default'
            onClick={() => {}}
            divider
          ></List.Item>
          <List.Item
            style={{ '--divider-height': '2px' }}
            prefix={avatar}
            title='Mastercard'
            subTitle='Credit **** 2246'
            extra='Default'
            onClick={() => {}}
            divider
          ></List.Item>
          <List.Item
            style={{ '--divider-color': 'orange' }}
            prefix={avatar}
            title='Mastercard'
            subTitle='Credit **** 2246'
            extra='Default'
            onClick={() => {}}
            divider
          ></List.Item>
          <List.Item
            style={{ '--divider-height': '2px' }}
            prefix={avatar}
            title='Mastercard'
            subTitle='Credit **** 2246'
            extra='Default'
            onClick={() => {}}
            divider
          ></List.Item>
          <List.Item
            style={{ '--divider-height': '2px' }}
            prefix={avatar}
            title='Mastercard'
            subTitle='Credit **** 2246'
            extra='Default'
            onClick={() => {}}
            divider
          ></List.Item>
          <List.Item
            style={{ '--divider-height': '2px' }}
            prefix={avatar}
            title='Mastercard'
            subTitle='Credit **** 2246'
            extra='Default'
            onClick={() => {}}
            divider
          ></List.Item>
          <List.Item
            style={{ '--divider-height': '2px' }}
            prefix={avatar}
            title='Mastercard'
            subTitle='Credit **** 2246'
            extra='Default'
            onClick={() => {}}
            divider
          ></List.Item>
          <List.Item
            style={{ '--font-position': 'center' }}
            title='+ Add a new card'
          ></List.Item>
        </List> */}
      </Drawer>
    </>
  )
}
