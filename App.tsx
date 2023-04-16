import React from 'react';
import {Contexts} from './src/contexts';
import Routes from './src/routes';
import {FontsLoader} from './src/components/templates/FontsLoader';

export default function App() {
  return (
    <FontsLoader>
      <Contexts>
        <Routes />
      </Contexts>
    </FontsLoader>
  );
}
