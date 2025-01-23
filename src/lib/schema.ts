import { z } from "zod";

export type TBaseFetchResult<T> = {
  status: number;
  message: string;
  data: T | null;
};

export const registrationScema = z
  .object({
    email: z
      .string({ message: "Email harus diisi" })
      .email({ message: "Email harus diisi" }),
    first_name: z
      .string({ message: "Nama depan harus diisi" })
      .min(1, { message: "Nama depan harus diisi" }),
    last_name: z
      .string({ message: "Nama belakang harus diisi" })
      .min(1, { message: "Nama belakang harus diisi" }),
    password: z
      .string({ message: "Password minimal 8 karakter" })
      .min(8, { message: "Password minimal 8 karakter" }),
    password_confirm: z
      .string({ message: "Password minimal 8 karakter" })
      .min(8, { message: "Password minimal 8 karakter" }),
  })
  .refine((data) => data.password === data.password_confirm, {
    message: "Password konfirmasi belum sama persis",
    path: ["password_confirm"],
  });
export type TRegistrationSchema = z.infer<typeof registrationScema>;

export const loginSchema = z.object({
  email: z
    .string({ message: "Email harus diisi" })
    .email({ message: "Email harus diisi" }),
  password: z
    .string({ message: "Password minimal 8 karakter" })
    .min(8, { message: "Password minimal 8 karakter" }),
});
export type TLoginSchema = z.infer<typeof loginSchema>;
