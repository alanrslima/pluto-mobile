import React from 'react';
import {ActivityIndicator, View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {spinnerStyles} from './styles';
import {useTheme} from '../../../hooks/useTheme';

export function Spinner() {
  const styles = useStyle(spinnerStyles);
  const {colors} = useTheme();

  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.white} />
    </View>
  );
}
