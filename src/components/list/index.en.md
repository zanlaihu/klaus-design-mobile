# List

<code src="./demos/index.tsx"></code>

## Props

### List.Item

| Name     | Description                                      | Type                            | Default |
| -------- | ------------------------------------------------ | ------------------------------- | ------- |
| prefix   | The avatar area of the list item.                | `ReactNode`                     | -       |
| label    | The label.                                       | `ReactNode`                     | -       |
| title    | The title.                                       | `ReactNode`                     | -       |
| subTitle | The sub-title.                                   | `ReactNode`                     | -       |
| divider  | The divider that on the bottom of the list item. | `boolean \|ReactNode`           | -       |
| arrow    | The arrow that displayed on the right side.      | `boolean \| ReactNode`          | -       |
| extra    | The extra area on the right side.                | `ReactNode`                     | -       |
| onClick  | The function triggered when the list is clicked. | `(e: React.MouseEvent) => void` | -       |

## CSS Variables

### List

| Name                      | Description                                 | Default                         | Component                            | Global                             |
| ------------------------- | ------------------------------------------- | ------------------------------- | ------------------------------------ | ---------------------------------- |
| --background-color        | The background color of List Item           | `#fff`                          | `--adw-list-background-color`        | `--adw-color-background-primary`   |
| --active-background-color | The clicked background color of List Item   | `#fff`                          | `--adw-list-active-background-color` | -                                  |
| --radius                  | The radius of List Item                     | -                               | `--adw-list-radius`                  | -                                  |
| --font-size               | The font size of title, subTitle and extra  | `14px`                          | `--adw-list-font-size`               | `--adw-font-size-2`                |
| --font-color              | The font color of title, subTitle and extra | `#6f6f6f`                       | `--adw-list-font-color`              | `--adw-color-content-secondary`    |
| --font-position           | The position of title, subTitle             | `left (default) \|center\|left` | `--adw-font-position`                | -                                  |
| --label-color             | The color of label                          | `#151515`                       | `--adw-list-label-color`             | `--adw-color-content-primary`      |
| --label-position          | The position of label                       | `left (default) \|center\|left` | `--adw-list-label-position`          | -                                  |
| --content-color           | The color of List Item content              | `rgba(0, 0, 0, 0)`              | `--adw-list-content-color`           | -                                  |
| --content-radius          | The radius of List Item content             | `0`                             | `--adw-list-content-radius`          | -                                  |
| --divider-color           | The color of the divider                    | `#f2f2f2`                       | `--adw-list-divider-color`           | `--adw-color-background-secondary` |
| --divider-height          | The height of the divider                   | `1px`                           | `--adw-list-divider-height`          | `--adw-borderwidth-small`          |
| --padding                 | The padding of List Item                    | `10px 0px`                      | `--adw-list-padding`                 | -                                  |
| --content-padding         | The padding of List Item content            | `0px 8px`                       | `--adw-list-content-padding`         | -                                  |
| --wrap-padding            | The padding of List Item wrap               | `2px 8px`                       | `--adw-list-wrap-padding`            | -                                  |

### List.Item

| Name                      | Description                                 | Default                         | Component                            | Global                             |
| ------------------------- | ------------------------------------------- | ------------------------------- | ------------------------------------ | ---------------------------------- |
| --background-color        | The background color of List Item           | `#fff`                          | `--adw-list-background-color`        | `--adw-color-background-primary`   |
| --active-background-color | The clicked background color of List Item   | `#fff`                          | `--adw-list-active-background-color` | -                                  |
| --radius                  | The radius of List Item                     | -                               | `--adw-list-radius`                  | -                                  |
| --font-size               | The font size of title, subTitle and extra  | `14px`                          | `--adw-list-font-size`               | `--adw-font-size-2`                |
| --font-color              | The font color of title, subTitle and extra | `#6f6f6f`                       | `--adw-list-font-color`              | `--adw-color-content-secondary`    |
| --font-position           | The position of title, subTitle             | `left (default) \|center\|left` | `--adw-font-position`                | -                                  |
| --label-color             | The color of label                          | `#151515`                       | `--adw-list-label-color`             | `--adw-color-content-primary`      |
| --label-position          | The position of label                       | `left (default) \|center\|left` | `--adw-list-label-position`          | -                                  |
| --content-color           | The color of List Item content              | `rgba(0, 0, 0, 0)`              | `--adw-list-content-color`           | -                                  |
| --content-radius          | The radius of List Item content             | `0`                             | `--adw-list-content-radius`          | -                                  |
| --divider-color           | The color of the divider                    | `#f2f2f2`                       | `--adw-list-divider-color`           | `--adw-color-background-secondary` |
| --divider-height          | The height of the divider                   | `1px`                           | `--adw-list-divider-height`          | `--adw-borderwidth-small`          |
| --padding                 | The padding of List Item                    | `10px 0px`                      | `--adw-list-padding`                 | -                                  |
| --content-padding         | The padding of List Item content            | `0px 8px`                       | `--adw-list-content-padding`         | -                                  |
| --wrap-padding            | The padding of List Item wrap               | `2px 8px`                       | `--adw-list-wrap-padding`            | -                                  |

## Description

1. The default "--active-background-color" has the same color of "--background-color", which means you need to manually set a different color so that the color will be different when clicked.
2. There are 3 padding settings in the List component. They are "--wrap-padding", "--content-padding" and "--padding" from From outside to inside. Please see the custom examples.

