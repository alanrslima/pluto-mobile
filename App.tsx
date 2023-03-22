import React from 'react';
import {Contexts} from './src/contexts';
import Routes from './src/routes';

export default function App() {
  return (
    <Contexts>
      <Routes />
    </Contexts>
  );
}
