import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const simpleItemStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    title: {
      fontFamily: theme.fonts.poppins_semiBold,
      color: theme.colors.white,
      fontSize: theme.fontSizes.text_sm,
    },
    wrapperIcon: {
      height: theme.sizes[10],
      width: theme.sizes[10],
      backgroundColor: theme.colors.whiteA100,
      borderRadius: theme.radii.round,
      justifyContent: 'center',
      alignItems: 'center',
      marginRight: theme.spaces[4],
    },
    description: {
      color: theme.colors.whiteA600,
      fontSize: theme.fontSizes.text_sm,
      marginTop: theme.spaces[2],
    },
    wrapper: {
      flexDirection: 'row',
      padding: theme.spaces[4],
      backgroundColor: theme.colors.whiteA50,
      borderRadius: theme.radii[2],
      alignItems: 'center',
    },
    content: {
      flex: 1,
    },
  });
};
