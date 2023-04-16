import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const accountsListStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingHorizontal: theme.spaces[6],
    },
    wrapperCard: {
      marginBottom: theme.spaces[4],
    },
  });
};
