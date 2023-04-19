import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Icon} from '../../atoms/Icon';
import {Text} from '../../atoms/Text';
import {useStyle} from '../../../hooks/useStyle';
import {statusItemStyles} from './styles';
import {useTheme} from '../../../hooks/useTheme';
import {StatusItemProps} from './types';

export function StatusItem({
  title,
  description,
  icon,
  subValue,
  value,
  onPress,
}: StatusItemProps) {
  const styles = useStyle(statusItemStyles);
  const {colors} = useTheme();

  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  });

  const valueColor = (value || 0) < 0 ? colors.negative300 : colors.positive300;

  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.wrapper}>
        {icon && (
          <View style={styles.wrapperIcon}>
            <Icon name={icon} size={20} color={colors.white} />
          </View>
        )}

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>
        <View style={styles.contentRight}>
          {value && (
            <Text style={[styles.value, {color: valueColor}]}>
              {formatter.format(value)}
            </Text>
          )}
          <Text style={styles.subValue}>{subValue}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
