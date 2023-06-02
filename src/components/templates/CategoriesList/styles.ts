import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const categoriesListStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: theme.spaces[6],
    },
  });
};
