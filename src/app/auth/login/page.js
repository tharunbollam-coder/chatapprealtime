"use client";

import React from "react";
import AuthForm from "../../components/AuthForm";

const LoginPage = () => {
  const handleLogin = (data) => {
    console.log("Login Data:", data);
  };

  return <AuthForm type="Login" onSubmit={handleLogin} />;
};

export default LoginPage;
