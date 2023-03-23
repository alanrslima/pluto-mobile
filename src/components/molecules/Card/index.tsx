import React from 'react';
import {useStyle} from '../../../hooks/useStyle';
import {Text} from '../../atoms/Text';
import {screenStyles} from './styles';
import {LinearGradient} from 'expo-linear-gradient';

export function Card() {
  const styles = useStyle(screenStyles);

  return (
    <LinearGradient
      colors={['#4c669f', '#3b5998', '#192f6a']}
      start={{x: 0, y: 1}}
      locations={[0, 0.3, 0.9]}
      end={{x: 0.8, y: 0.5}}
      style={styles.container}>
      <Text>Inter</Text>
      <Text>
        R$ <Text>5.209,00</Text>
      </Text>
    </LinearGradient>
  );
}
