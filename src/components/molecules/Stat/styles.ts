import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const statStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.whiteA50,
      padding: theme.spaces[6],
    },
    title: {
      color: theme.colors.white,
      fontFamily: theme.fonts.poppins_semiBold,
    },
    value: {
      color: theme.colors.positive300,
      fontFamily: theme.fonts.poppins_bold,
      fontSize: theme.fontSizes.text_lg,
    },
  });
};
