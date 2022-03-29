# Toast

<code src="./demos/index.tsx"></code>

### props

| Name          | Description                                | Type                                                | Default                                |
| ------------- | ------------------------------------------ | --------------------------------------------------- | -------------------------------------- |
| visible       | Whether the dialog is displayed            | `boolean`                                           | `false`                                |
| label         | The label of toast                         | `string`                                            | -                                      |
| img           | The enhancer of dialog                     | `ReactNode`                                         | -                                      |
| radius        | Radius                                     | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'large'`                              |
| duration      | The time that toast lasts                  | `number`                                            | `2000`                                 |
| infinity      | Whether the toast display forever          | `boolean`                                           | `false`                                |
| hideMask      | Whether the under content can be clickable | `boolean`                                           | `false`                                |
| state         | The default img for different state        | `'fail' \| 'success' \| 'color-success'`            | -                                      |
| maskClass     | Extra class for mask                       | `string`                                            | -                                      |
| maskStyle     | Extra style for mask                       | `CSSProperties`                                     | `{ backgroundColor: 'rgba(0,0,0,0)' }` |
| renderContent | The content that render the dialog         | `HTMLElement`                                       | `document.body`                        |

## CSS Variables

| Name               | Description                   | Default                                | Component                      | Global                            |
| ------------------ | ----------------------------- | -------------------------------------- | ------------------------------ | --------------------------------- |
| --top              | The top position of Toast     | `50%`                                  | `--adw-toast-top`              | -                                 |
| --width            | The width of Toast            | `auto`                                 | `--adw-toast-width`            | -                                 |
| --background-color | The background color of Toast | `rgba(21, 21, 21, 0.8)`                | `--adw-toast-background-color` | no foundation dark                |
| --label-color      | The color of label            | `#fff`                                 | `--adw-toast-label-color`      | `--adw-color-content-ondarkcolor` |
| --z-index          | The z-index                   | `2000`                                 | `--adw-toast-z-index`          | -                                 |
| --box-shadow       | The box shadow of Toast       | `0px 4px 16px 0px rgba(0, 0, 0, 0.12)` | `--adw-toast-box-shadow`       | `--adw-shadow-1`                  |
