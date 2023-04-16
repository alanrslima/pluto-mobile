import React from 'react';
import {View} from 'react-native';
import {Text} from '../Text';
import {useStyle} from '../../../hooks/useStyle';
import {sectionHeaderStyles} from './styles';
import {SectionHeaderProps} from './types';

export function SectionHeader({title}: SectionHeaderProps) {
  const styles = useStyle(sectionHeaderStyles);

  return (
    <View style={styles.wrapper}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
}
