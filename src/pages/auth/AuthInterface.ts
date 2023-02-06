export interface RegisterInputs {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  status?: string | number;
}

export interface LoginInputs {
  email: string;
  password: string;
}

export interface RegisterProps {
  name: string;
  email: string;
  password: string;
  password_confirmation: string;
  setErrors: React.Dispatch<React.SetStateAction<RegisterInputs | undefined>>;
  setRegistered: React.Dispatch<React.SetStateAction<RegisterInputs | undefined>>;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  toast?: any;
}

export interface LoginProps {
  email: string;
  password: string;
  setErrors: React.Dispatch<React.SetStateAction<LoginInputs | undefined>>;
  setIsLoading?: React.Dispatch<React.SetStateAction<boolean>>;
  toast?: any;
}
