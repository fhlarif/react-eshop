import { useNavigate } from "react-router-dom";
import { axios } from "../laravel/axios";
import { LoginProps, RegisterProps } from "../pages/auth/AuthInterface";

const useAuth = () => {
  const csrf = () => axios.get("/sanctum/csrf-cookie");

  const navigate = useNavigate();

  const login = async ({ toast, setErrors, setIsLoading, ...props }: LoginProps) => {
    await csrf();
    setErrors(undefined);
    setIsLoading && setIsLoading(true);
    axios
      .post("/login", props)
      .then((res) => {
        setIsLoading && setIsLoading(false);
        console.log(res.data?.Login);
      })
      .catch((error) => {
        if (error.response.status !== 422) {
          setIsLoading && setIsLoading(false);

          toast.error(error.response.status + ": " + error.response.statusText + ": " + error.response.data.message);
        }
        if (error.response.status === 404) {
          setIsLoading && setIsLoading(false);
          navigate("/login", { state: { status: error.response.status } });
        }
        /* if error on inputs only */
        setIsLoading && setIsLoading(false);

        setErrors(error.response.data.errors);
      });
  };

  const register = async ({ toast, setRegistered, setErrors, setIsLoading, ...props }: RegisterProps) => {
    await csrf();
    setErrors(undefined);
    setRegistered(undefined);
    setIsLoading && setIsLoading(true);
    axios
      .post("/register", props)
      .then((e) => {
        console.log(e.data);
        toast.success(e.data?.status);
        setRegistered(e.data);
        setIsLoading && setIsLoading(false);
        if (e.data?.status === "success") {
          navigate("/login", { state: { status: e.data?.status } });
        }
        if (e.data?.Login === "Successful") {
          toast.success("Already Registered!. Please login to verify");

          navigate("/login", { state: { status: e.data?.status } });
        }
      })
      .catch((error) => {
        if (error.response.status !== 422) {
          setRegistered(error.response);
          setIsLoading && setIsLoading(false);

          toast.error(error.response.status + ": " + error.response.statusText + ": " + error.response.data.message);
        }
        if (error.response.status === 404) {
          setIsLoading && setIsLoading(false);
          navigate("/login", { state: { status: error.response.status } });
        }
        /* if error on inputs only */
        setIsLoading && setIsLoading(false);

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
