import React from 'react';
import {View, TextInput as RNTextInput} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {textInputStyles} from './styles';
import {TextInputProps} from './types';
import {useTheme} from '../../../hooks/useTheme';
import {Label} from '../Label';

export function TextInput({label, ...rest}: TextInputProps) {
  const styles = useStyle(textInputStyles);
  const {colors} = useTheme();

  return (
    <View style={styles.wrapper}>
      <Label>{label}</Label>
      <View style={styles.row}>
        <RNTextInput
          keyboardAppearance="dark"
          placeholderTextColor={colors.whiteA300}
          style={[styles.input, rest.multiline && styles.inputMultiline]}
          {...rest}
        />
      </View>
    </View>
  );
}
