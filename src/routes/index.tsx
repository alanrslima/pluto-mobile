import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {PublicStack} from './PublicStack';
import {PrivateStack} from './PrivateStack';

export default function Routes() {
  return (
    <NavigationContainer>
      <PublicStack />
      {/* <PrivateStack /> */}
    </NavigationContainer>
  );
}
