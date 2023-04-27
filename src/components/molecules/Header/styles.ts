import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';
import Constants from 'expo-constants';

const HEADER_HEIGHT = 60;

export const headerStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      height: HEADER_HEIGHT,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spaces[6],
    },
    statusBarHeight: {
      paddingTop: Constants.statusBarHeight,
      height: Constants.statusBarHeight + HEADER_HEIGHT,
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
