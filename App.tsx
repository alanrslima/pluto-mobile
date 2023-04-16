import React from 'react';
import Routes from './src/routes';
import {RootProvider} from './src/components/organisms/RootProvider';

export default function App() {
  return (
    <RootProvider>
      <Routes />
    </RootProvider>
  );
}
