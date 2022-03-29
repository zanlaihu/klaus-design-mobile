import { NativeProps, RadiusToken } from '../_types';

export type ProgressProps = {
  // The radius of progress
  radius?: RadiusToken;
  // The total steps for steps progress
  steps?: number;
  // The current step of steps progress
  currentStep?: number;
  // The percent of linear progress
  percent?: number;
  // The label of progress
  label?: string;
  // The size of progress
  size?: 'small' | 'medium' | 'large';
} & NativeProps<
  '--height' | '--finished-color' | '--unfinished-color' | '--label-color' | '--current-color'
>;

export interface ProgressInstance {
  setDefaultOption?: (p: ProgressProps) => void;
}
