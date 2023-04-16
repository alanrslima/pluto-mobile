import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Icon} from '../Icon';
import {useStyle} from '../../../hooks/useStyle';
import {headerButtonStyles} from './styles';
import {HeaderButtonProps} from './types';

export function HeaderButton({name}: HeaderButtonProps) {
  const styles = useStyle(headerButtonStyles);

  return (
    <TouchableOpacity style={styles.container}>
      <Icon name={name} size={15} color="white" />
    </TouchableOpacity>
  );
}
