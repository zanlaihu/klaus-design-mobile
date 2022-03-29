# Snackbar 轻弹窗

<code src="./demos/index.tsx"></code>

### props 属性

| Name          | Description                    | Type                                                | Default                                                                                                     |
| ------------- | ------------------------------ | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| visible       | 控制 Snackbar 的显示           | `boolean`                                           | `false`                                                                                                     |
| label         | Snackbar 的文本                | `string`                                            | -                                                                                                           |
| img           | Snackbar 的图片                | `ReactNode`                                         | -                                                                                                           |
| actionText    | Snackbar 的按钮的文本          | `string`                                            | -                                                                                                           |
| onAction      | 按下按钮后触发的方法           | `() => void \| Promise<void>`                       | -                                                                                                           |
| closeOnAction | 按下按钮后关闭 Snackbar        | `boolean`                                           | `false`                                                                                                     |
| buttonProps   | 按钮的属性（参考 Button 组件） | `ButtonProps`                                       | `{size: 'small',radius: 'small', style:{'--text-color': 'var(--adw-color-content-onlightcolor, #151515)'}}` |
| radius        | Snackbar 的圆角系数            | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'medium'`                                                                                                  |
| duration      | Snackbar 的存续期间            | `number`                                            | `2000`                                                                                                      |
| infinity      | 控制 Snackbar 永久显示         | `boolean`                                           | `false`                                                                                                     |
| hideMask      | 隐藏 Mask                      | `boolean`                                           | `false`                                                                                                     |
| state         | 默认的四种状态图片             | `'accent' \| 'success' \| 'error' \| 'warning'`     | -                                                                                                           |
| maskClass     | 额外的 Mask class              | `string`                                            | -                                                                                                           |
| maskStyle     | 额外的 Mask style              | `string`                                            | `{ backgroundColor: 'rgba(0,0,0,0)' }`                                                                      |
| renderContent | 用于渲染 Snackbar 的容器       | `HTMLElement`                                       | `document.body`                                                                                             |

## CSS Variables 样式

| Name               | Description              | Default                                | Component                         | Global                            |
| ------------------ | ------------------------ | -------------------------------------- | --------------------------------- | --------------------------------- |
| --top              | Snackbar 在纵轴上的位置  | `50%`                                  | `--adw-snackbar-top`              | -                                 |
| --width            | 控制 Snackbar 为固定宽度 | `auto`                                 | `--adw-snackbar-width`            | -                                 |
| --padding          | Snackbar 的 padding      | `16px`                                 | `--adw-snackbar-padding`          | -                                 |
| --background-color | Snackbar 的背景色        | `rgba(21, 21, 21, 0.8)`                | `--adw-snackbar-background-color` | no foundation-dark                |
| --label-color      | Snackbar 的文本颜色      | `#fff`                                 | `--adw-snackbar-label-color`      | `--adw-color-content-ondarkcolor` |
| --box-shadow       | Snackbar 的阴影          | `0px 4px 16px 0px rgba(0, 0, 0, 0.12)` | `--adw-snackbar-box-shadow`       | `--adw-shadow-1`                  |
| --z-index          | Snakcbar 的 z-index      | `2000`                                 | `--adw-snackbar-z-index`          | -                                 |
