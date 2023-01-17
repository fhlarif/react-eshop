import { useNavigate } from "react-router-dom";
import { axios } from "../laravel/axios";
import { RegisterProps } from "../pages/auth/AuthInterface";

const useAuth = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const navigate = useNavigate();

  const login = async () => {
    await csrf();
    axios.get("/api/test").then((res) => res.data);
  };

  const register = async ({ toast, setRegistered, setErrors, ...props }: RegisterProps) => {
    await csrf();
    setErrors(undefined);
    setRegistered(undefined);
    axios
      .post("/register", props)
      .then((e) => {
        toast.success(e.data?.status);
        setRegistered(e.data);
        if (e.data?.status === "success") {
          navigate("/login", { state: { status: e.data?.status } });
        }
      })
      .catch((error) => {
        if (error.response.status !== 422) {
          setRegistered(error.response);
          toast.error(error.response.status + error.response.statusText);
        }
        if (error.response.status === 404) {
          navigate("/login", { state: { status: error.response.status } });
        }
        /* if error on inputs only */
        setErrors(error.response.data.errors);
      });
  };

  async function getUser() {
    await csrf();
    axios.get("/api/user").then((res) => console.log(res.data));
  }

  return { login, register, getUser };
};

export default useAuth;
