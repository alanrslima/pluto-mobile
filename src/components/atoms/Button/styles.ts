import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const buttonStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingVertical: theme.spaces[5],
      paddingHorizontal: theme.spaces[6],
      borderRadius: theme.radii[2],
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: theme.colors.primary,
    },
    title: {
      color: theme.colors.white,
      fontFamily: theme.fonts.poppins_semiBold,
    },
    wrapperDisabled: {
      backgroundColor: theme.colors.whiteA100,
    },
    textDisabled: {
      color: theme.colors.whiteA300,
    },
  });
};
