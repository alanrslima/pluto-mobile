import {TextInputProps as RNTextInputProps} from 'react-native';
import {IconName} from '../Icon/types';

export type TextInputProps = RNTextInputProps & {
  label: string;
  error?: string;
  type?: 'password' | 'text';
  leftIcon?: IconName;
  rightIcon?: IconName;
};
