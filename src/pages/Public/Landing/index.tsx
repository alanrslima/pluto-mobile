import React from 'react';
import {View} from 'react-native';
import {Button} from '../../../components/atoms/Button';
import {PublicLandingPageProps} from './types';
import {useStyle} from '../../../hooks/useStyle';
import {landingStyles} from './styles';

export function PublicLandingPage({navigation}: PublicLandingPageProps) {
  const styles = useStyle(landingStyles);

  function handleSignIn() {
    navigation.navigate('PublicSignInPage');
  }

  function handleSignUp() {
    navigation.navigate('PublicSignUpPage');
  }

  return (
    <View style={styles.container}>
      <Button onPress={handleSignIn} title="Entrar no app" />
      <Button onPress={handleSignUp} title="Quero me cadastrar" />
    </View>
  );
}
