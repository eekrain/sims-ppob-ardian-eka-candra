import { createSlice } from "@reduxjs/toolkit";
import { User } from "@/lib/services/auth";
import { toast } from "sonner";
import {
  getProfile,
  login,
  logoutAction,
  register,
  updateProfile,
  updateProfilePicture,
} from "./actions";

type AuthState = {
  loading: boolean;
  user: User | null;
  accessToken: string | null;
  error: any;
  success: boolean;
  profileFetched: boolean;
};

const initialState: AuthState = {
  loading: false,
  user: null,
  accessToken: localStorage.getItem("accessToken") || null,
  error: null,
  success: false,
  profileFetched: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(logoutAction, (state) => {
        localStorage.removeItem("accessToken"); // delete token from storage
        state.loading = false;
        state.user = null;
        state.accessToken = null;
        state.error = null;
      })
      .addCase(register.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(register.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        toast.success(payload.message);
      })
      .addCase(register.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload as string);
      })
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.profileFetched = false;
      })
      .addCase(login.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.accessToken = payload.data?.token!;
        state.success = true;
        toast.success(payload.message);
      })
      .addCase(login.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload as string);
      })
      .addCase(getProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data!;
        state.user.full_name = `${payload.data?.first_name} ${payload.data?.last_name}`;
        state.success = true;
        state.profileFetched = true;
      })
      .addCase(getProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        state.profileFetched = true;
      })
      .addCase(updateProfile.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfile.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data!;
        state.user.full_name = `${payload.data?.first_name} ${payload.data?.last_name}`;
        state.success = true;
        toast.success(payload.message);
      })
      .addCase(updateProfile.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload as string);
      })
      .addCase(updateProfilePicture.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(updateProfilePicture.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.user = payload.data!;
        state.user.full_name = `${payload.data?.first_name} ${payload.data?.last_name}`;
        state.success = true;
        toast.success(payload.message);
      })
      .addCase(updateProfilePicture.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload as string);
      });
  },
});

const authReducer = authSlice.reducer;
export default authReducer;
export * from "./actions";
