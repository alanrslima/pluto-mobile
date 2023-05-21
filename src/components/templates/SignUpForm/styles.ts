import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const signInFormStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      flex: 1,
    },
    wrapper: {
      paddingHorizontal: theme.spaces[6],
    },
    wrapperButton: {
      padding: theme.spaces[6],
    },
    row: {
      flexDirection: 'row',
    },
    rowItem: {
      flex: 1,
    },
    spacer: {
      flex: 0.1,
    },
  });
};
