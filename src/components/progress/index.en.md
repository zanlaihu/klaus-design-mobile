# Progress

<code src="./demos/index.tsx"></code>

### props

| Name        | Description                        | Type                                                | Default   |
| ----------- | ---------------------------------- | --------------------------------------------------- | --------- |
| radius      | The radius of progress             | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'zero'`  |
| steps       | The total steps for steps progress | `number`                                            | -         |
| currentStep | The current step of steps progress | `number`                                            | -         |
| percent     | The percent of linear progress     | `number`                                            | -         |
| label       | The label of progress              | `string`                                            | -         |
| size        | The size of progress               | `'small' \| 'medium' \| 'large'`                    | `'small'` |

## CSS Variables

| Name               | Description                      | default                    | Component                              | Global                                 |
| ------------------ | -------------------------------- | -------------------------- | -------------------------------------- | -------------------------------------- |
| --height           | The height of progress           | `2px`                      | `--adw-progress-height`                | -                                      |
| --finished-color   | The color of the finished part   | `#1d73d6`                  | `--adw-color-brand-primary`            | `--adw-color-brand-primary`            |
| --unfinished-color | The color of the unfinished part | `rgba(221, 221, 221, 0.5)` | `--adw-color-background-statedisabled` | `--adw-color-background-statedisabled` |
| --current-color    | The color of the current step    | `#dae9ff`                  | `--adw-color-brand-secondary`          | `--adw-color-brand-secondary`          |
| --label-color      | The color of the label           | `#066dff`                  | `--adw-color-brand-primary`            | `--adw-color-brand-primary`            |
