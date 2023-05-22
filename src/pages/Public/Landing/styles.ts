import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';
import {DeviceProps} from '../../../types/Device';

export const landingStyles = (theme: ThemeProps, device: DeviceProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.colors.background,
      justifyContent: 'flex-end',
      padding: theme.spaces[6],
      paddingTop: device.statusBarHeight,
      paddingBottom: device.bottomSpace,
    },
    text: {
      fontSize: theme.fontSizes.display_md,
      color: theme.colors.white,
      fontFamily: theme.fonts.poppins_semiBold,
      marginBottom: theme.spaces[6],
    },
    spacer: {
      height: theme.spaces[4],
    },
  });
};
