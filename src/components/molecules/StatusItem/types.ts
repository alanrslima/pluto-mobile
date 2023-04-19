import {IconName} from '../../atoms/Icon/types';

export type StatusItemProps = {
  title: string;
  icon?: IconName;
  description?: string;
  value?: number;
  subValue?: string;
  onPress?: () => void;
};
