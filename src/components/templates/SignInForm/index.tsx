import React, {useState} from 'react';
import {TextInput} from '../../atoms/TextInput';
import {SignInFormProps} from './types';
import {Form} from '../../molecules/Form';

export function SignInForm(props: SignInFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  async function onSubmit() {
    await props.onSubmit({email, password});
  }

  const isDisabled = !email.length || !password.length;

  return (
    <Form onSubmit={onSubmit} isDisabled={isDisabled}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        autoFocus
        label="E-mail"
      />
      <TextInput
        type="password"
        value={password}
        onChangeText={setPassword}
        label="Senha"
      />
    </Form>
  );
}
