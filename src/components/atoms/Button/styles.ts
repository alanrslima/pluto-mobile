import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const buttonStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingVertical: theme.spaces[4],
      paddingHorizontal: theme.spaces[6],
      borderRadius: theme.radii[2],
    },
  });
};
