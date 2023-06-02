import {ReactNode} from 'react';
import {HeaderProps} from '../../molecules/Header/types';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../types/RootStack';

export type ScreenProps = {
  children: ReactNode;
  header?: Omit<HeaderProps, 'leftButtons'>;
  navigation?: NativeStackNavigationProp<
    RootStackParamList,
    keyof RootStackParamList,
    any
  >;
  useBottomSafeArea?: boolean;
  isLoading?: boolean;
  error?: any;
};
