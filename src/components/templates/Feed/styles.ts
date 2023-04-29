import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const feedStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapperScroll: {
      paddingHorizontal: theme.spaces[6],
    },
    row: {
      flexDirection: 'row',
    },
  });
};
