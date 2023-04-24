import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const modalLocationStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
    },
  });
};
