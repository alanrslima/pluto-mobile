import React from 'react';
import {useStyle} from '../../../hooks/useStyle';
import {Text} from '../../atoms/Text';
import {cardStyles} from './styles';
import {LinearGradient} from 'expo-linear-gradient';
import {TouchableOpacity, View} from 'react-native';
import {CardProps} from './types';
import {ColorsHelper} from '../../../helpers/colors';

export function Card({title, value, type, hexColor, onPress}: CardProps) {
  const styles = useStyle(cardStyles);

  const formatter = new Intl.NumberFormat('pt-BR');
  const darker = ColorsHelper.newShade(hexColor, -40);
  const lighter = ColorsHelper.newShade(hexColor, 40);

  return (
    <TouchableOpacity onPress={onPress}>
      <LinearGradient
        colors={[darker, hexColor, lighter]}
        locations={[0, 0.6, 1]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 1}}
        style={styles.container}>
        <View style={styles.row}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.type}>{type}</Text>
        </View>

        {value !== undefined && (
          <Text style={styles.signal}>
            R$ <Text style={styles.value}>{formatter.format(value)}</Text>
          </Text>
        )}
      </LinearGradient>
    </TouchableOpacity>
  );
}
