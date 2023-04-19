import React from 'react';
import {View} from 'react-native';
import {SpacerProps} from './types';

export function Spacer({height}: SpacerProps) {
  return <View style={{height}} />;
}
