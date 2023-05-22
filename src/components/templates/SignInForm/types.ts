export type SignInFormDataProps = {email: string; password: string};

export type SignInFormProps = {
  onSubmit: (data: SignInFormDataProps) => Promise<void>;
};
