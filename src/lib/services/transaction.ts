import {
  TCreateTransaction,
  TTopupSchema,
  TTransactionHistoryQuery,
} from "../schema";
import { MyFetch, TFetchResult } from "./fetch-wrapper";

const myfetch = new MyFetch(import.meta.env.VITE_BASE_API_URL);

export type TBalance = {
  balance: number;
};

const getBalance = async () =>
  myfetch
    .url("/banner")
    .method("GET")
    .bearer(localStorage.getItem("accessToken")!)
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TBalance>>();

const topupBalance = async (values: TTopupSchema) =>
  myfetch
    .url("/topup")
    .method("POST")
    .bearer(localStorage.getItem("accessToken")!)
    .body(values)
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TBalance>>();

export type TTransactionItem = {
  invoice_number: string;
  service_code: string;
  service_name: string;
  transaction_type: string;
  total_amount: number;
  created_on: string;
};

const createTransaction = async (values: TCreateTransaction) =>
  myfetch
    .url("/transaction")
    .method("POST")
    .bearer(localStorage.getItem("accessToken")!)
    .body(values)
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TTransactionItem>>();

const getTransactionHistory = async ({
  limit = 0,
  offset = 5,
}: TTransactionHistoryQuery) =>
  myfetch
    .url(`/transaction/history?offset=${offset}&limit=${limit}`)
    .method("POST")
    .bearer(localStorage.getItem("accessToken")!)
    .errorMessage("Gagal fetching list banner")
    .execute<
      TFetchResult<{
        offset: number;
        limit: number;
        records: TTransactionItem[];
      }>
    >();

const TransactionService = {
  getBalance,
  topupBalance,
  createTransaction,
  getTransactionHistory,
};
export default TransactionService;
