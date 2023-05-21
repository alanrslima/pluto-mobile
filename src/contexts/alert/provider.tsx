import React, {useRef} from 'react';
import {AlertContext} from './context';

import {AlertProviderProps} from './types';
import {BottomSheet} from '../../components/templates/BottomSheet';
import {BottomSheetHandle} from '../../components/templates/BottomSheet/types';

export const AlertProvider: React.FC<AlertProviderProps> = ({children}) => {
  const bottomSheetRef = useRef<BottomSheetHandle>(null);

  return (
    <AlertContext.Provider value={bottomSheetRef}>
      {children}
      <BottomSheet ref={bottomSheetRef} />
    </AlertContext.Provider>
  );
};
