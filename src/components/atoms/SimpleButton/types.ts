import {IconName} from '../Icon/types';

export type SimpleButtonProps = {
  color?: string;
  title: string;
  onPress?: () => void;
  icon?: IconName;
};
