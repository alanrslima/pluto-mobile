import React from 'react';
import {ScrollView} from 'react-native';
import {TextInput} from '../../atoms/TextInput';
import {Spacer} from '../../atoms/Spacer';
import {useTheme} from '../../../hooks/useTheme';
import {useStyle} from '../../../hooks/useStyle';
import {transactionFormStyles} from './styles';
import {Button} from '../../atoms/Button';
import {ValueInput} from '../../molecules/ValueInput';
import {LocationPicker} from '../../molecules/LocationPicker';

export function TransactionForm() {
  const {spaces} = useTheme();
  const styles = useStyle(transactionFormStyles);

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <ValueInput />
      <TextInput label="Nome" placeholder="Nome da transação" />
      <Spacer height={spaces[5]} />
      <TextInput
        label="Notas"
        placeholder="Caso queria anotar alguma coisa..."
        multiline
      />
      <Spacer height={spaces[5]} />
      <LocationPicker />
      <Button title="Salvar transação" />
    </ScrollView>
  );
}
