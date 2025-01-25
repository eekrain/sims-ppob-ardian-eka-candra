import { TService, TBanner } from "@/lib/services/information";
import { createSlice } from "@reduxjs/toolkit";
import { getAllBanners, getAllServices } from "./actions";
import { logoutAction } from "../auth";

type InformationState = {
  services: TService[];
  banners: TBanner[];
  loading: boolean;
  error: any;
  success: boolean;
};
const initialState: InformationState = {
  services: [],
  banners: [],
  loading: false,
  error: null,
  success: false,
};

const informationSlice = createSlice({
  name: "information",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(logoutAction, () => initialState)
      .addCase(getAllServices.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllServices.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.services = payload.data!;
      })
      .addCase(getAllServices.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getAllBanners.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getAllBanners.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.success = true;
        state.banners = payload.data!;
      })
      .addCase(getAllBanners.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

const informationReducer = informationSlice.reducer;
export default informationReducer;
export * from "./actions";
