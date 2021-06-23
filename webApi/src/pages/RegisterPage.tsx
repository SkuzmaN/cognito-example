import { useState } from "react";
import { SubmitHandler } from "react-hook-form";
import { Redirect, useHistory } from "react-router-dom";
import { ConfirmRegistrationForm } from "../components/ConfirmRegistrationForm";
import { RegisterForm } from "../components/RegisterForm";
import { ConfirmRegisterFormData, RegisterFormData } from "../components/types";
import { GuestLayout } from "../layouts";
import { AuthenticationService } from "../services/AuthenticationService";

export const RegisterPage = () => {
  const [isProcessing, setIsProcessing] = useState(false);
  const [currentStep, setCurrentStep] = useState<0 | 1>(0);
  const history = useHistory();
  
  const handleRegistrationSubmit: SubmitHandler<RegisterFormData> = async (data) => {
    console.log(data);
  };
  const handleVerificationSubmit: SubmitHandler<ConfirmRegisterFormData> = async (data) => {
    console.log(data);
  };
  if (AuthenticationService.isLogged()) {
    return <Redirect to="/dashboard" />;
  }
  return (
    <GuestLayout>
      {currentStep === 0 && <RegisterForm onSubmit={handleRegistrationSubmit} isProcessing={isProcessing} />}
      {currentStep === 1 && <ConfirmRegistrationForm onSubmit={handleVerificationSubmit} isProcessing={isProcessing} />}
    </GuestLayout>
  );
};
