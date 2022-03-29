import { ButtonProps } from '../Button/type';
import { NativeProps, RadiusToken } from '../_types';
import { show, clear, action } from './methods';

export type SnackbarProps = {
  // Whether the dialog is displayed
  visible?: boolean;
  // The label of toast
  label?: string;
  // The enhancer of dialog
  img?: React.ReactNode;
  // The text that on the action button
  actionText?: string;
  // Trigger functions when the action button is clicked
  onAction?: () => void | Promise<void>;
  // Close the snackbar when the action button is clicked
  closeOnAction?: boolean;
  // button props
  buttonProps?: ButtonProps;
  // Radius
  radius?: RadiusToken;
  // The time that toast lasts
  duration?: number;
  // Whether the toast display forever
  infinity?: boolean;
  // Whether the under content can be clickable
  hideMask?: boolean;
  // The default img for different state
  state?: 'accent' | 'success' | 'error' | 'warning';
  // Extra class for mask
  maskClass?: string;
  // Extra style for mask
  maskStyle?: React.CSSProperties;
  // The content that render the dialog
  renderContent?: HTMLElement;
} & NativeProps<
  | '--top'
  | '--width'
  | '--padding'
  | '--background-color'
  | '--label-color'
  | '--box-shadow'
  | '--z-index'
>;

export interface SnackbarInstance {
  setDefaultOption?: (p: SnackbarProps) => void;
  show: typeof show;
  action: typeof action;
  clear: typeof clear;
}
