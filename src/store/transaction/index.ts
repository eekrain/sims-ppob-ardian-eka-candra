import { createSlice } from "@reduxjs/toolkit";
import { TTransactionItem } from "@/lib/services/transaction";
import { getBalance, topupBalance } from "./actions";
import { toast } from "sonner";

type TransactionState = {
  balance: number;
  showBalance: boolean;
  history: TTransactionItem[];
  offset: 0;
  limit: 5;
  loading: boolean;
  error: any;
  success: boolean;
};

const initialState: TransactionState = {
  balance: 0,
  showBalance: false,
  history: [],
  offset: 0,
  limit: 5,
  loading: false,
  error: null,
  success: false,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    toggleBalanceVisibility: (state) => {
      state.showBalance = !state.showBalance;
    },
  },
  extraReducers(builder) {
    builder
      .addCase(topupBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(topupBalance.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.balance = payload.data?.balance!;
        state.success = true;
        toast.success(payload.message);
      })
      .addCase(topupBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
        toast.error(payload as string);
      })
      .addCase(getBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBalance.fulfilled, (state, { payload }) => {
        console.log("🚀 ~ .addCase ~ payload:", payload);
        state.loading = false;
        state.balance = payload.data?.balance!;
        state.success = true;
      })
      .addCase(getBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export const { toggleBalanceVisibility } = transactionSlice.actions;
const transactionReducer = transactionSlice.reducer;
export default transactionReducer;
export * from "./actions";
