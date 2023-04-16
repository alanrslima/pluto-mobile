import React from 'react';
import {useStyle} from '../../../hooks/useStyle';
import {Text} from '../../atoms/Text';
import {cardStyles} from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {TouchableOpacity, View} from 'react-native';
import {CardProps} from './types';

export function Card({title, value, type}: CardProps) {
  const styles = useStyle(cardStyles);

  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#442C61', '#9C44DC']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>

        <Text style={styles.signal}>
          R$ <Text style={styles.value}>{value}</Text>
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
