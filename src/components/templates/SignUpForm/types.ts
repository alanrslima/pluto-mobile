export type SignUpFormDataProps = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export type SignUpFormProps = {
  onSubmit: (data: SignUpFormDataProps) => Promise<void>;
};
