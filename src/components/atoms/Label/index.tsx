import React from 'react';
import {Text} from '../Text';
import {useStyle} from '../../../hooks/useStyle';
import {labelStyles} from './styles';
import {LabelProps} from './types';

export function Label({children}: LabelProps) {
  const styles = useStyle(labelStyles);

  return <Text style={styles.label}>{children}</Text>;
}
