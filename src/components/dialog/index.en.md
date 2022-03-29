# Dialog 弹窗

<code src="./demos/index.tsx"></code>

### props

| Name             | Description                                         | Type                                                | Default         |
| ---------------- | --------------------------------------------------- | --------------------------------------------------- | --------------- |
| visible          | Whether the dialog is displayed                     | `boolean`                                           | `false`         |
| onConfirm        | Triggered when the confirm button is clicked        | `() => void \| Promise<void>`                       | -               |
| closeOnConfirm   | Close the dialog when the confirm button is clicked | `boolean`                                           | `false`         |
| onClose          | Triggered when the dialog is closed                 | `() => void \| Promise<void>`                       | -               |
| closeOnMaskClick | Close the dialog when the mask is clicked           | `boolean`                                           | `false`         |
| closeIcon        | Top right close button                              | `boolean`                                           | `false`         |
| maskClass        | Extra class for mask                                | `string`                                            | -               |
| maskStyle        | Extra style for mask                                | `React.CSSProperties`                               | -               |
| radius           | Radius                                              | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'large'`       |
| buttonRadius     | Button radius                                       | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'small'`       |
| footer           | Confirm Footer                                      | `ReactNode`                                         | -               |
| confirmText      | The label on confirm button                         | `string`                                            | -               |
| closeText        | The label on close button                           | `string`                                            | -               |
| direction        | The direction of buttons                            | `'column' \| 'row'`                                 | `'column'`      |
| title            | The title of dialog                                 | `ReactNode`                                         | -               |
| content          | The content of dialog                               | `ReactNode`                                         | -               |
| topImg           | The topImg of dialog                                | `ReactNode`                                         | -               |
| renderContent    | The content that render the dialog                  | `HTMLElement`                                       | `document.body` |

## CSS Variables

| Name      | Description                     | Default                        | Global                    |
| --------- | ------------------------------- | ------------------------------ | ------------------------- |
| --z-index | The z-index of dialog component | `var(--adw-mask-zIndex, 1000)` | `--adw-button-text-color` |
