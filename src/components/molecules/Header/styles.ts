import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';
import {DeviceProps} from '../../../types/Device';

const HEADER_HEIGHT = 60;

export const headerStyles = (theme: ThemeProps, device: DeviceProps) => {
  return StyleSheet.create({
    container: {
      height: HEADER_HEIGHT,
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: theme.spaces[6],
    },
    statusBarHeight: {
      paddingTop: device.statusBarHeight,
      height: device.statusBarHeight + HEADER_HEIGHT,
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
