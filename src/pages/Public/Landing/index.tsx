import React from 'react';
import {ImageBackground, View} from 'react-native';
import {Button} from '../../../components/atoms/Button';
import {PublicLandingPageProps} from './types';
import {useStyle} from '../../../hooks/useStyle';
import {landingStyles} from './styles';
import {Text} from '../../../components/atoms/Text';
import backgroundImage from '../../../assets/images/background.png';
import {useTheme} from '../../../hooks/useTheme';

export function PublicLandingPage({navigation}: PublicLandingPageProps) {
  const {colors} = useTheme();
  const styles = useStyle(landingStyles);

  function handleSignIn() {
    navigation.navigate('PublicSignInPage');
  }

  function handleSignUp() {
    navigation.navigate('PublicSignUpPage');
  }

  return (
    <ImageBackground source={backgroundImage} style={styles.container}>
      <Text style={styles.text}>{'Simplifique \na sua \nvida financeira'}</Text>
      <Button
        color={colors.white}
        textColor={colors.primary}
        onPress={handleSignUp}
        title="Quero me cadastrar"
      />
      <View style={styles.spacer} />
      <Button onPress={handleSignIn} title="Ja tenho conta" />
    </ImageBackground>
  );
}
