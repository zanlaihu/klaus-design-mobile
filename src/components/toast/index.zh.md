# Toast 轻提示

<code src="./demos/index.tsx"></code>

### props 属性

| Name          | Description           | Type                                                | Default                                |
| ------------- | --------------------- | --------------------------------------------------- | -------------------------------------- |
| visible       | 控制 Toast 的显示     | `boolean`                                           | `false`                                |
| label         | Toast 内的文本        | `string`                                            | -                                      |
| img           | Toast 内的图片        | `ReactNode`                                         | -                                      |
| radius        | Toast 的圆角系数      | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'large'`                              |
| duration      | Toast 持续显示的时间  | `number`                                            | `2000`                                 |
| infinity      | 控制 Toast 永久显示   | `boolean`                                           | `false`                                |
| hideMask      | 控制 Mask 隐藏        | `boolean`                                           | `false`                                |
| state         | 默认的三种 img 样式   | `'fail' \| 'success' \| 'color-success'`            | -                                      |
| maskClass     | Mask 可选 class       | `string`                                            | -                                      |
| maskStyle     | Mask 可选 style       | `CSSProperties`                                     | `{ backgroundColor: 'rgba(0,0,0,0)' }` |
| renderContent | 用于渲染 Toast 的容器 | `HTMLElement`                                       | `document.body`                        |

## CSS Variables 样式

| Name               | Description         | Default                                | Component                      | Global                            |
| ------------------ | ------------------- | -------------------------------------- | ------------------------------ | --------------------------------- |
| --top              | Toast 的 top 值     | `50%`                                  | `--adw-toast-top`              | -                                 |
| --width            | Toast 的 width      | `auto`                                 | `--adw-toast-width`            | -                                 |
| --background-color | Toast 的背景色      | `rgba(21, 21, 21, 0.8)`                | `--adw-toast-background-color` | no foundation dark                |
| --label-color      | Toast 的文本颜色    | `#fff`                                 | `--adw-toast-label-color`      | `--adw-color-content-ondarkcolor` |
| --z-index          | Toast 的 z-index    | `2000`                                 | `--adw-toast-z-index`          | -                                 |
| --box-shadow       | Toast 的 box shadow | `0px 4px 16px 0px rgba(0, 0, 0, 0.12)` | `--adw-toast-box-shadow`       | `--adw-shadow-1`                  |
