"use client";

import axios from "axios";
import AuthForm from "../../components/AuthForm";

const RegisterPage = () => {
  const handleRegister = async (data) => {
    const { username, email, password } = data;
    const userData = {
      name: username,
      email,
      password,
    };
  
    try {
      const response = await axios.post('/api/auth/register', userData);
      console.log(response.data);
      alert("User registered successfully!");
    } catch (error) {
      console.error("Registration failed", error.response?.data);
      alert(error.response?.data?.message || "Registration failed");
    }
  };

  return <AuthForm type="Register" onSubmit={handleRegister} />;
};

export default RegisterPage;
