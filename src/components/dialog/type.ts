import React from 'react';
import { NativeProps, RadiusToken } from '../_types';
import show from './show';

export type DialogProps = {
  // Whether the dialog is displayed
  visible?: boolean;
  // Triggered when the confirm button is clicked
  onConfirm?: () => void | Promise<void>;
  // Close the dialog when the confirm button is clicked
  closeOnConfirm?: boolean;
  // Triggered when the dialog is closed
  onClose?: () => void | Promise<void>;
  afterClose?: () => void | Promise<void>;
  afterShow?: () => void | Promise<void>;
  // Close the dialog when the mask is clicked
  closeOnMaskClick?: boolean;
  // Top right close button
  closeIcon?: boolean | React.ReactNode;
  // Extra class for mask
  maskClass?: string;
  // Extra style for mask
  maskStyle?: React.CSSProperties;
  // Radius
  radius?: RadiusToken;
  // Confirm Footer
  footer?: React.ReactNode;
  // Confirm button
  confirmText?: string;
  // Close button
  closeText?: string;
  // The direction of buttons
  direction?: 'column' | 'row' | string;
  // The title of dialog
  title?: React.ReactNode;
  // The content of dialog
  content?: React.ReactNode;
  // The enhancer of dialog
  topImg?: React.ReactNode;
  // The content that render the dialog
  renderContent?: HTMLElement;
} & NativeProps<'--z-index'>;

export interface DialogInstance {
  setDefaultOption?: (p: DialogProps) => void;
  show: typeof show;
}
