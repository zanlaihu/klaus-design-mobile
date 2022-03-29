import { NativeProps } from '../_types';

type NativeInputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
>;

export interface InputFormat {
  templates: string | string[];
  pattern?: string;
  formatAdvanced?: Boolean;
}

export type InputProps = Pick<
  NativeInputProps,
  | 'maxLength'
  | 'minLength'
  | 'max'
  | 'min'
  | 'autoComplete'
  | 'pattern'
  | 'type'
  | 'onFocus'
  | 'onBlur'
  | 'autoCapitalize'
  | 'autoCorrect'
  | 'onKeyDown'
  | 'onKeyUp'
> & {
  // The value that inputted
  value?: string;
  // The value that initiated in the input area
  defaultValue?: string;
  // Triggered when the value is changed
  onChange?: (val: string) => void;
  // The value that displayed while there is no value in the input area
  placeholder?: string;
  // Control the disable state
  disabled?: boolean;
  // Control the read only state
  readOnly?: boolean;
  // Add a icon to clear the inputted value
  clearable?: boolean | React.ReactNode;
  // Add a border and hide the divider
  outlined?: boolean;
  // Triggered when the value is cleared
  onClear?: () => void;
  // The id of Input component
  id?: string;
  // Triggered when the Enter button on Keyboard is clicked.
  onEnterPress?: (e: React.KeyboardEvent<HTMLInputElement>) => void;
  // The enter key hint
  enterKeyHint?: 'enter' | 'done' | 'go' | 'next' | 'previous' | 'search' | 'send';
  // import format rules
  format?: InputFormat;
  // The name of label
  label?: string;
  // The error messages that displayed in the bottom of input
  warning?: string | React.ReactNode;
  // The first enhancer that displayed in the left side
  startEnhancer?: string | React.ReactNode;
  // The first enhancer that displayed in the right side
  endEnhancerOne?: string | React.ReactNode;
  // The second enhancer that displayed in the right side
  endEnhancerTwo?: string | React.ReactNode;
  // The radius prop of native button element.
  radius?: 'zero' | 'small' | 'medium' | 'large' | 'max';
} & NativeProps<
    // The color of inputted text
    | '--input-color'
    // The background color of Input component
    | '--background-color'
    // The color of placeholder
    | '--placeholder-color'
    // The color of label when focused
    | '--label-active-color'
    // The color of label
    | '--label-inactive-color'
    // The color of divider when focused
    | '--divider-active-color'
    // The color of divider
    | '--divider-inactive-color'
    // The color of border when focused
    | '--border-active-color'
    // The color of border
    | '--border-inactive-color'
    // The left and right padding of Input component
    | '--left-right-spacing'
  >;

export interface InputInstance {
  setDefaultOption?: (p: InputProps) => void;
}
