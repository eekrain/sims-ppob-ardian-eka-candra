import { Input } from "../ui/input";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { GrLock } from "react-icons/gr";
import { Button } from "../ui/button";
import { registrationScema, TRegistrationSchema } from "@/lib/schema";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { useAppDispatch } from "@/store";
import { register } from "@/store/auth";
import { useNavigate } from "react-router";

type Props = {};

export const FormRegistrasi = ({}: Props) => {
  const navigate = useNavigate();
  const form = useForm<TRegistrationSchema>({
    resolver: zodResolver(registrationScema),
  });

  const dispatch = useAppDispatch();
  const onSubmit = (values: TRegistrationSchema) =>
    dispatch(register(values)).then(() => navigate("/auth"));

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
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  icon={<FaRegUser />}
                  placeholder="nama depan"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="last_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  icon={<FaRegUser />}
                  placeholder="nama belakang"
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
                  placeholder="buat password"
                  type="password"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="password_confirm"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  icon={<GrLock />}
                  placeholder="konfirmasi password"
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

        <p className="text-center text-sm">
          sudah punya akun? login{" "}
          <a href="/auth" className="font-semibold text-red-600">
            di sini
          </a>
        </p>
      </form>
    </Form>
  );
};
