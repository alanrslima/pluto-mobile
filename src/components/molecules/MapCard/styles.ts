import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const mapCardStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      width: '100%',
      height: 150,
      borderRadius: theme.radii[4],
      overflow: 'hidden',
    },
    map: {
      flex: 1,
    },
  });
};
