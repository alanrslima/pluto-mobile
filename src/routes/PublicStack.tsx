import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from '../types/RootStack';
import {PublicSignInPage} from '../pages/Public/SignIn';
import {PublicLandingPage} from '../pages/Public/Landing';
import {PublicSignUpPage} from '../pages/Public/SignUp';

const Stack = createNativeStackNavigator<RootStackParamList>();

export function PublicStack() {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="PublicLandingPage" component={PublicLandingPage} />
      <Stack.Screen name="PublicSignInPage" component={PublicSignInPage} />
      <Stack.Screen name="PublicSignUpPage" component={PublicSignUpPage} />
    </Stack.Navigator>
  );
}
