import React from 'react';
import {View} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {headerStyles} from './styles';
import {Text} from '../../atoms/Text';
import {HeaderButton} from '../../atoms/HeaderButton';
import {HeaderProps} from './types';

export function Header({
  leftButtons,
  rightButtons,
  title,
  useStatusBarHeight = true,
}: HeaderProps) {
  const styles = useStyle(headerStyles);

  return (
    <View
      style={[styles.container, useStatusBarHeight && styles.statusBarHeight]}>
      {leftButtons?.map(button => (
        <View key={button.name} style={styles.wrapperLeftButton}>
          <HeaderButton {...button} />
        </View>
      ))}
      <Text style={styles.title}>{title}</Text>
      {rightButtons?.map(button => (
        <View key={button.name} style={styles.wrapperRightButton}>
          <HeaderButton {...button} />
        </View>
      ))}
    </View>
  );
}
