import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TTransactionItem } from "@/lib/services/transaction";
import {
  createPayment,
  getBalance,
  getTransactionHistory,
  topupBalance,
} from "./actions";

type TransactionState = {
  balance: number;
  showBalance: boolean;
  history: TTransactionItem[];
  totalCount: number; // Total number of transactions (from server response)
  offset: number;
  limit: number;
  loading: boolean;
  error: any;
  success: boolean;
  hasMore: boolean;
};

const initialState: TransactionState = {
  balance: 0,
  showBalance: false,
  history: [],
  totalCount: 0,
  offset: 0,
  limit: 5,
  loading: false,
  error: null,
  success: false,
  hasMore: true,
};

const transactionSlice = createSlice({
  name: "transaction",
  initialState,
  reducers: {
    toggleBalanceVisibility: (state) => {
      state.showBalance = !state.showBalance;
    },
    setTransactionLimitPerPage: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    resetTransactionHistory: (state) => {
      state.history = [];
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
      })
      .addCase(topupBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getBalance.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBalance.fulfilled, (state, { payload }) => {
        state.loading = false;
        state.balance = payload.data?.balance!;
        state.success = true;
      })
      .addCase(getBalance.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(getTransactionHistory.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getTransactionHistory.fulfilled, (state, { payload }) => {
        state.loading = false;

        state.history.push(...payload.data?.records!);
        if (state.totalCount === null)
          state.totalCount = payload.data?.records.length!;
        else state.totalCount += payload.data?.records.length!;
        state.offset = +payload.data?.offset!;
        state.limit = +payload.data?.limit!;

        if (payload.data?.records.length! < state.limit) state.hasMore = false;

        state.success = true;
      })
      .addCase(getTransactionHistory.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      })
      .addCase(createPayment.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createPayment.fulfilled, (state, { payload }) => {
        state.loading = false;
        const res = payload.data!;
        state.balance -= res.total_amount;
        state.success = true;
      })
      .addCase(createPayment.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});
export const {
  toggleBalanceVisibility,
  setTransactionLimitPerPage,
  resetTransactionHistory,
} = transactionSlice.actions;
const transactionReducer = transactionSlice.reducer;
export default transactionReducer;
export * from "./actions";
