# Drawer 抽屉

<code src="./demos/index.tsx"></code>

### props 属性

| Name             | Description              | Type                                                            | Default                                |
| ---------------- | ------------------------ | --------------------------------------------------------------- | -------------------------------------- |
| visible          | 控制 Drawer 是否可见     | `boolean`                                                       | `false`                                |
| direction        | Drawer 弹出的方向        | `'bottom' \| 'top' \| 'left' \| 'right'`                        | `'bottom'`                             |
| onMaskClick      | 点击 Mask 后触发的方法   | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -                                      |
| length           | Drawer 的长度            | `string`                                                        | `75%`                                  |
| radius           | Drawer 的圆角系数        | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'`             | `'small'`                              |
| hideMask         | 隐藏 Mask                | `boolean`                                                       | `false`                                |
| closeBtn         | 关闭按钮                 | `React.ReactNode \| boolean`                                    | `false`                                |
| closeBtnPosition | 关闭按钮的位置           | `'left' \| 'right'`                                             | `'right'`                              |
| onClose          | 点击关闭按钮时触发的方法 | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -                                      |
| maskClass        | Mask 的额外 class        | `string`                                                        | -                                      |
| maskStyle        | Mask 的额外 style        | `CSSProperties`                                                 | `{ backgroundColor: 'rgba(0,0,0,0)' }` |
| renderContent    | 渲染 Drawer 的容器       | `HTMLElement`                                                   | `document.body`                        |

## CSS Variables 样式

| Name               | Description                  | Default                                | Component                       | Global                           |
| ------------------ | ---------------------------- | -------------------------------------- | ------------------------------- | -------------------------------- |
| --z-index          | Drawer 的 z-index            | `1500`                                 | `--adw-drawer-z-index`          | -                                |
| --background-color | Drawer 的背景色              | `#fff`                                 | `--adw-drawer-background-color` | `--adw-color-background-primary` |
| --box-shadow       | Drawer 的阴影                | `0px 8px 32px 0px rgba(0, 0, 0, 0.17)` | `--adw-drawer-shadow`           | `--adw-shadow-2`                 |
| --transition       | Drawer 弹出动画的 transition | `transform 0.3s ease`                  | `--adw-drawer-transition`       | -                                |
