import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';
import {DeviceProps} from '../../../types/Device';

export const bottomSheetStyles = (theme: ThemeProps, device: DeviceProps) => {
  return StyleSheet.create({
    full: {
      flex: 1,
    },
    backdrop: {
      flex: 1,
      backgroundColor: theme.colors.blackA400,
      justifyContent: 'flex-end',
    },
    container: {
      paddingTop: theme.spaces[4],
      backgroundColor: theme.colors.negative600,
      borderTopLeftRadius: theme.radii[5],
      borderTopRightRadius: theme.radii[5],
      paddingBottom: device.bottomSpace,
    },
    content: {
      paddingHorizontal: theme.spaces[6],
      paddingTop: theme.spaces[2],
    },
    description: {
      color: theme.colors.whiteA800,
    },
  });
};
