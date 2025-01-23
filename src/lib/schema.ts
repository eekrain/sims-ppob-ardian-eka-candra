import { z } from "zod";

export type TBaseFetchResult<T> = {
  status: number;
  message: string;
  data: T | null;
};

export const registrationScema = z
  .object({
    email: z.string().email({ message: "Email harus diisi" }),
    first_name: z.string().min(1, { message: "Nama depan harus diisi" }),
    last_name: z.string().min(1, { message: "Nama belakang harus diisi" }),
    password: z.string().min(8, { message: "Password minimal 8 karakter" }),
    password_confirm: z
      .string()
      .min(8, { message: "Password minimal 8 karakter" }),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Password konfirmasi belum sama persis",
    path: ["password_confirm"],
  })
  .transform(({ password_confirm, ...rest }) => rest);
export type TRegistrationSchema = z.infer<typeof registrationScema>;

export const loginSchema = z.object({
  email: z.string().email({ message: "Email harus diisi" }),
  password: z.string().min(8, { message: "Password minimal 8 karakter" }),
});
export type TLoginSchema = z.infer<typeof loginSchema>;
