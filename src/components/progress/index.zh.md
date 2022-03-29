# Progress 进度条

<code src="./demos/index.tsx"></code>

### props 属性

| Name        | Description                      | Type                                                | Default   |
| ----------- | -------------------------------- | --------------------------------------------------- | --------- |
| radius      | 进度条的圆角系数                 | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'` | `'zero'`  |
| steps       | 总步骤（仅适用步骤型进度条）     | `number`                                            | -         |
| currentStep | 当前的步骤（仅适用步骤型进度条） | `number`                                            | -         |
| percent     | 百分比（仅适用百分比型进度条）   | `number`                                            | -         |
| label       | 进度条下的文本                   | `string`                                            | -         |
| size        | 进度条的尺寸                     | `'small' \| 'medium' \| 'large'`                    | `'small'` |

## CSS Variables 样式

| Name               | Description                          | default                    | Component                              | Global                                 |
| ------------------ | ------------------------------------ | -------------------------- | -------------------------------------- | -------------------------------------- |
| --height           | 进度条的高度                         | `2px`                      | `--adw-progress-height`                | -                                      |
| --finished-color   | 进度条完成部分的颜色                 | `#1d73d6`                  | `--adw-color-brand-primary`            | `--adw-color-brand-primary`            |
| --unfinished-color | 进度条未完成部分的颜色               | `rgba(221, 221, 221, 0.5)` | `--adw-color-background-statedisabled` | `--adw-color-background-statedisabled` |
| --current-color    | 当前步骤的颜色（仅适用步骤型进度条） | `#dae9ff`                  | `--adw-color-brand-secondary`          | `--adw-color-brand-secondary`          |
| --label-color      | 文本的颜色                           | `#066dff`                  | `--adw-color-brand-primary`            | `--adw-color-brand-primary`            |
