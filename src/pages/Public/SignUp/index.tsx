import React from 'react';
import {Screen} from '../../../components/templates/Screen';
import {PublicSignUpPageProps} from './types';
import {SignUpForm} from '../../../components/templates/SignUpForm';
import {SignUpFormDataProps} from '../../../components/templates/SignUpForm/types';
import {useCreateUser} from '../../../services/user/useCreateUser';
import {useAlert} from '../../../hooks/useAlert';
import {errorHandler} from '../../../helpers/errorHandler';

export function PublicSignUpPage({navigation}: PublicSignUpPageProps) {
  const createUser = useCreateUser();
  const alertRef = useAlert();

  async function onSubmit(data: SignUpFormDataProps): Promise<void> {
    try {
      await createUser.mutateAsync(data);
    } catch (error: any) {
      errorHandler(error, alertRef);
    }
  }

  return (
    <Screen header={{title: 'Cadastro'}} navigation={navigation}>
      <SignUpForm onSubmit={onSubmit} />
    </Screen>
  );
}
