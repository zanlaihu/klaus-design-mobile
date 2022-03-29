import React, { FC, ReactNode } from 'react'
import { NativeProps } from '../../utils/native-props'

export type IndexBarPanelProps = {
  index: string
  title?: ReactNode
  brief?: ReactNode
} & NativeProps

export const Panel: FC<IndexBarPanelProps> = () => null
