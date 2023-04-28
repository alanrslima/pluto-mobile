import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const bottomSheetStyles = (theme: ThemeProps) => {
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
    },
    content: {
      padding: theme.spaces[6],
    },
    description: {
      color: theme.colors.whiteA800,
    },
  });
};
