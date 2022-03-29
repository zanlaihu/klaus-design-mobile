import { NativeProps, RadiusToken } from '../_types';
import { show, clear, loading } from './methods';

export type ToastProps = {
  // Whether the dialog is displayed
  visible?: boolean;
  // The label of toast
  label?: string;
  // The enhancer of dialog
  img?: React.ReactNode;
  // Radius
  radius?: RadiusToken;
  // The time that toast lasts
  duration?: number;
  // Whether the toast display forever
  infinity?: boolean;
  // Whether the under content can be clickable
  hideMask?: boolean;
  // The default img for different state
  state?: 'fail' | 'success' | 'color-success';
  // Extra class for mask
  maskClass?: string;
  // Extra style for mask
  maskStyle?: React.CSSProperties;
  // The content that render the dialog
  renderContent?: HTMLElement;
  //
  getContent?: HTMLElement | (() => HTMLElement) | null;
} & NativeProps<
  '--top' | '--background-color' | '--label-color' | '--z-index' | '--width' | '--box-shadow'
>;

export interface ToastInstance {
  setDefaultOption?: (p: ToastProps) => void;
  show: typeof show;
  loading: typeof loading;
  clear: typeof clear;
}
