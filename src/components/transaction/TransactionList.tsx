import { cn } from "@/lib/utils";
import { useAppDispatch, useAppSelector } from "@/store";
import { getTransactionHistory } from "@/store/transaction";
import { useEffect, useRef } from "react";
import { Button } from "../ui/button";

type Props = {};
const TransactionList = ({}: Props) => {
  const dispatch = useAppDispatch();

  const { history, limit, offset, hasMore, totalCount } = useAppSelector(
    (state) => state.transaction,
  );

  const hasFetched = useRef(false);
  useEffect(() => {
    if (totalCount >= limit + offset) return;
    if (!hasFetched.current) {
      dispatch(getTransactionHistory({ limit, offset }));
      hasFetched.current = true;
    }
  }, [dispatch, limit, offset, totalCount]); // Only fetch when limit or offset changes

  const loadMore = () => {
    dispatch(getTransactionHistory({ limit, offset: +offset + +limit }));
  };

  return (
    <div className="mt-12 grid gap-6">
      {history.map((item) => (
        <div
          key={item.invoice_number}
          className="rounded-lg border bg-white p-6"
        >
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <p
              className={cn(
                "text-2xl font-semibold",
                item.transaction_type === "TOPUP"
                  ? "text-emerald-600"
                  : "text-red-600",
              )}
            >
              {item.transaction_type === "TOPUP" ? "+" : "-"} Rp.
              {new Intl.NumberFormat("id-ID", {
                style: "decimal",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(item.total_amount)}
            </p>
            <p className="text-sm">{item.description}</p>
          </div>
          <p className="mt-4 text-right text-xs text-muted-foreground md:items-center md:text-left">
            {new Intl.DateTimeFormat("id-ID", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(new Date(item.created_on))}{" "}
            {new Intl.DateTimeFormat("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(new Date(item.created_on))}{" "}
            WIB
          </p>
        </div>
      ))}
      {hasMore && (
        <div className="flex justify-center">
          <Button onClick={loadMore} type="button" variant="ghost" size="lg">
            Show More
          </Button>
        </div>
      )}
    </div>
  );
};

export default TransactionList;
