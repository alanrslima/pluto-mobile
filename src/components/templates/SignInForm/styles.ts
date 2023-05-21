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
  });
};
