import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../Text';
import {useStyle} from '../../../hooks/useStyle';
import {simpleButtonStyles} from './styles';
import {SimpleButtonProps} from './types';
import {Icon} from '../Icon';
import {useTheme} from '../../../hooks/useTheme';

export function SimpleButton({title, color, onPress, icon}: SimpleButtonProps) {
  const styles = useStyle(simpleButtonStyles);
  const {colors} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.wrapper, {backgroundColor: color}]}>
      {icon && (
        <View style={styles.wrapperIcon}>
          <Icon name={icon} size={20} color={colors.white} />
        </View>
      )}
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
}
