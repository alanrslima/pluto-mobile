import React from 'react';
import {View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {headerStyles} from './styles';

export function Header() {
  const styles = useStyle(headerStyles);

  return <View style={styles.container} />;
}
