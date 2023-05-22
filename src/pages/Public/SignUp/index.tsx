import React from 'react';
import {Screen} from '../../../components/templates/Screen';
import {PublicSignUpPageProps} from './types';
import {SignUpForm} from '../../../components/templates/SignUpForm';
import {SignUpFormDataProps} from '../../../components/templates/SignUpForm/types';
import {useCreateUser} from '../../../services/user/useCreateUser';
import {useError} from '../../../hooks/useError';

export function PublicSignUpPage({navigation}: PublicSignUpPageProps) {
  const createUser = useCreateUser();
  const {handle} = useError();

  async function onSubmit(data: SignUpFormDataProps): Promise<void> {
    try {
      await createUser.mutateAsync(data);
      navigation.navigate('PublicSignInPage');
    } catch (error: any) {
      handle(error);
    }
  }

  return (
    <Screen header={{title: 'Cadastro'}} navigation={navigation}>
      <SignUpForm onSubmit={onSubmit} />
    </Screen>
  );
}
