# Cascader

<code src="./demos/demo1.tsx"></code>

<code src="./demos/demo2.tsx"></code>

### Props

```typescript | pure
type CascaderValue = string | null

type CascaderOption = {
  label: string
  value: string
  disabled?: boolean
  children?: CascaderOption[]
}

type CascaderValueExtend = {
  items: (CascaderOption | null)[]
  isLeaf: boolean
}
```

| Name         | Description                                     | Type                                                            | Default    |
| ------------ | ----------------------------------------------- | --------------------------------------------------------------- | ---------- |
| value        | Selected options                                | `CascaderValue[]`                                               | -          |
| defaultValue | Default selected options                        | `CascaderValue[]`                                               | `[]`       |
| options      | Data of the cascade options                     | `CascaderOption[]`                                              | -          |
| onSelect     | Triggered when the selected options are changed | `(value: CascaderValue[], extend: CascaderValueExtend) => void` | -          |
| onConfirm    | Triggered when confirming                       | `(value: CascaderValue[], extend: CascaderValueExtend) => void` | -          |
| onCancel     | Triggered when cancelling                       | `() => void`                                                    | -          |
| onClose      | Triggered when confirming or cancelling         | `() => void`                                                    | -          |
| visible      | Whether to show or hide the Picker              | `boolean`                                                       | `false`    |
| title        | Title                                           | `ReactNode`                                                     | -          |
| confirmText  | Text of the ok button                           | `ReactNode`                                                     | `'确定'`   |
| cancelText   | Text of the cancel button                       | `ReactNode`                                                     | `'取消'`   |
| placeholder  | Hint text                                       | `string`                                                        | `'请选择'` |
| children     | Render function of the selected options         | `(items: CascaderOption[]) => ReactNode`                        | -          |

### Loading <Experimental></Experimental>

You can pass `Cascader.optionSkeleton` as `CascaderOption[]` to the `options` property of Cascader or the `children` of `CascaderOption`. Cascader will recognize it and display the skeleton screen effect.
