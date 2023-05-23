import React from 'react';
import Routes from './src/routes';
import {RootProvider} from './src/components/organisms/RootProvider';
import {LogBox} from 'react-native';

LogBox.ignoreAllLogs();

export default function App() {
  return (
    <RootProvider>
      <Routes />
    </RootProvider>
  );
}
