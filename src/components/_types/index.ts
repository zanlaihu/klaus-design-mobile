import { CSSProperties, ReactNode } from 'react';

export interface NativeProps<S extends string = never> {
  className?: string | string[];
  style?: CSSProperties & Partial<Record<S, string>>;
  children?: ReactNode;
}

export type FillToken = 'solid' | 'outline' | 'text';

export type ColorToken = 'default' | 'primary' | 'success' | 'warning' | 'danger';

export type RadiusToken = 'zero' | 'small' | 'medium' | 'large' | 'max';
