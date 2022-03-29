# List 列表

<code src="./demos/index.tsx"></code>

## 属性

### List.Item

| Name     | Description                               | Type                            | Default |
| -------- | ----------------------------------------- | ------------------------------- | ------- |
| prefix   | 位于左侧用于放置图片的区域                | `ReactNode`                     | -       |
| label    | 标题                                      | `ReactNode`                     | -       |
| title    | 标题下方的第一行文字                      | `ReactNode`                     | -       |
| subTitle | 标题下方的第二行文字                      | `ReactNode`                     | -       |
| divider  | 下划线                                    | `boolean \|ReactNode`           | -       |
| arrow    | 位于右侧的用于提示 List Item 可点击的箭头 | `boolean \| ReactNode`          | -       |
| extra    | 位于右侧用于放置内容的区域                | `ReactNode`                     | -       |
| onClick  | 点击 List Item 时触发的方法               | `(e: React.MouseEvent) => void` | -       |

## CSS 变量

### List

| Name                      | Description                       | Default                         | Component                            | Global                             |
| ------------------------- | --------------------------------- | ------------------------------- | ------------------------------------ | ---------------------------------- |
| --background-color        | List Item 的背景色                | `#fff`                          | `--adw-list-background-color`        | `--adw-color-background-primary`   |
| --active-background-color | List Item 被点击时的背景色        | `#fff`                          | `--adw-list-active-background-color` | -                                  |
| --radius                  | List Item 的圆角系数              | -                               | `--adw-list-radius`                  | -                                  |
| --font-size               | title、subTitle、extra 的字体大小 | `14px`                          | `--adw-list-font-size`               | `--adw-font-size-2`                |
| --font-color              | title、subTitle、extra 的字体颜色 | `#6f6f6f`                       | `--adw-list-font-color`              | `--adw-color-content-secondary`    |
| --font-position           | title、subTitle、extra 的位置     | `left (default) \|center\|left` | `--adw-font-position`                | -                                  |
| --label-color             | label 的字体颜色                  | `#151515`                       | `--adw-list-label-color`             | `--adw-color-content-primary`      |
| --label-position          | label 的字体颜色的位置            | `left (default) \|center\|left` | `--adw-list-label-position`          | -                                  |
| --content-color           | List Item content 的背景色        | `rgba(0, 0, 0, 0)`              | `--adw-list-content-color`           | -                                  |
| --content-radius          | List Item content 的圆角系数      | `0`                             | `--adw-list-content-radius`          | -                                  |
| --divider-color           | 下划线的颜色                      | `#f2f2f2`                       | `--adw-list-divider-color`           | `--adw-color-background-secondary` |
| --divider-height          | 下划线的高度                      | `1px`                           | `--adw-list-divider-height`          | `--adw-borderwidth-small`          |
| --padding                 | List Item 的 padding              | `10px 0px`                      | `--adw-list-padding`                 | -                                  |
| --content-padding         | List Item content 的 padding      | `0px 8px`                       | `--adw-list-content-padding`         | -                                  |
| --wrap-padding            | List Item wrap 的 padding         | `2px 8px`                       | `--adw-list-wrap-padding`            | -                                  |

### List.Item

| Name                      | Description                       | Default                         | Component                            | Global                             |
| ------------------------- | --------------------------------- | ------------------------------- | ------------------------------------ | ---------------------------------- |
| --background-color        | List Item 的背景色                | `#fff`                          | `--adw-list-background-color`        | `--adw-color-background-primary`   |
| --active-background-color | List Item 被点击时的背景色        | `#fff`                          | `--adw-list-active-background-color` | -                                  |
| --radius                  | List Item 的圆角系数              | -                               | `--adw-list-radius`                  | -                                  |
| --font-size               | title、subTitle、extra 的字体大小 | `14px`                          | `--adw-list-font-size`               | `--adw-font-size-2`                |
| --font-color              | title、subTitle、extra 的字体颜色 | `#6f6f6f`                       | `--adw-list-font-color`              | `--adw-color-content-secondary`    |
| --font-position           | title、subTitle、extra 的位置     | `left (default) \|center\|left` | `--adw-font-position`                | -                                  |
| --label-color             | label 的字体颜色                  | `#151515`                       | `--adw-list-label-color`             | `--adw-color-content-primary`      |
| --label-position          | label 的字体颜色的位置            | `left (default) \|center\|left` | `--adw-list-label-position`          | -                                  |
| --content-color           | List Item content 的背景色        | `rgba(0, 0, 0, 0)`              | `--adw-list-content-color`           | -                                  |
| --content-radius          | List Item content 的圆角系数      | `0`                             | `--adw-list-content-radius`          | -                                  |
| --divider-color           | 下划线的颜色                      | `#f2f2f2`                       | `--adw-list-divider-color`           | `--adw-color-background-secondary` |
| --divider-height          | 下划线的高度                      | `1px`                           | `--adw-list-divider-height`          | `--adw-borderwidth-small`          |
| --padding                 | List Item 的 padding              | `10px 0px`                      | `--adw-list-padding`                 | -                                  |
| --content-padding         | List Item content 的 padding      | `0px 8px`                       | `--adw-list-content-padding`         | -                                  |
| --wrap-padding            | List Item wrap 的 padding         | `2px 8px`                       | `--adw-list-wrap-padding`            | -                                  |

## Description

1. "--active-background-color" 的默认颜色 和 "--background-color" 使用的是一样的颜色，因为在钱包场景中很少出现 List 点击后变色的场景。
2. List 组件具有三个 padding 属性，从外到内分别是："--wrap-padding"、"--content-padding"、"--padding"。之所以要设置三个复杂的 padding，是为了满足业务场景中所出现的 content，具体参考演示例子给出的“custom list”。

