import {IconName} from '../../atoms/Icon/types';

export type SimpleItemProps = {
  title: string;
  description?: string;
  onPress?: () => void;
  color?: string;
  icon?: IconName;
};
