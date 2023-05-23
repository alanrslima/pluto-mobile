import React from 'react';
import {Screen} from '../../../components/templates/Screen';
import {PublicSignInPageProps} from './types';
import {SignInForm} from '../../../components/templates/SignInForm';
import {useLogin} from '../../../services/auth/useLogin';
import {Credentials} from '../../../types/Credentials';
import {useError} from '../../../hooks/useError';

export function PublicSignInPage({navigation}: PublicSignInPageProps) {
  const {mutateAsync} = useLogin();
  const {handle} = useError();

  async function onSubmit(data: Credentials) {
    try {
      await mutateAsync(data);
    } catch (error) {
      handle(error);
    }
  }

  return (
    <Screen header={{title: 'Acessar'}} navigation={navigation}>
      <SignInForm onSubmit={onSubmit} />
    </Screen>
  );
}
