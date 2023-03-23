import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const screenStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.green100,
      padding: theme.spaces[6],
      borderRadius: theme.radii[4],
    },
  });
};
