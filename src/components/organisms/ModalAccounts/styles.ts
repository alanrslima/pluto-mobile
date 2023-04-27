import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const modalCardsStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      paddingVertical: theme.spaces[4],
      paddingHorizontal: theme.spaces[6],
    },
    wrapperItem: {
      paddingVertical: theme.spaces[2],
    },
  });
};
