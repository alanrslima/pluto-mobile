import React, {useRef, useState} from 'react';
import {TextInput as RNTextInput, View} from 'react-native';
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

  const firstNameRef = useRef<RNTextInput>(null);
  const lastNameRef = useRef<RNTextInput>(null);
  const emailRef = useRef<RNTextInput>(null);
  const passwordRef = useRef<RNTextInput>(null);

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
            returnKeyType="next"
            onSubmitEditing={() => lastNameRef?.current?.focus()}
            ref={firstNameRef}
          />
        </View>
        <View style={styles.spacer} />
        <View style={styles.rowItem}>
          <TextInput
            value={lastName}
            onChangeText={setLastName}
            label="Sobrenome"
            placeholder="Seu sobrenome"
            ref={lastNameRef}
            returnKeyType="next"
            onSubmitEditing={() => emailRef?.current?.focus()}
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
        ref={emailRef}
        returnKeyType="next"
        onSubmitEditing={() => passwordRef?.current?.focus()}
      />
      <TextInput
        type="password"
        value={password}
        keyboardType="visible-password"
        returnKeyType="done"
        onChangeText={setPassword}
        label="Senha"
        placeholder="Uma senha segura"
        ref={passwordRef}
        onSubmitEditing={onSubmit}
      />
    </Form>
  );
}
