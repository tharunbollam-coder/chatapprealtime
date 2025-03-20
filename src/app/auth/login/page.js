"use client";

import axios from "axios";
import { useRouter } from "next/navigation";
import AuthForm from "../../components/AuthForm";

const LoginPage = () => {
  const router = useRouter();
  
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

      localStorage.setItem("token", responseData.token);

      router.push("/");
    } catch (err) {
      console.error("Something went wrong!", err);
      alert(err.message || "Something went wrong!");
    }
  };

  return <AuthForm type="Login" onSubmit={handleLogin} />;
};

export default LoginPage;