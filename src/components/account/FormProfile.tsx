import dummyProfilePic from "@/assets/Profile Photo.png";
import { userProfileSchema, TUserProfileSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPen, FaRegUser } from "react-icons/fa6";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { MdAlternateEmail } from "react-icons/md";
import { Button } from "../ui/button";

type Props = {
  isEditing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormProfile = ({ isEditing, setEditing }: Props) => {
  const form = useForm<TUserProfileSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      email: "candra.ardianeka@gmail.com",
      first_name: "Ardian",
      last_name: "Eka Candra",
    },
  });

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <img
          src={dummyProfilePic}
          className="size-32"
          alt="User profile picture"
        />
        <button className="absolute bottom-0 right-0 translate-x-2 translate-y-1 rounded-full border bg-white p-3">
          <FaPen className="" />
          <span className="sr-only">Update profile picture</span>
        </button>
      </div>

      <p className="mt-6 text-3xl font-semibold">Ardian Eka Candra</p>

      <Form {...form}>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
          className="mt-6 w-full max-w-lg space-y-6"
        >
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    icon={<MdAlternateEmail />}
                    placeholder="masukkan email anda"
                    type="email"
                    disabled={!isEditing}
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
                <FormLabel>Nama Depan</FormLabel>
                <FormControl>
                  <Input
                    icon={<FaRegUser />}
                    placeholder="nama depan"
                    disabled={!isEditing}
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
                <FormLabel>Nama Belakang</FormLabel>
                <FormControl>
                  <Input
                    icon={<FaRegUser />}
                    placeholder="nama belakang"
                    disabled={!isEditing}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {isEditing ? (
            <Button
              type="submit"
              variant="destructive"
              size="lg"
              className="w-full"
            >
              Simpan
            </Button>
          ) : (
            <Button
              onClick={() => setEditing(true)}
              type="button"
              variant="outline"
              size="lg"
              className="w-full"
            >
              Edit profile
            </Button>
          )}

          {!isEditing && (
            <Button variant="destructive" size="lg" className="w-full">
              Logout
            </Button>
          )}
        </form>
      </Form>
    </div>
  );
};

export default FormProfile;
