import ilustrasiLogin from "@/assets/Illustrasi Login.png";
import { Outlet } from "react-router";
import { Toaster } from "sonner";

type Props = {};

const AuthLayout = ({}: Props) => {
  return (
    <>
      <Toaster />

      <div className="grid min-h-screen grid-cols-2 items-center">
        <Outlet />
        <img
          src={ilustrasiLogin}
          alt="Ilustrasi Login"
          className="hidden h-screen w-full object-cover md:block"
        />
      </div>
    </>
  );
};

export default AuthLayout;
