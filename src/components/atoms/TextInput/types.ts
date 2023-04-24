import {TextInputProps as RNTextInputProps} from 'react-native';
import {IconName} from '../Icon/types';

export type TextInputProps = RNTextInputProps & {
  label: string;
  leftIcon?: IconName;
  rightIcon?: IconName;
};
