import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';
import Constants from 'expo-constants';

export const headerStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      paddingTop: Constants.statusBarHeight,
      height: Constants.statusBarHeight + 50,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spaces[6],
    },
    title: {
      flex: 1,
      fontFamily: theme.fonts.poppins_semiBold,
      color: theme.colors.white,
      fontSize: theme.fontSizes.display_xs,
    },
    wrapperLeftButton: {
      marginRight: theme.spaces[4],
    },
    wrapperRightButton: {
      marginLeft: theme.spaces[4],
    },
  });
};
