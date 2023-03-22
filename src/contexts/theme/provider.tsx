import React, {useState} from 'react';
import {ThemeContext} from './context';
import {defaultTheme} from '../../styles';
import {ThemeProviderProps} from './types';

export const ThemeProvider: React.FC<ThemeProviderProps> = ({children}) => {
  const [theme, _] = useState(defaultTheme);

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
