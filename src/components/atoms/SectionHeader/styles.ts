import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const sectionHeaderStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: theme.spaces[2],
      paddingVertical: theme.spaces[5],
      backgroundColor: theme.colors.background,
    },
    text: {
      color: theme.colors.white,
      fontFamily: theme.fonts.poppins_semiBold,
      fontSize: theme.fontSizes.text_md,
    },
  });
};
