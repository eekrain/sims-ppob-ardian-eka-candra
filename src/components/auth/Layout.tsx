import ilustrasiLogin from "@/assets/Illustrasi Login.png";
import { Outlet } from "react-router";

type Props = {};

const AuthLayout = ({}: Props) => {
  return (
    <div className="min-h-screen grid grid-cols-2 items-center">
      <Outlet />
      <img
        src={ilustrasiLogin}
        alt="Ilustrasi Login"
        className="h-screen w-full object-cover hidden md:block"
      />
    </div>
  );
};

export default AuthLayout;
