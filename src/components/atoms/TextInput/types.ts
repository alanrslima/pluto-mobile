import {UseFormRegisterReturn} from 'react-hook-form';

export type TextInputProps = {
  id?: string;
  name: string;
  controlled?: boolean;
  list?: string;
  type?: 'email' | 'text' | 'number' | 'date' | 'datetime-local';
  placeholder?: string;
  disabled?: boolean;
  isInvalid?: boolean;
  min?: string;
};

export type InputProps = Omit<TextInputProps, 'controlled'> & {
  register?: UseFormRegisterReturn;
};
