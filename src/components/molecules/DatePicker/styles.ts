import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const datePickerStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      padding: theme.spaces[6],
    },
  });
};
