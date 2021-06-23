import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { LoginForm } from "../components/LoginForm";
import { LoginFormData } from "../components/types";
import { GuestLayout } from "../layouts";
import { AuthenticationService } from "../services/AuthenticationService";

export const LoginPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const history = useHistory();

  const handleSubmit: SubmitHandler<LoginFormData> = async (data) => {
    try {
      const response = await AuthenticationService.login(data);
      history.push("/dashboard");
    } catch (error) {
      console.log(
        "🚀 ~ file: RegisterPage.tsx ~ line 14 ~ consthandleSubmit:SubmitHandler<RegisterFormData>= ~ error",
        error
      );
      setIsProcessing(false);
    }
  };

  if (AuthenticationService.isLogged()) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <GuestLayout>
      <LoginForm onSubmit={handleSubmit} isProcessing={isProcessing} />
    </GuestLayout>
  );
};
