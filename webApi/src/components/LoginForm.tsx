import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginFormData, RegisterFormSchema } from "./types";
import { FormInput } from "./FormInput";
import { Button } from "@material-ui/core";

interface LoginFormProps {
  onSubmit: SubmitHandler<LoginFormData>;
  isProcessing: boolean;
}

export const LoginForm = ({ onSubmit, isProcessing }: LoginFormProps) => {
  const methods = useForm<LoginFormData>({
    resolver: zodResolver(RegisterFormSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput name="email" label="email" type="email" size="medium" fullWidth variant="outlined" margin="normal" />
        <FormInput
          name="password"
          label="password"
          type="password"
          size="medium"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" disabled={isProcessing}>
          Login
        </Button>
      </form>
    </FormProvider>
  );
};
