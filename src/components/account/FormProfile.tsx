import { userProfileSchema, TUserProfileSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { FaPen, FaRegUser } from "react-icons/fa6";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { MdAlternateEmail } from "react-icons/md";
import { useAppDispatch, useAppSelector } from "@/store";
import { logout, updateProfile, updateProfilePicture } from "@/store/auth";
import { useEffect } from "react";
import MyAvatar from "@/components/MyAvatar";
import { toast } from "sonner";

type Props = {
  isEditing: boolean;
  setEditing: React.Dispatch<React.SetStateAction<boolean>>;
};

const FormProfile = ({ isEditing, setEditing }: Props) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const form = useForm<TUserProfileSchema>({
    resolver: zodResolver(userProfileSchema),
    defaultValues: {
      email: "",
      first_name: "",
      last_name: "",
    },
  });

  useEffect(() => {
    if (user) {
      form.reset({
        email: user.email,
        first_name: user.first_name,
        last_name: user.last_name,
      });
      setEditing(false);
    }
  }, [user]);

  const onSubmit = (values: TUserProfileSchema) =>
    dispatch(updateProfile(values));

  const onInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.currentTarget.files;
    if (files && files[0].size <= 100 * 1000) {
      const data = new FormData();
      data.append("file", files[0]);
      dispatch(updateProfilePicture(data));
    } else toast.error("Maksimal ukuran foto 100 KB");
  };

  const onLogout = () => dispatch(logout());

  return (
    <div className="flex flex-col items-center">
      <div className="relative">
        <MyAvatar
          src={user?.profile_image!}
          userName={user?.full_name!}
          className="size-28"
        />

        <div className="absolute bottom-0 right-0 flex size-8 items-center justify-center overflow-clip rounded-full border-2 bg-white">
          <input
            type="file"
            onChange={onInputChange}
            accept="image/png, image/jpeg"
            className="absolute cursor-pointer opacity-0"
          />
          <FaPen />
        </div>
      </div>

      <p className="mt-6 text-3xl font-semibold">
        {user?.first_name} {user?.last_name}
      </p>

      <div className="mt-6 w-full max-w-lg space-y-6">
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="w-full space-y-6"
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
                      disabled
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

            {isEditing && (
              <Button
                type="submit"
                variant="destructive"
                size="lg"
                className="w-full"
              >
                Simpan
              </Button>
            )}
          </form>
        </Form>

        {!isEditing && (
          <>
            <Button
              onClick={() => setEditing(true)}
              type="button"
              variant="outline"
              size="lg"
              className="w-full"
            >
              Edit profile
            </Button>

            <Button
              onClick={onLogout}
              variant="destructive"
              size="lg"
              className="w-full"
            >
              Logout
            </Button>
          </>
        )}
      </div>
    </div>
  );
};

export default FormProfile;
