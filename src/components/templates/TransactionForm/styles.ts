import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const transactionFormStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      padding: theme.spaces[6],
    },
    container: {
      flex: 1,
    },
    wrapperButton: {
      paddingHorizontal: theme.spaces[6],
      paddingBottom: theme.spaces[6],
    },
  });
};
