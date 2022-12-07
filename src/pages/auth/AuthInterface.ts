export interface RegisterInputs {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  setErrors: React.Dispatch<React.SetStateAction<RegisterInputs | undefined>>;
}
