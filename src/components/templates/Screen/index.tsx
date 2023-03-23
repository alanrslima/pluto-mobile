import React from 'react';
import {View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {screenStyles} from './styles';
import {ScreenProps} from './types';

export function Screen(props: ScreenProps) {
  const styles = useStyle(screenStyles);

  return <View style={styles.container}>{props.children}</View>;
}
