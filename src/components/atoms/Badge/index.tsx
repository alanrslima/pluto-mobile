import React from 'react';
import {View} from 'react-native';
import {Text} from '../Text';
import {useStyle} from '../../../hooks/useStyle';
import {badgeStyles} from './styles';
import {BadgeProps} from './types';
import {Icon} from '../Icon';
import {useTheme} from '../../../hooks/useTheme';

export function Badge({text, color}: BadgeProps) {
  const styles = useStyle(badgeStyles);
  const {colors} = useTheme();

  return (
    <View style={[styles.wrapper, {backgroundColor: color}]}>
      <View style={styles.wrapperIcon}>
        <Icon name="edit-2" color={colors.white} />
      </View>

      <Text style={styles.text}>{text}</Text>
    </View>
  );
}
