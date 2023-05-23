import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {PublicStack} from './PublicStack';
import {PrivateStack} from './PrivateStack';
import {useGetUserSession} from '../services/auth/useGetUserSession';
import {Spinner} from '../components/atoms/Spinner';
import {View} from 'react-native';

export default function Routes() {
  const {data: user, isLoading} = useGetUserSession();

  if (isLoading) {
    return (
      <View style={{flex: 1, backgroundColor: 'red'}}>
        <Spinner />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {user ? <PrivateStack /> : <PublicStack />}
    </NavigationContainer>
  );
}
