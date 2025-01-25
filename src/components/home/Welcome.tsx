import { useAppSelector } from "@/store";
import MyAvatar from "../MyAvatar";
type Props = {};

export const Welcome = ({}: Props) => {
  const user = useAppSelector((state) => state.auth.user);
  return (
    <div>
      <MyAvatar
        src={user?.profile_image!}
        userName={user?.full_name!}
        className="size-20"
      />

      <p className="mt-4 text-lg">
        Selamat Datang, <br />
        <span className="text-2xl font-semibold">{user?.full_name!}</span>
      </p>
    </div>
  );
};
