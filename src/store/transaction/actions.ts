import {
  TPaymentSchema,
  TTopupSchema,
  TTransactionHistoryQuery,
} from "@/lib/schema";
import { TransactionService } from "@/lib/services";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { resetTransactionHistory } from ".";

export const getBalance = createAsyncThunk(
  "transaction/getBalance",
  async (_, thunkAPI) =>
    TransactionService.getBalance().catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const getTransactionHistory = createAsyncThunk(
  "transaction/getTransactionHistory",
  async (query: TTransactionHistoryQuery, thunkAPI) =>
    TransactionService.getTransactionHistory(query).catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const topupBalance = createAsyncThunk(
  "transaction/topupBalance",
  async (values: TTopupSchema, thunkAPI) =>
    TransactionService.topupBalance(values)
      .then((res) => {
        thunkAPI.dispatch(resetTransactionHistory());
        thunkAPI.dispatch(getTransactionHistory({ limit: 5, offset: 0 }));
        return res;
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.message);
      }),
);

export const createPayment = createAsyncThunk(
  "transaction/createPayment",
  async (values: TPaymentSchema, thunkAPI) =>
    TransactionService.createPayment(values)
      .then((res) => {
        thunkAPI.dispatch(resetTransactionHistory());
        thunkAPI.dispatch(getTransactionHistory({ limit: 5, offset: 0 }));
        return res;
      })
      .catch((error) => {
        return thunkAPI.rejectWithValue(error.message);
      }),
);
