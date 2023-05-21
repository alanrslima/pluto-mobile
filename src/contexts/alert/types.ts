import {ReactNode} from 'react';
import {BottomSheetHandle} from '../../components/templates/BottomSheet/types';

export type AlertContextProps = React.RefObject<BottomSheetHandle>;

export type AlertProviderProps = {
  children: ReactNode;
};
