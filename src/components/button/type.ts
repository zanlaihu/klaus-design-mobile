import { ColorToken, FillToken, NativeProps, RadiusToken } from '../_types';

export type ButtonProps = {
  // The color of the button.
  color?: ColorToken;
  // The fill mode.
  fill?: FillToken;
  // The radius prop of native button element.
  radius?: RadiusToken;
  // The size of the button.
  size?: 'small' | 'middle' | 'large';
  // Should the button displays as block element.
  block?: boolean;
  // Should the button be disabled.
  disabled?: boolean;
  // loading state.
  loading?: boolean;
  // loading state text
  loadingText?: string;
  // the icon to the left of the button
  leftIcon?: string;
  // the icon to the right of the button
  rightIcon?: string;
  // The type prop of native button element.
  type?: 'submit' | 'reset' | 'button';
  // click event
  onClick?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
} & NativeProps<
  | '--text-color'
  | '--background-color'
  | '--border-radius'
  | '--border-width'
  | '--border-style'
  | '--border-color'
>;

export interface ButtonInstance {
  setDefaultOption?: (p: ButtonProps) => void;
}
