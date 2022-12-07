import { ReactNode } from "react";

type inputProps = {
  children?: ReactNode;
  message: string | undefined;
};
const InputError = ({ message, children }: inputProps) => {
  return <span className="text-red-400 my-2">{message}</span>;
};

export default InputError;
