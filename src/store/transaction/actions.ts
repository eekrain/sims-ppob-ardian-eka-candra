import {
  TCreateTransaction,
  TTopupSchema,
  TTransactionHistoryQuery,
} from "@/lib/schema";
import TransactionService from "@/lib/services/transaction";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getBalance = createAsyncThunk(
  "transaction/getBalance",
  async (_, thunkAPI) =>
    TransactionService.getBalance().catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const topupBalance = createAsyncThunk(
  "transaction/topupBalance",
  async (values: TTopupSchema, thunkAPI) =>
    TransactionService.topupBalance(values).catch((error) => {
      return thunkAPI.rejectWithValue(error.message);
    }),
);

export const createTransaction = createAsyncThunk(
  "transaction/topupBalance",
  async (values: TCreateTransaction, thunkAPI) =>
    TransactionService.createTransaction(values).catch((error) => {
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
