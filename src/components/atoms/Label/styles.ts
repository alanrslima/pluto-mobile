import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const labelStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    label: {
      color: theme.colors.white,
      fontFamily: theme.fonts.poppins_semiBold,
      fontSize: theme.fontSizes.text_md,
      marginBottom: theme.spaces[3],
    },
  });
};
