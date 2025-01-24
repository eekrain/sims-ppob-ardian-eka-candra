import ilustrasiLogin from "@/assets/Illustrasi Login.png";
import { useAppSelector } from "@/store";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router";

type Props = {};

const AuthLayout = ({}: Props) => {
  const navigate = useNavigate();
  const token = useAppSelector((state) => state.auth.accessToken);
  useEffect(() => {
    if (token) navigate("/");
  }, [token]);

  return (
    <div className="grid min-h-screen grid-cols-1 items-center md:grid-cols-[60%_40%] lg:grid-cols-2">
      <Outlet />
      <img
        src={ilustrasiLogin}
        alt="Ilustrasi Login"
        className="hidden h-screen w-full object-cover md:block"
      />
    </div>
  );
};

export default AuthLayout;
