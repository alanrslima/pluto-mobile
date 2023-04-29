import {StyleSheet} from 'react-native';
import {ThemeProps} from '../../../types/Theme';

export const carouselAccountsStyles = (theme: ThemeProps) => {
  return StyleSheet.create({
    container: {
      width: '100%',
    },
    wrapperIndicators: {
      flexDirection: 'row',
      justifyContent: 'center',
      padding: theme.spaces[4],
    },
    indicator: {
      width: 5,
      height: 5,
      backgroundColor: theme.colors.whiteA300,
      marginLeft: theme.spaces[3],
    },
    activedIndicator: {
      backgroundColor: theme.colors.white,
    },
  });
};
