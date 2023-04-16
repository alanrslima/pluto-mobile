import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const headerButtonStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      height: theme.sizes[10],
      width: theme.sizes[10],
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: theme.colors.whiteA100,
      borderRadius: theme.radii[1],
    },
  });
};
