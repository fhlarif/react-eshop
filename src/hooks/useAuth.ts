import { axios } from "../laravel/axios";
import { ReactNode } from "react";
import { RegisterProps } from "../pages/auth/AuthInterface";

const useAuth = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const login = async () => {
    await csrf();
    axios.get("/api/test").then((res) => res.data);
  };

  const register = async ({ setErrors, ...props }: RegisterProps) => {
    await csrf();

    setErrors(undefined);
    axios
      .post("/register", props)
      .then((e) => console.log(e))
      .catch((error) => {
        if (error.response.status !== 422) throw error.response;

        setErrors(error.response.data.errors);
      });
  };

  return { login, register };
};

export default useAuth;
