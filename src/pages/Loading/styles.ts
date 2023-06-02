import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../types/Theme';

export const loadingScreenStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.background,
      flex: 1,
    },
  });
};
