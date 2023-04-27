import React, {useState} from 'react';
import {ScrollView} from 'react-native';
import {TextInput} from '../../atoms/TextInput';
import {Spacer} from '../../atoms/Spacer';
import {useTheme} from '../../../hooks/useTheme';
import {useStyle} from '../../../hooks/useStyle';
import {transactionFormStyles} from './styles';
import {Button} from '../../atoms/Button';
import {ValueInput} from '../../molecules/ValueInput';
import {CategoryPicker} from '../../molecules/CategoryPicker';
import {Category} from '../../../types/Category';
import {AccountPicker} from '../../molecules/AccountPicker';
import {TransactionFormProps} from './types';
import {Account} from '../../../types/Account';

export function TransactionForm({defaultValues}: TransactionFormProps) {
  const {spaces} = useTheme();
  const styles = useStyle(transactionFormStyles);
  const [form, setForm] = useState(defaultValues);

  function onSelectCategory(value: Category) {
    setForm(prevState => ({...prevState, category: value}));
  }

  function onSelectAccount(value: Account) {
    setForm(prevState => ({...prevState, account: value}));
  }

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      <ValueInput defaultValue={String(form?.value)} />
      <TextInput
        defaultValue={form?.title}
        label="Nome"
        placeholder="Nome da transação"
      />
      <CategoryPicker
        value={form?.category?.name}
        onSelect={onSelectCategory}
      />
      <AccountPicker onSelect={onSelectAccount} value={form?.account} />
      <Spacer height={spaces[8]} />
      <Button title="Salvar transação" />
    </ScrollView>
  );
}
