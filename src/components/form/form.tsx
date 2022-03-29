import React, { ReactNode, forwardRef, ForwardedRef, useMemo } from 'react'
import classNames from 'classnames'
import { NativeProps } from '../../utils/native-props'
import List, { ListProps } from '../list'
import RcForm from 'rc-field-form'
import type {
  FormProps as RcFormProps,
  FormInstance as RCFormInstance,
} from 'rc-field-form'
import { defaultFormContext, FormContext, FormContextType } from './context'
import { mergeProps } from '../../utils/with-default-props'
import type { FormLayout } from '.'
import { Header } from './header'
import { useConfig } from '../config-provider'
import merge from 'lodash/merge'
import { FormArray } from './form-array'

const classPrefix = 'adm-form'

export type FormInstance = Pick<
  RCFormInstance,
  | 'getFieldValue'
  | 'getFieldsValue'
  | 'getFieldError'
  | 'getFieldsError'
  | 'isFieldTouched'
  | 'isFieldsTouched'
  | 'resetFields'
  | 'setFields'
  | 'setFieldsValue'
  | 'submit'
  | 'validateFields'
>

export type FormProps = Pick<
  RcFormProps,
  | 'form'
  | 'initialValues'
  | 'name'
  | 'preserve'
  | 'validateMessages'
  | 'validateTrigger'
  | 'onFieldsChange'
  | 'onFinish'
  | 'onFinishFailed'
  | 'onValuesChange'
  | 'children'
> &
  NativeProps<'--border-inner' | '--border-top' | '--border-bottom'> &
  Partial<FormContextType> & {
    footer?: ReactNode
    layout?: FormLayout
    mode?: ListProps['mode']
  }

const defaultProps = defaultFormContext

export const Form = forwardRef<FormInstance, FormProps>((p, ref) => {
  const props = mergeProps(defaultProps, p)
  const {
    className,
    style,
    hasFeedback,
    children,
    layout,
    footer,
    mode,
    requiredMarkStyle,
    ...formProps
  } = props

  const { locale } = useConfig()

  const validateMessages = useMemo(
    () =>
      merge(
        {},
        locale.Form.defaultValidateMessages,
        formProps.validateMessages
      ),
    [locale.Form.defaultValidateMessages, formProps.validateMessages]
  )

  const lists: ReactNode[] = []

  let currentHeader: ReactNode = null
  let items: ReactNode[] = []
  let count = 0
  function collect() {
    if (items.length === 0) return
    count += 1
    lists.push(
      <List header={currentHeader} key={count} mode={mode}>
        {items}
      </List>
    )
    items = []
  }
  React.Children.forEach(props.children, child => {
    if (React.isValidElement(child)) {
      if (child.type === Header) {
        collect()
        currentHeader = child.props.children
        return
      }
      if (child.type === FormArray) {
        collect()
        lists.push(child)
        return
      }
    }
    items.push(child)
  })
  collect()

  return (
    <RcForm
      className={classNames(classPrefix, className)}
      style={style}
      ref={ref as ForwardedRef<RCFormInstance>}
      {...formProps}
      validateMessages={validateMessages}
    >
      <FormContext.Provider
        value={{
          hasFeedback,
          layout,
          requiredMarkStyle,
        }}
      >
        {lists}
      </FormContext.Provider>
      {footer && <div className={`${classPrefix}-footer`}>{footer}</div>}
    </RcForm>
  )
})
