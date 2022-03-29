# Input 输入框

<code src="./demos/index.tsx"></code>

### 属性

| Name           | Description                     | Type                                                                      | Default |
| -------------- | ------------------------------- | ------------------------------------------------------------------------- | ------- |
| value          | 输入的值                        | `string`                                                                  | -       |
| defaultValue   | 初始化时的默认值                | `string`                                                                  | -       |
| onChange       | 输入的值改变时触发的方法        | `(value: string) => void`                                                 | -       |
| placeholder    | 没有值存在时的提示文字          | `string`                                                                  | -       |
| disabled       | 控制 Input 组件是否 disable     | `boolean`                                                                 | `false` |
| readOnly       | 控制 Input 组件是否 read only   | `boolean`                                                                 | `false` |
| clearable      | 控制清除按钮的出现              | `boolean \| React.ReactNode`                                              | `false` |
| outlined       | 控制 Input 组件为 outlined 样式 | `boolean`                                                                 | `false` |
| onClear        | 清除按钮被按下时触发            | `() => void`                                                              | -       |
| id             | Input 组件的 ID                 | `string`                                                                  | -       |
| onEnterPress   | 按下键盘时触发的方法            | `(e: React.KeyboardEvent<HTMLInputElement>) => void`                      | -       |
| enterKeyHint   | enter key hint                  | `'enter' \| 'done' \| 'go' \| 'next' \| 'previous' \| 'search' \| 'send'` | -       |
| format         | 用于格式化输入的值              | `InputFormat`                                                             | -       |
| label          | Input 组件的标题                | `string`                                                                  | -       |
| warning        | The warning below the input box | `string \| React.ReactNode`                                               | -       |
| startEnhancer  | 位于左侧放置 icon 的空间        | `string \| React.ReactNode`                                               | -       |
| endEnhancerOne | 位于右侧放置 icon 的第一个空间  | `string \| React.ReactNode`                                               | -       |
| endEnhancerTwo | 位于右侧放置 icon 的第二个空间  | `string \| React.ReactNode`                                               | -       |
| radius         | Input 组件的圆角系数            | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'`                       | `zero`  |

此外还支持以下原生属性：`maxLength` `minLength` `max` `min` `autoComplete` `enterKeyHint` `pattern` `type` `onFocus` `onBlur` `autoCapitalize` `autoCorrect` `onKeyDown` `onKeyUp`

### CSS 变量

| Name                     | Description                | Default   | Component                            | Global                             |
| ------------------------ | -------------------------- | --------- | ------------------------------------ | ---------------------------------- |
| --input-color            | value 的颜色               | `#151515` | `--adw-input-color`                  | `--adw-color-content-primary`      |
| --background-color       | Input 组件的背景色         | `#fff`    | `--adw-input-background-color`       | `--adw-color-background-primary`   |
| --placeholder-color      | placeholder 的颜色         | `#ddd`    | `--adw-input-placeholder-color`      | `--adw-color-background-tertiary`  |
| --label-active-color     | focus 状态的 label 颜色    | `#066dff` | `--adw-input-active-color`           | `--adw-color-brand-primary`        |
| --label-inactive-color   | 非 focus 状态的 label 颜色 | `#6f6f6f` | `--adw-input-inactive-color`         | `--adw-color-content-secondary`    |
| --divider-active-color   | focus 状态的下划线颜色     | `#066dff` | `--adw-input-divider-active-color`   | `--adw-color-brand-primary`        |
| --divider-inactive-color | 非 focus 状态的下划线颜色  | `#f2f2f2` | `--adw-input-divider-inactive-color` | `--adw-color-background-secondary` |
| --border-active-color    | focus 状态的边框颜色       | `#066dff` | `--adw-input-border-active-color`    | `--adw-color-brand-primary`        |
| --border-inactive-color  | 非 focus 状态的边框颜色    | `#999`    | `--adw-input-border-inactive-color`  | `--adw-color-border-inactive`      |
| --left-right-spacing     | 左右边距                   | `16px`    | `--adw-input-left-right-spacing`     | `--adw-spacing-base`               |

### Ref

| 属性  | 说明             | 类型         |
| ----- | ---------------- | ------------ |
| clear | 清空输入内容     | `() => void` |
| focus | 让输入框获得焦点 | `() => void` |
| blur  | 让输入框失去焦点 | `() => void` |
| value | 输入框的值       | `string`     |

### InputFormat

| Name           | Description                | Type                      | Default  |
| -------------- | -------------------------- | ------------------------- | -------- |
| templates      | 格式化模板                 | `string \| Array<string>` | -        |
| pattern        | 字符验证正则               | `string`                  | `[0-9]+` |
| formatAdvanced | 光标是否需要跳到下一个字符 | `Boolean`                 | `true`   |

### 注意事项

这个组件包含的 CSS 变量“caret-color”用于控制 Input 框内的光标颜色，这个属性在下述的浏览器上不兼容：

Internet Explorer, Safari on iOS
