# Dialog 弹窗

<code src="./demos/index.tsx"></code>

### props 属性

| Name             | Description                                     | Type                                                | Default         |
| ---------------- | ----------------------------------------------- | --------------------------------------------------- | --------------- |
| visible          | 控制 Dialog 组件是否显示                        | `boolean`                                           | `false`         |
| onConfirm        | 确认按钮按下时触发事件                          | `() => void \| Promise<void>`                       | -               |
| closeOnConfirm   | 按下确认按钮后关闭 Dialog                       | `boolean`                                           | `false`         |
| onClose          | Dialog 组件被关闭时触发事件                     | `() => void \| Promise<void>`                       | -               |
| closeOnMaskClick | 按下 Mask 后关闭 Dialog                         | `boolean`                                           | `false`         |
| closeIcon        | 置于右上角的关闭按钮                            | `boolean`                                           | `false`         |
| maskClass        | 提供给 Mask 的额外 class                        | `string`                                            | -               |
| maskStyle        | 提供给 Mask 的额外 Style                        | `React.CSSProperties`                               | -               |
| radius           | Dialog 组件的 radius                            | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'large'`       |
| buttonRadius     | Dialog 组件内按钮的 radius                      | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'small'`       |
| footer           | 用于在二级组件 confirm 内放置确认按钮和关闭按钮 | `ReactNode`                                         | -               |
| confirmText      | 确认按钮的文本                                  | `string`                                            | -               |
| closeText        | 关闭按钮的文本                                  | `string`                                            | -               |
| direction        | Dialog 组件内两个按钮的排列方式                 | `'column' \| 'row'`                                 | `'column'`      |
| title            | Dialog 组件的 title                             | `ReactNode`                                         | -               |
| content          | Dialog 组件的 content                           | `ReactNode`                                         | -               |
| topImg           | Dialog 组件顶部用于放置图片的区域               | `ReactNode`                                         | -               |
| renderContent    | 用于渲染 Dialog 组件的容器                      | `HTMLElement`                                       | `document.body` |

## CSS Variables 样式

| Name      | Description                     | Default                        | Global                    |
| --------- | ------------------------------- | ------------------------------ | ------------------------- |
| --z-index | The z-index of dialog component | `var(--adw-mask-zIndex, 1000)` | `--adw-button-text-color` |
