import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const textInputStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingTop: theme.spaces[5],
    },
    input: {
      backgroundColor: theme.colors.whiteA100,
      borderRadius: theme.radii[2],
      color: theme.colors.white,
      paddingVertical: theme.spaces[5],
      paddingHorizontal: theme.spaces[6],
      fontFamily: theme.fonts.poppins_semiBold,
      borderColor: theme.colors.whiteA200,
      borderWidth: theme.borders[1],
      flex: 1,
    },
    inputMultiline: {
      paddingTop: theme.spaces[5],
      minHeight: 180,
    },
    row: {
      flexDirection: 'row',
    },
  });
};
