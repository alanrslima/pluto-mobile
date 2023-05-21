import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {spinnerStyles} from './styles';
import {useTheme} from '../../../hooks/useTheme';
import {SpinnerProps} from './types';

export function Spinner(props: SpinnerProps) {
  const styles = useStyle(spinnerStyles);
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator color={colors.white} {...props} />
    </View>
  );
}
