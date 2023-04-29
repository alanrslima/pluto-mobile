import React from 'react';
import {View} from 'react-native';
import {Text} from '../../atoms/Text';
import {useStyle} from '../../../hooks/useStyle';
import {statStyles} from './styles';

export function Stat() {
  const styles = useStyle(statStyles);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entradas</Text>
      <Text style={styles.value}>R$ 1.000,00</Text>
    </View>
  );
}
