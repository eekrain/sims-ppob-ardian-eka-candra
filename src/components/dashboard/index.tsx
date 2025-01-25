import { Outlet, useNavigate } from "react-router";
import { DashboardHeader } from "./Header";
import { useAppDispatch, useAppSelector } from "@/store";
import { useEffect, useRef } from "react";
import { getProfile, logout } from "@/store/auth";
import { MyDialog } from "../common";

export const DashboardLayout = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const loading = useAppSelector((state) => state.auth.loading);
  const hasFetched = useRef(false);
  useEffect(() => {
    if (!hasFetched.current && !loading) {
      dispatch(getProfile());
      hasFetched.current = true;
    }
  }, [dispatch, loading]);

  const user = useAppSelector((state) => state.auth.user);
  const profileFetched = useAppSelector((state) => state.auth.profileFetched);

  useEffect(() => {
    if (profileFetched && !user) {
      dispatch(logout());
      navigate("/auth");
    }
  }, [dispatch, profileFetched, user]);

  if (!user) return null;

  return (
    <>
      <MyDialog />
      <DashboardHeader />
      <div className="container mt-12 pb-20">
        <Outlet />
      </div>
    </>
  );
};
