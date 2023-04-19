import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const transactionDetailStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      padding: theme.spaces[6],
    },
    image: {
      height: 200,
      borderRadius: theme.radii[2],
    },
    title: {
      fontSize: theme.fontSizes.text_xl,
      color: theme.colors.white,
      fontFamily: theme.fonts.poppins_semiBold,
    },
    subTitle: {
      color: theme.colors.whiteA800,
      marginTop: theme.spaces[2],
    },
    value: {
      fontSize: theme.fontSizes.display_md,
      fontFamily: theme.fonts.poppins_bold,
    },
    description: {
      color: theme.colors.whiteA800,
    },
  });
};
