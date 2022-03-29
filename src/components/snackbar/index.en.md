# Snackbar

<code src="./demos/index.tsx"></code>

### props

| Name          | Description                                          | Type                                                | Default                                                                                                     |
| ------------- | ---------------------------------------------------- | --------------------------------------------------- | ----------------------------------------------------------------------------------------------------------- |
| visible       | Whether the dialog is displayed                      | `boolean`                                           | `false`                                                                                                     |
| label         | The label of toast                                   | `string`                                            | -                                                                                                           |
| img           | The enhancer of dialog                               | `ReactNode`                                         | -                                                                                                           |
| actionText    | The text that on the action button                   | `string`                                            | -                                                                                                           |
| onAction      | Trigger functions when the action button is clicked  | `() => void \| Promise<void>`                       | -                                                                                                           |
| closeOnAction | Close the snackbar when the action button is clicked | `boolean`                                           | `false`                                                                                                     |
| buttonProps   | button props                                         | `ButtonProps`                                       | `{size: 'small',radius: 'small', style:{'--text-color': 'var(--adw-color-content-onlightcolor, #151515)'}}` |
| radius        | Radius                                               | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'medium'`                                                                                                  |
| duration      | The time that toast lasts                            | `number`                                            | `2000`                                                                                                      |
| infinity      | Whether the toast display forever                    | `boolean`                                           | `false`                                                                                                     |
| hideMask      | Whether the under content can be clickable           | `boolean`                                           | `false`                                                                                                     |
| state         | The default img for different state                  | `'accent' \| 'success' \| 'error' \| 'warning'`     | -                                                                                                           |
| maskClass     | Extra class for mask                                 | `string`                                            | -                                                                                                           |
| maskStyle     | Extra style for mask                                 | `string`                                            | `{ backgroundColor: 'rgba(0,0,0,0)' }`                                                                      |
| renderContent | The content that render the dialog                   | `HTMLElement`                                       | `document.body`                                                                                             |

## CSS Variables

| Name               | Description                      | Default                                | Component                         | Global                            |
| ------------------ | -------------------------------- | -------------------------------------- | --------------------------------- | --------------------------------- |
| --top              | The top distance                 | `50%`                                  | `--adw-snackbar-top`              | -                                 |
| --width            | The width of Snackbar            | `auto`                                 | `--adw-snackbar-width`            | -                                 |
| --padding          | The padding of Snackbar          | `16px`                                 | `--adw-snackbar-padding`          | -                                 |
| --background-color | The background color of Snackbar | `rgba(21, 21, 21, 0.8)`                | `--adw-snackbar-background-color` | no foundation-dark                |
| --label-color      | The color of label               | `#fff`                                 | `--adw-snackbar-label-color`      | `--adw-color-content-ondarkcolor` |
| --box-shadow       | The shadow of Snackbar           | `0px 4px 16px 0px rgba(0, 0, 0, 0.12)` | `--adw-snackbar-box-shadow`       | `--adw-shadow-1`                  |
| --z-index          | The z-index of Snackbar          | `2000`                                 | `--adw-snackbar-z-index`          | -                                 |
