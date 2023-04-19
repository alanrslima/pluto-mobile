import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../atoms/Text';
import {useStyle} from '../../../hooks/useStyle';
import {simpleItemStyles} from './styles';

export function SimpleItem() {
  const styles = useStyle(simpleItemStyles);

  return (
    <TouchableOpacity style={styles.wrapper}>
      <View />
      <View>
        <Text style={styles.title}>Titulo</Text>
        <Text>Descrição</Text>
      </View>
      <View />
    </TouchableOpacity>
  );
}
