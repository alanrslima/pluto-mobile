export type SignInFormProps = {
  onSubmit: (data: {email: string; password: string}) => Promise<void>;
};
