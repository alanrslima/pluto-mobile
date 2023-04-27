import React, {useState} from 'react';
import {TextInput, View} from 'react-native';
import {Label} from '../../atoms/Label';
import {useStyle} from '../../../hooks/useStyle';
import {valueInputStyles} from './styles';
import {useTheme} from '../../../hooks/useTheme';
import {Text} from '../../atoms/Text';
import {SimpleButton} from '../../atoms/SimpleButton';
import {ValueInputProps} from './types';

export function ValueInput(props: ValueInputProps) {
  const [isExpense, setIsExpense] = useState(true);
  const styles = useStyle(valueInputStyles);
  const {colors} = useTheme();

  function handleType() {
    setIsExpense(prevState => !prevState);
  }

  const color = isExpense ? colors.negative400 : colors.positive600;

  return (
    <View>
      <Label>Valor</Label>
      <View style={styles.row}>
        <Text style={[styles.signal, {color}]}>R$</Text>
        <TextInput
          {...props}
          placeholderTextColor={color}
          placeholder="0,00"
          keyboardAppearance="dark"
          keyboardType="numeric"
          autoFocus
          style={[styles.input, {color}]}
        />
        <SimpleButton
          title={isExpense ? 'Despesa' : 'Receita'}
          onPress={handleType}
          color={color}
          icon="shuffle"
        />
      </View>
    </View>
  );
}
