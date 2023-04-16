import {ReactNode} from 'react';
import {HeaderProps} from '../../molecules/Header/types';

export type ScreenProps = {
  children: ReactNode;
  header: HeaderProps;
};
