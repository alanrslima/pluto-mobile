import React, {useState} from 'react';
import {View} from 'react-native';
import {TextInput} from '../../atoms/TextInput';
import {useStyle} from '../../../hooks/useStyle';
import {signInFormStyles} from './styles';
import {SignUpFormProps} from './types';
import {Form} from '../../molecules/Form';

export function SignUpForm(props: SignUpFormProps) {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const styles = useStyle(signInFormStyles);

  async function onSubmit() {
    await props.onSubmit({email, password, firstName, lastName});
  }

  const isDisabled =
    !email.length || !password.length || !firstName.length || !lastName.length;

  return (
    <Form onSubmitTitle="Cadastrar" onSubmit={onSubmit} isDisabled={isDisabled}>
      <View style={styles.row}>
        <View style={styles.rowItem}>
          <TextInput
            value={firstName}
            onChangeText={setFirstName}
            autoFocus
            placeholder="Seu nome"
            label="Nome"
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.rowItem}>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            label="Sobrenome"
            placeholder="Seu sobrenome"
          />
        </View>
      </View>
      <TextInput
        value={email}
        keyboardType="email-address"
        onChangeText={setEmail}
        autoCapitalize="none"
        placeholder="email@email.com"
        label="E-mail"
      />
      <TextInput
        type="password"
        value={password}
        keyboardType="visible-password"
        onChangeText={setPassword}
        label="Senha"
        placeholder="Uma senha segura"
      />
    </Form>
  );
}
