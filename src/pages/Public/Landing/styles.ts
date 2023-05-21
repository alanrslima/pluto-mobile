import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const landingStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'flex-end',
      padding: theme.spaces[6],
    },
  });
};
