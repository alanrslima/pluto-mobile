import React from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from './types';
import {useStyle} from '../../../hooks/useStyle';
import {textStyles} from './styles';

export function Text(props: TextProps) {
  const styles = useStyle(textStyles);

  return <RNText {...props} style={[styles.default, props.style]} />;
}
