import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import {
  TLoginSchema,
  TRegistrationSchema,
  TUserProfileSchema,
} from "@/lib/schema";
import { AuthService } from "@/lib/services";

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

export const logoutAction = createAction("/auth/logouut");
