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
    value: {
      color: theme.colors.positive300,
      fontSize: theme.fontSizes.text_md,
      fontFamily: theme.fonts.poppins_bold,
    },
    wrapper: {
      flexDirection: 'row',
      padding: theme.spaces[4],
      backgroundColor: theme.colors.whiteA50,
      borderRadius: theme.radii[2],
    },
    content: {
      flex: 1,
      justifyContent: 'center',
    },
    subValue: {
      color: theme.colors.whiteA600,
      marginTop: theme.spaces[2],
    },
    contentRight: {
      justifyContent: 'center',
      alignItems: 'flex-end',
    },
  });
};
