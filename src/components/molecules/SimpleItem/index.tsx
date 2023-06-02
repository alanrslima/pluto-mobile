import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../../atoms/Text';
import {useStyle} from '../../../hooks/useStyle';
import {simpleItemStyles} from './styles';
import {SimpleItemProps} from './types';
import {Icon} from '../../atoms/Icon';
import {useTheme} from '../../../hooks/useTheme';
import {ColorsHelper} from '../../../helpers/colors';

export function SimpleItem({
  title,
  description,
  onPress,
  color,
  icon,
}: SimpleItemProps) {
  const styles = useStyle(simpleItemStyles);
  const {colors} = useTheme();

  return (
    <TouchableOpacity onPress={onPress} style={styles.wrapper}>
      <View style={[styles.wrapperIcon, !!color && {backgroundColor: color}]}>
        <Icon
          name={icon || 'edit-2'}
          color={color ? ColorsHelper.invertColor(color, true) : colors.white}
          size={15}
        />
      </View>
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        {description && <Text style={styles.description}>{description}</Text>}
      </View>
      <Icon name="chevron-right" size={15} color={colors.white} />
    </TouchableOpacity>
  );
}
