import React from 'react';
import {useStyle} from '../../../hooks/useStyle';
import {Text} from '../../atoms/Text';
import {cardStyles} from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {TouchableOpacity, View} from 'react-native';

export function Card() {
  const styles = useStyle(cardStyles);

  return (
    <TouchableOpacity>
      <LinearGradient
        colors={['#442C61', '#9C44DC']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>NuBank</Text>
          <Text style={styles.type}>Conta corrente</Text>
        </View>

        <Text style={styles.signal}>
          R$ <Text style={styles.value}>5.209,00</Text>
        </Text>
      </LinearGradient>
    </TouchableOpacity>
  );
}
