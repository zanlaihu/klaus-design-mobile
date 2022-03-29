# Drawer

<code src="./demos/index.tsx"></code>

### props

| Name             | Description                                | Type                                                            | Default                                |
| ---------------- | ------------------------------------------ | --------------------------------------------------------------- | -------------------------------------- |
| visible          | Whether the dialog is displayed            | `boolean`                                                       | `false`                                |
| direction        | The direction where the Drawer come out    | `'bottom' \| 'top' \| 'left' \| 'right'`                        | `'bottom'`                             |
| onMaskClick      | Triggered when the mask is clicked         | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -                                      |
| length           | The length of Drawer                       | `string`                                                        | `75%`                                  |
| radius           | The radius of Drawer                       | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'`             | `'small'`                              |
| hideMask         | Hide the mask                              | `boolean`                                                       | `false`                                |
| closeBtn         | The close button                           | `React.ReactNode \| boolean`                                    | `false`                                |
| closeBtnPosition | The position of close button               | `'left' \| 'right'`                                             | `'right'`                              |
| onClose          | Triggered when the close button is clicked | `(event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void` | -                                      |
| maskClass        | Extra class for mask                       | `string`                                                        | -                                      |
| maskStyle        | Extra style for mask                       | `CSSProperties`                                                 | `{ backgroundColor: 'rgba(0,0,0,0)' }` |
| renderContent    | The content that render the dialog         | `HTMLElement`                                                   | `document.body`                        |

## CSS Variables

| Name               | Description                    | Default                                | Component                       | Global                           |
| ------------------ | ------------------------------ | -------------------------------------- | ------------------------------- | -------------------------------- |
| --z-index          | The z-index of Drawer          | `1500`                                 | `--adw-drawer-z-index`          | -                                |
| --background-color | The background color of Drawer | `#fff`                                 | `--adw-drawer-background-color` | `--adw-color-background-primary` |
| --box-shadow       | The box shadow of Drawer       | `0px 8px 32px 0px rgba(0, 0, 0, 0.17)` | `--adw-drawer-shadow`           | `--adw-shadow-2`                 |
| --transition       | The transition of Drawer       | `transform 0.3s ease`                  | `--adw-drawer-transition`       | -                                |
