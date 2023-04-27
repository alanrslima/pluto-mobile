import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../atoms/Text';
import {useStyle} from '../../../hooks/useStyle';
import {simpleItemStyles} from './styles';
import {SimpleItemProps} from './types';
import {Icon} from '../../atoms/Icon';
import {useTheme} from '../../../hooks/useTheme';

export function SimpleItem({title, description, onPress}: SimpleItemProps) {
  const styles = useStyle(simpleItemStyles);
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={styles.wrapperIcon}>
        <Icon name="edit-2" color={colors.white} size={15} />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <Icon name="chevron-right" size={15} color={colors.white} />
    </TouchableOpacity>
  );
}
