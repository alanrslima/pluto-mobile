import {ReactNode} from 'react';

export type FormProps = {
  children: ReactNode;
  isDisabled?: boolean;
  onSubmit: () => Promise<void>;
  onSubmitTitle?: string;
};
