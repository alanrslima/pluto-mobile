import React from 'react';
import {TouchableOpacity, View} from 'react-native';
import {Text} from '../Text';
import {useStyle} from '../../../hooks/useStyle';
import {buttonStyles} from './styles';
import {ButtonProps} from './types';
import {Spinner} from '../Spinner';

export function Button({
  title,
  onPress,
  color,
  textColor,
  disabled,
  isLoading,
}: ButtonProps) {
  const styles = useStyle(buttonStyles);

  return (
    <TouchableOpacity
      disabled={disabled || isLoading}
      onPress={onPress}
      style={[
        styles.wrapper,
        color !== undefined && {backgroundColor: color},
        disabled && styles.wrapperDisabled,
      ]}>
      {isLoading ? (
        <View style={styles.wrapperSpinner}>
          <Spinner />
        </View>
      ) : (
        <Text
          style={[
            styles.title,
            textColor !== undefined && {color: textColor},
            disabled && styles.textDisabled,
          ]}>
          {title}
        </Text>
      )}
    </TouchableOpacity>
  );
}
