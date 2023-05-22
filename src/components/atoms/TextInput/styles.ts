import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const textInputStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingTop: theme.spaces[5],
    },
    input: {
      flex: 1,
      paddingVertical: theme.spaces[5],
      paddingHorizontal: theme.spaces[6],
      fontFamily: theme.fonts.poppins_semiBold,
      color: theme.colors.white,
    },
    inputMultiline: {
      paddingTop: theme.spaces[5],
      minHeight: 180,
    },
    container: {
      flexDirection: 'row',
      backgroundColor: theme.colors.whiteA100,
      borderRadius: theme.radii[2],
      borderColor: theme.colors.whiteA200,
      borderWidth: theme.borders[1],
    },
    containerError: {
      borderColor: theme.colors.negative300,
    },
    wrapperIcon: {
      justifyContent: 'center',
      alignItems: 'center',
      padding: theme.spaces[4],
    },
    messageError: {
      marginTop: theme.spaces[3],
      color: theme.colors.negative300,
      textAlign: 'right',
      fontSize: theme.fontSizes.text_xs,
    },
  });
};
