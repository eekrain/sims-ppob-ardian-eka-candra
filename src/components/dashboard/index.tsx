import { Outlet } from "react-router";
import { DashboardHeader } from "./Header";
import { Toaster } from "sonner";

type Props = {};

export const DashboardLayout = ({}: Props) => {
  return (
    <>
      <Toaster />
      <DashboardHeader />
      <div className="container mt-12 pb-20">
        <Outlet />
      </div>
    </>
  );
};
