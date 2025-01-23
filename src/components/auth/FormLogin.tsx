import { Input } from "../ui/input";
import { MdAlternateEmail } from "react-icons/md";
import { GrLock } from "react-icons/gr";
import { Button } from "../ui/button";
import { loginSchema, TLoginSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";

type Props = {
  onSubmit: (values: TLoginSchema) => void;
};

const FormLogin = ({ onSubmit }: Props) => {
  const form = useForm<TLoginSchema>({
    resolver: zodResolver(loginSchema),
  });

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
                  placeholderIcon={<MdAlternateEmail />}
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
                  placeholderIcon={<GrLock />}
                  placeholder="masukkan password anda"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button variant={"destructive"} className="mt-6">
          Registrasi
        </Button>

        <p className="text-sm text-center">
          belum punya akun? registrasi{" "}
          <a href="/auth/registration" className="text-red-600 font-semibold">
            di sini
          </a>
        </p>
      </form>
    </Form>
  );
};

export default FormLogin;
