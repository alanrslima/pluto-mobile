import {Credentials} from '../../../types/Credentials';

export type SignInFormProps = {
  onSubmit: (data: Credentials) => Promise<void>;
};
