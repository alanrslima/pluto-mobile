import React from 'react';
import {View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {headerStyles} from './styles';
import {Text} from '../../atoms/Text';
import {HeaderButton} from '../../atoms/HeaderButton';
import {HeaderProps} from './types';

export function Header({leftButtons, rightButtons, title}: HeaderProps) {
  const styles = useStyle(headerStyles);

  return (
    <View style={styles.container}>
      {leftButtons?.map(button => (
        <HeaderButton key={button.name} {...button} />
      ))}
      <Text style={styles.title}>{title}</Text>
      {rightButtons?.map(button => (
        <HeaderButton key={button.name} {...button} />
      ))}
    </View>
  );
}
