import React from 'react';
import { NativeProps, RadiusToken } from '../_types';

export type DrawerProps = {
  // Whether the dialog is displayed
  visible?: boolean;
  // The direction where the drawer come out
  direction?: 'bottom' | 'top' | 'left' | 'right';
  // Triggered when the mask is clicked
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  // The length of Drawer
  length?: string;
  // Radius
  radius?: RadiusToken;
  // Hide the mask
  hideMask?: boolean;
  // The close button
  closeBtn?: React.ReactNode | boolean;
  // The position of close button
  closeBtnPosition?: 'left' | 'right';
  // Triggered when the close button is clicked
  onClose?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void;
  // Extra class for mask
  maskClass?: string;
  // Extra style for mask
  maskStyle?: React.CSSProperties;
  // The content that render the dialog
  renderContent?: HTMLElement;
} & NativeProps<'--z-index' | '--background-color' | '--box-shadow' | '--transition'>;

export interface DrawerInstance {
  setDefaultOption?: (p: DrawerProps) => void;
}
