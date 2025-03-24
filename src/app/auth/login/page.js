"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux";
import { loginSuccess } from "../../../redux/slices/authSlice";
import AuthForm from "../../components/AuthForm";

const LoginPage = () => {
  const router = useRouter();
  const dispatch = useDispatch();

  const handleLogin = async (data) => {
    const { email, password } = data;
    const userData = {
      email,
      password,
    };
    try {
      const response = await axios.post("/api/auth/login", userData);
      const responseData = response.data;

      if (!responseData.success) {
        throw new Error(responseData.message);
      }

      dispatch(
        loginSuccess({ user: responseData.user, token: responseData.token })
      );

      router.replace("/");
    } catch (err) {
      console.error("Login failed:", err.message);
      alert(err.message || "Something went wrong!");
    }
  };

  return (
      <AuthForm type="Login" onSubmit={handleLogin} />
  );
};
export default LoginPage;
