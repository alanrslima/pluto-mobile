import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const cardStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      backgroundColor: theme.colors.green100,
      padding: theme.spaces[6],
      borderRadius: theme.radii[4],
    },
    title: {
      fontFamily: theme.fonts.poppins_semiBold,
      color: theme.colors.whiteA800,
      fontSize: theme.fontSizes.text_md,
    },
    signal: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.text_sm,
      fontFamily: theme.fonts.poppins_bold,
    },
    value: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.display_xs,
      fontFamily: theme.fonts.poppins_bold,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: theme.spaces[6],
    },
    type: {
      fontSize: theme.fontSizes.text_xs,
      color: theme.colors.white,
      fontFamily: theme.fonts.poppins_medium,
    },
  });
};
