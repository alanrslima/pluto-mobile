import React from 'react';
import {Text as RNText} from 'react-native';
import {TextProps} from './types';

export function Text(props: TextProps) {
  return <RNText {...props} />;
}
