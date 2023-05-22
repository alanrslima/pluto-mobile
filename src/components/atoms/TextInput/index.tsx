import React, {useEffect, useState} from 'react';
import {View, TextInput as RNTextInput, TouchableOpacity} from 'react-native';
import {useStyle} from '../../../hooks/useStyle';
import {textInputStyles} from './styles';
import {TextInputProps} from './types';
import {useTheme} from '../../../hooks/useTheme';
import {Label} from '../Label';
import {Icon} from '../Icon';
import {Text} from '../Text';

export function TextInput({label, type, error, ...rest}: TextInputProps) {
  const [secureTextEntry, setSecureTextEntry] = useState(false);
  const styles = useStyle(textInputStyles);
  const {colors} = useTheme();

  function handleSecureTextEntry() {
    setSecureTextEntry(prevState => !prevState);
  }

  useEffect(() => {
    if (type === 'password') {
      setSecureTextEntry(true);
    }
  }, [type]);

  return (
    <View style={styles.wrapper}>
      <Label>{label}</Label>
      <View style={[styles.container, !!error && styles.containerError]}>
        <RNTextInput
          keyboardAppearance="dark"
          accessibilityHint={label}
          secureTextEntry={secureTextEntry}
          placeholderTextColor={colors.whiteA300}
          style={[styles.input, rest.multiline && styles.inputMultiline]}
          {...rest}
        />
        {type === 'password' && (
          <TouchableOpacity
            onPress={handleSecureTextEntry}
            style={styles.wrapperIcon}>
            <Icon
              name={secureTextEntry ? 'eye-off' : 'eye'}
              size={18}
              color="white"
            />
          </TouchableOpacity>
        )}
      </View>
      {!!error && <Text style={styles.messageError}>{error}</Text>}
    </View>
  );
}
