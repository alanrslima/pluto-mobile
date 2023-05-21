import React from 'react';
import {Screen} from '../../../components/templates/Screen';
import {PublicSignInPageProps} from './types';
import {SignInForm} from '../../../components/templates/SignInForm';

export function PublicSignInPage({navigation}: PublicSignInPageProps) {
  async function onSubmit(): Promise<void> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
      }, 4000);
    });
  }

  return (
    <Screen header={{title: 'Acessar'}} navigation={navigation}>
      <SignInForm onSubmit={onSubmit} />
    </Screen>
  );
}
