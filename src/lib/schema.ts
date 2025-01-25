import { z } from "zod";

const baseAccountSchema = z.object({
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
});

export const registrationScema = baseAccountSchema.refine(
  (data) => data.password === data.password_confirm,
  {
    message: "Password konfirmasi belum sama persis",
    path: ["password_confirm"],
  },
);
export type TRegistrationSchema = z.infer<typeof registrationScema>;

export const loginSchema = baseAccountSchema.pick({
  email: true,
  password: true,
});
export type TLoginSchema = z.infer<typeof loginSchema>;

export const userProfileSchema = baseAccountSchema.pick({
  email: true,
  first_name: true,
  last_name: true,
});
export type TUserProfileSchema = z.infer<typeof userProfileSchema>;

export const topupSchema = z.object({
  top_up_amount: z.coerce.number().min(10000, "Minimal topup Rp 10.000"),
});
export type TTopupSchema = z.infer<typeof topupSchema>;

export const paymentSchema = z.object({
  service_code: z.string().min(1),
});
export type TPaymentSchema = z.infer<typeof paymentSchema>;

export type TTransactionHistoryQuery = { offset: number; limit: number };
