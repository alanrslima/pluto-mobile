import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const valueInputStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    input: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.display_md,
      fontFamily: theme.fonts.poppins_bold,
      paddingHorizontal: theme.spaces[2],
      flex: 1,
    },
    row: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    signal: {
      color: theme.colors.white,
      fontSize: theme.fontSizes.text_lg,
      fontFamily: theme.fonts.poppins_bold,
    },
  });
};
