import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import {IconProps} from './types';

export function Icon({name, size, color}: IconProps) {
  return <FontAwesome name={name} size={size} color={color} />;
}
