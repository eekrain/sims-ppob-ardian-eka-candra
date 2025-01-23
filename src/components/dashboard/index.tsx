import { Outlet } from "react-router";
import { DashboardHeader } from "./Header";

type Props = {};

export const DashboardLayout = ({}: Props) => {
  return (
    <>
      <DashboardHeader />
      <div className="container mt-12 pb-20">
        <Outlet />
      </div>
    </>
  );
};
