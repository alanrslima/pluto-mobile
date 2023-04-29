import React, {useRef, useState} from 'react';
import {KeyboardAvoidingView, ScrollView} from 'react-native';
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
import {BottomSheet} from '../BottomSheet';
import {BottomSheetHandle} from '../BottomSheet/types';

export function TransactionForm({defaultValues}: TransactionFormProps) {
  const {spaces} = useTheme();
  const styles = useStyle(transactionFormStyles);
  const [form, setForm] = useState(defaultValues);
  const bottomSheetRef = useRef<BottomSheetHandle>(null);

  function onSelectCategory(value: Category) {
    setForm(prevState => ({...prevState, category: value}));
  }

  function onSelectAccount(value: Account) {
    setForm(prevState => ({...prevState, account: value}));
  }

  function onHandleValue(value: string) {
    setForm(prevState => ({...prevState, value: Number(value)}));
  }

  function onHandleTitle(value: string) {
    setForm(prevState => ({...prevState, title: value}));
  }

  function showSuccessMessage() {
    bottomSheetRef.current?.show({
      title: 'Ops!',
      description:
        'Houve algum problema ao adicionar sua transação. Por favor, verifique sua conexão com a internet e tente novamente!',
    });
  }

  function onSubmit() {
    console.log(form);
    showSuccessMessage();
  }

  function isDisabled() {
    return (
      !!form?.value || !!form?.title || !!form?.category || !!form?.account
    );
  }

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <ScrollView contentContainerStyle={styles.wrapper}>
        <ValueInput
          onChangeText={onHandleValue}
          defaultValue={
            form?.value !== undefined ? String(form?.value) : undefined
          }
        />
        <TextInput
          defaultValue={form?.title}
          label="Título"
          value={form?.title}
          onChangeText={onHandleTitle}
          placeholder="Título da transação"
        />
        <CategoryPicker
          value={form?.category?.name}
          onSelect={onSelectCategory}
        />
        <AccountPicker onSelect={onSelectAccount} value={form?.account} />
        <Spacer height={spaces[8]} />
      </ScrollView>
      <Button
        // disabled={isDisabled()}
        onPress={onSubmit}
        title="Salvar transação"
      />

      <BottomSheet ref={bottomSheetRef} />
    </KeyboardAvoidingView>
  );
}
