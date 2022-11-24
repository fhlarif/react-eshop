import { axios } from "../laravel/axios";

const useAuth = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const login = async () => {
    await csrf();

    const test = axios.get("/api/test").then((res) => res.data);

    console.log(await test);
  };

  return { login };
};

export default useAuth;
