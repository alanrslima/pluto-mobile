import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const badgeStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      alignSelf: 'flex-start',
      paddingHorizontal: theme.spaces[6],
      paddingVertical: theme.spaces[2],
      borderRadius: theme.radii[2],
      flexDirection: 'row',
      alignItems: 'center',
    },
    text: {
      color: theme.colors.white,
      fontFamily: theme.fonts.poppins_semiBold,
    },
    wrapperIcon: {
      marginRight: theme.spaces[2],
    },
  });
};
