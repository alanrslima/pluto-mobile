import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const simpleButtonStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingVertical: theme.spaces[4],
      paddingHorizontal: theme.spaces[6],
      borderRadius: theme.radii[2],
      flexDirection: 'row',
      alignItems: 'center',
    },
    title: {
      fontFamily: theme.fonts.poppins_semiBold,
      color: theme.colors.white,
      fontSize: theme.fontSizes.text_sm,
    },
    wrapperIcon: {
      marginRight: theme.spaces[4],
    },
  });
};
