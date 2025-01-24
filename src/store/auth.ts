import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import {
  TLoginSchema,
  TRegistrationSchema,
  TUserProfileSchema,
} from "@/lib/schema";
import AuthService, { User } from "@/lib/services/auth";
import { toast } from "sonner";

export const register = createAsyncThunk(
  "auth/register",
  async (values: TRegistrationSchema, thunkAPI) =>
    AuthService.register(values).catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const login = createAsyncThunk(
  "auth/login",
  async (values: TLoginSchema, thunkAPI) =>
    AuthService.login(values).catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const getProfile = createAsyncThunk(
  "auth/getProfile",
  async (_, thunkAPI) =>
    AuthService.getProfile().catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const updateProfile = createAsyncThunk(
  "auth/updateProfile",
  async (values: TUserProfileSchema, thunkAPI) =>
    AuthService.updateProfile(values).catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const updateProfilePicture = createAsyncThunk(
  "auth/updateProfilePicture",
  async (data: FormData, thunkAPI) =>
    AuthService.updateProfilePicture(data).catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

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
  reducers: {
    logout: (state) => {
      localStorage.removeItem("accessToken"); // delete token from storage
      state.loading = false;
      state.user = null;
      state.accessToken = null;
      state.error = null;
    },
  },
  extraReducers(builder) {
    builder
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

export const { logout } = authSlice.actions;
export default authSlice.reducer;
