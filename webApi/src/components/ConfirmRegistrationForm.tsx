import { FormProvider, useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ConfirmRegisterFormData, ConfirmRegisterFormSchema } from "./types";
import { FormInput } from "./FormInput";
import { Button } from "@material-ui/core";

interface ConfirmRegistrationFormProps {
  onSubmit: SubmitHandler<ConfirmRegisterFormData>;
  isProcessing: boolean;
}

export const ConfirmRegistrationForm = ({ onSubmit, isProcessing }: ConfirmRegistrationFormProps) => {
  const methods = useForm<ConfirmRegisterFormData>({
    resolver: zodResolver(ConfirmRegisterFormSchema),
    defaultValues: {
      verificationCode: "",
    },
  });

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <FormInput
          name="verificationCode"
          label="Verification Code"
          size="medium"
          fullWidth
          variant="outlined"
          margin="normal"
        />
        <Button variant="contained" color="primary" type="submit" disabled={isProcessing}>
          Verify
        </Button>
      </form>
    </FormProvider>
  );
};
