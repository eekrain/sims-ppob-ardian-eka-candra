import InformationService from "@/lib/services/information";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getAllServices = createAsyncThunk(
  "information/services",
  async (_, thunkAPI) =>
    InformationService.getAllServices().catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const getAllBanners = createAsyncThunk(
  "information/banners",
  async (_, thunkAPI) =>
    InformationService.getAllBanner().catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);
