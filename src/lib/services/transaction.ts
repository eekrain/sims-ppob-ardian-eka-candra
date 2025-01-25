import {
  TPaymentSchema,
  TTopupSchema,
  TTransactionHistoryQuery,
} from "@/lib/schema";
import { myfetch, TFetchResult } from "./fetch-wrapper";

export type TBalance = {
  balance: number;
};

const getBalance = async () =>
  myfetch
    .GET("/balance")
    .errorMessage("Gagal fetching saldo")
    .execute<TFetchResult<TBalance>>();

const topupBalance = async (values: TTopupSchema) =>
  myfetch
    .POST("/topup", values)
    .errorMessage("Gagal fetching list banner")
    .execute<TFetchResult<TBalance>>();

export type TCreatePayment = {
  invoice_number: string;
  service_code: string;
  service_name: string;
  transaction_type: "PAYMENT";
  total_amount: 50000;
  created_on: string;
};

const createPayment = async (values: TPaymentSchema) =>
  myfetch
    .POST("/transaction", values)
    .errorMessage("Gagal melakukan payment")
    .execute<TFetchResult<TCreatePayment>>();

export type TTransactionItem = {
  invoice_number: string;
  transaction_type: "TOPUP" | "PAYMENT";
  description: string;
  total_amount: 10000;
  created_on: string;
};

const getTransactionHistory = async ({
  offset,
  limit,
}: TTransactionHistoryQuery) =>
  myfetch
    .GET(`/transaction/history?offset=${offset}&limit=${limit}`)
    .errorMessage("Gagal fetching histori transaksi")
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
  createPayment,
  getTransactionHistory,
};
export default TransactionService;
