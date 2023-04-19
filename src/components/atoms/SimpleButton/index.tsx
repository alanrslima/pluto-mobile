import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import {useStyle} from '../../../hooks/useStyle';
import {simpleButtonStyles} from './styles';
import {SimpleButtonProps} from './types';

export function SimpleButton({title, selected, onPress}: SimpleButtonProps) {
  const styles = useStyle(simpleButtonStyles);

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, selected && styles.wrapperSelected]}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
