# Input

<code src="./demos/index.tsx"></code>

### props

| Name           | Description                                          | Type                                                                      | Default |
| -------------- | ---------------------------------------------------- | ------------------------------------------------------------------------- | ------- |
| value          | The input value                                      | `string`                                                                  | -       |
| defaultValue   | The default value                                    | `string`                                                                  | -       |
| onChange       | Triggered when the input content is changed          | `(value: string) => void`                                                 | -       |
| placeholder    | The prompt text                                      | `string`                                                                  | -       |
| disabled       | Whether it is disabled or not                        | `boolean`                                                                 | `false` |
| readOnly       | Whether it is readonly or not                        | `boolean`                                                                 | `false` |
| clearable      | Whether to enable the clear icon                     | `boolean \| React.ReactNode`                                              | `false` |
| outlined       | Border of the component                              | `boolean`                                                                 | `false` |
| onClear        | Triggered after clicking the clear button            | `() => void`                                                              | -       |
| id             | The id of the input element                          | `string`                                                                  | -       |
| onEnterPress   | The callback when Enter key is pressed               | `(e: React.KeyboardEvent<HTMLInputElement>) => void`                      | -       |
| enterKeyHint   | The enter key hint                                   | `'enter' \| 'done' \| 'go' \| 'next' \| 'previous' \| 'search' \| 'send'` | -       |
| format         | format input text by templates                       | `InputFormat`                                                             | -       |
| label          | The label above the input box                        | `string`                                                                  | -       |
| warning        | The warning below the input box                      | `string \| React.ReactNode`                                               | -       |
| startEnhancer  | The first enhancer that displayed in the left side   | `string \| React.ReactNode`                                               | -       |
| endEnhancerOne | The first enhancer that displayed in the right side  | `string \| React.ReactNode`                                               | -       |
| endEnhancerTwo | The second enhancer that displayed in the right side | `string \| React.ReactNode`                                               | -       |
| radius         | The radius of input component                        | `'zero' \| 'small' \| 'medium' \| 'large' \| 'max'`                       | `zero`  |

In addition, the following native attributes are supported: `maxLength` `minLength` `max` `min` `autoComplete` `enterKeyHint` `pattern` `type` `onFocus` `onBlur` `autoCapitalize` `autoCorrect` `onKeyDown` `onKeyUp`

### CSS Variables

| Name                     | Description                                   | Default   | Component                            | Global                             |
| ------------------------ | --------------------------------------------- | --------- | ------------------------------------ | ---------------------------------- |
| --input-color            | The color of inputted text                    | `#151515` | `--adw-input-color`                  | `--adw-color-content-primary`      |
| --background-color       | The background color of input component       | `#fff`    | `--adw-input-background-color`       | `--adw-color-background-primary`   |
| --placeholder-color      | The color of placeholder                      | `#ddd`    | `--adw-input-placeholder-color`      | `--adw-color-background-tertiary`  |
| --label-active-color     | The color of label when focused               | `#066dff` | `--adw-input-active-color`           | `--adw-color-brand-primary`        |
| --label-inactive-color   | The color of label                            | `#6f6f6f` | `--adw-input-inactive-color`         | `--adw-color-content-secondary`    |
| --divider-active-color   | The color of divider when focused             | `#066dff` | `--adw-input-divider-active-color`   | `--adw-color-brand-primary`        |
| --divider-inactive-color | The color of divider                          | `#f2f2f2` | `--adw-input-divider-inactive-color` | `--adw-color-background-secondary` |
| --border-active-color    | The color of border when focused              | `#066dff` | `--adw-input-border-active-color`    | `--adw-color-brand-primary`        |
| --border-inactive-color  | The color of border                           | `#999`    | `--adw-input-border-inactive-color`  | `--adw-color-border-inactive`      |
| --left-right-spacing     | The left and right padding of Input component | `16px`    | `--adw-input-left-right-spacing`     | `--adw-spacing-base`               |

### Ref

| Name  | Description                  | Type         |
| ----- | ---------------------------- | ------------ |
| clear | Clear the input content      | `() => void` |
| focus | Let the input box get focus  | `() => void` |
| blur  | Let the input box lose focus | `() => void` |
| value | input value                  | `string`     |

### InputFormat

| Name           | Description                            | Type                      | Default  |
| -------------- | -------------------------------------- | ------------------------- | -------- |
| templates      | Format templates                       | `string \| Array<string>` | -        |
| pattern        | Regularization of formatted characters | `string`                  | `[0-9]+` |
| formatAdvanced | If caret should jump on next character | `Boolean`                 | `true`   |

### warming

This Input component contains a CSS variable called "caret-color". This CSS variable may not work well in the browsers listed below due to compatibility:

Internet Explorer, Safari on iOS
