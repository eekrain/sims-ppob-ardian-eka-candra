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

type Props = {
  onSubmit: (values: TRegistrationSchema) => void;
};

const FormRegistrasi = ({ onSubmit }: Props) => {
  const form = useForm<TRegistrationSchema>({
    resolver: zodResolver(registrationScema),
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
          name="first_name"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  placeholderIcon={<FaRegUser />}
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
                  placeholderIcon={<FaRegUser />}
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
                  placeholderIcon={<GrLock />}
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
                  placeholderIcon={<GrLock />}
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

        <p className="text-sm text-center">
          sudah punya akun? login{" "}
          <a href="/auth" className="text-red-600 font-semibold">
            di sini
          </a>
        </p>
      </form>
    </Form>
  );
};

export default FormRegistrasi;
