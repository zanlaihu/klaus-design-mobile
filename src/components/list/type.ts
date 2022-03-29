import { NativeProps } from '../_types';

export type ListProps = NativeProps<
  // The background color
  | '--background-color'
  // The color while the List Item is clicked
  | '--active-background-color'
  // The radius of List Item
  | '--radius'
  // The size of font
  | '--font-size'
  // The font color of title and subTitle
  | '--font-color'
  // The position of title, subTitle
  | '--font-position'
  // The color of label
  | '--label-color'
  // The position of label
  | '--label-position'
  // The color of content
  | '--content-color'
  // The radius of content
  | '--content-radius'
  // The color of divider
  | '--divider-color'
  // The height of divider
  | '--divider-height'
  // The padding of List Item
  | '--padding'
  // The padding of List Item content
  | '--content-padding'
  // The padding of List Item wrap
  | '--wrap-padding'
>;

export interface ListInstance {
  setDefaultOption?: (p: ListProps) => void;
}

export type ListItemProps = {
  prefix?: React.ReactNode;
  label?: React.ReactNode;
  title?: React.ReactNode;
  subTitle?: React.ReactNode;
  divider?: boolean | React.ReactNode;
  arrow?: boolean | React.ReactNode;
  extra?: React.ReactNode;
  onClick?: (e: React.MouseEvent) => void;
} & NativeProps<
  // The background color
  | '--background-color'
  // The color while the List Item is clicked
  | '--active-background-color'
  // The radius of List Item
  | '--radius'
  // The size of font
  | '--font-size'
  // The font color of title and subTitle
  | '--font-color'
  // The position of title, subTitle
  | '--font-position'
  // The color of label
  | '--label-color'
  // The position of label
  | '--label-position'
  // The color of content
  | '--content-color'
  // The radius of content
  | '--content-radius'
  // The color of divider
  | '--divider-color'
  // The height of divider
  | '--divider-height'
  // The padding of List Item
  | '--padding'
  // The padding of List Item content
  | '--content-padding'
  // The padding of List Item wrap
  | '--wrap-padding'
>;

export interface ListItemInstance {
  setDefaultOption?: (p: ListItemProps) => void;
}
