import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const accountPickerStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    wrapper: {
      paddingTop: theme.spaces[5],
    },
  });
};
