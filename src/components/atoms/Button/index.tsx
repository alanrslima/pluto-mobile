import React from 'react';
import {TouchableOpacity} from 'react-native';
import {Text} from '../Text';
import {useStyle} from '../../../hooks/useStyle';
import {buttonStyles} from './styles';
import {ButtonProps} from './types';

export function Button({
  title,
  onPress,
  color,
  textColor,
  disabled,
}: ButtonProps) {
  const styles = useStyle(buttonStyles);

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={onPress}
      style={[
        styles.wrapper,
        color !== undefined && {backgroundColor: color},
        disabled && styles.wrapperDisabled,
      ]}>
      <Text
        style={[
          styles.title,
          textColor !== undefined && {color: textColor},
          disabled && styles.textDisabled,
        ]}>
        {title}
      </Text>
    </TouchableOpacity>
  );
}
