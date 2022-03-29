import React from 'react'
import { Button, Space } from 'antd-mobile'
import { DemoBlock } from 'demos'

export default () => {
  return (
    <>
      <DemoBlock title='不同颜色的按钮'>
        <Space wrap>
          <Button>Default</Button>
          <Button
            onClick={() => {
              alert('button')
            }}
            style={{
              '--background-color': 'black',
              cursor: 'not-allowed',
              '--text-color': '#fff',
            }}
          >
            Default
          </Button>
          <Button color='primary'>primary</Button>
          <Button color='success'>success</Button>
          <Button color='warning'>warning</Button>
          <Button color='danger'>danger</Button>
        </Space>
      </DemoBlock>

      <DemoBlock title='块级按钮'>
        <Button block color='primary' size='large'>
          Block Button
        </Button>
      </DemoBlock>

      <DemoBlock title='填充模式'>
        <Space wrap>
          <Button color='primary' fill='solid'>
            Solid
          </Button>
          <Button color='primary' fill='outline'>
            Outline
          </Button>

        </Space>
      </DemoBlock>

      <DemoBlock title='不同大小的按钮'>
        <Space wrap align='center'>

          <Button size='small' color='primary'>
            Small
          </Button>
          <Button size='middle' color='primary'>
            Middle
          </Button>
          <Button size='large' color='primary'>
            Large
          </Button>
        </Space>
      </DemoBlock>
    </>
  )
}
