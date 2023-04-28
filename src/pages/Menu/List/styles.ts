import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const menuStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: theme.spaces[5],
    },
  });
};
