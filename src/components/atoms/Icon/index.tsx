import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import {IconProps} from './types';

export function Icon({name, size, color}: IconProps) {
  return <Feather name={name} size={size} color={color} />;
}
