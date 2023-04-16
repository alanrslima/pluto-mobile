import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const textStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    default: {
      fontFamily: theme.fonts.poppins_regular,
    },
  });
};
