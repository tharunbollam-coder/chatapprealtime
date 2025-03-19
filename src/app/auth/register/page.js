"use client";

import React from "react";
import AuthForm from "../../components/AuthForm";

const RegisterPage = () => {
  const handleRegister = (data) => {
    console.log("Register Data:", data);
  };

  return <AuthForm type="Register" onSubmit={handleRegister} />;
};

export default RegisterPage;
