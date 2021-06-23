import * as z from "zod";

export const RegisterFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type RegisterFormData = z.TypeOf<typeof RegisterFormSchema>;

export const ConfirmRegisterFormSchema = z.object({
  verificationCode: z.string(),
});

export type ConfirmRegisterFormData = z.TypeOf<typeof ConfirmRegisterFormSchema>;

export const LoginFormSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export type LoginFormData = z.TypeOf<typeof LoginFormSchema>;
