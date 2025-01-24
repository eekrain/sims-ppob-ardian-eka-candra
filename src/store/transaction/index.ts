import { createSlice } from "@reduxjs/toolkit";
import { TTransactionItem } from "@/lib/services/transaction";

type TransactionState = {
  balance: number;
  history: TTransactionItem[];
  offset: 0;
  limit: 5;
  loading: boolean;
  error: any;
  success: boolean;
};

const initialState: TransactionState = {
  balance: 0,
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
  reducers: {},
});

const transactionReducer = transactionSlice.reducer;
export default transactionReducer;
export * from "./actions";
