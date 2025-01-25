import { MdAlternateEmail } from "react-icons/md";
import { GrLock } from "react-icons/gr";
import { loginSchema, TLoginSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { useAppDispatch } from "@/store";
import { login } from "@/store/auth";
import { NavLink } from "react-router";

type Props = {};

export const FormLogin = ({}: Props) => {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const dispatch = useAppDispatch();
  const onSubmit = (values: TLoginSchema) => dispatch(login(values));

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  icon={<MdAlternateEmail />}
                  placeholder="masukkan email anda"
                  type="email"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  icon={<GrLock />}
                  placeholder="masukkan password anda"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit" variant={"destructive"} className="mt-6">
          Masuk
        </Button>

        <p className="text-center text-sm">
          belum punya akun? registrasi{" "}
          <NavLink
            to="/auth/registration"
            className="font-semibold text-red-600"
          >
            di sini
          </NavLink>
        </p>
      </form>
    </Form>
  );
};
