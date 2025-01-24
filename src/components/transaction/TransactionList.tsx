import { cn } from "@/lib/utils";

type Props = {};

const DATA = [
  {
    date: new Date("2025-01-16T05:29:12Z"),
    value: -10000,
    action: "TV Langganan",
  },
  {
    date: new Date("2025-01-23T21:27:07Z"),
    value: -70000,
    action: "Voucher Game",
  },
  { date: new Date("2025-01-02T13:56:23Z"), value: -60000, action: "PDAM" },
  {
    date: new Date("2025-01-05T06:11:33Z"),
    value: -80000,
    action: "Pulsa Prabayar",
  },
  {
    date: new Date("2025-01-24T06:38:15Z"),
    value: 40000,
    action: "Top Up Saldo",
  },
  {
    date: new Date("2025-01-10T15:40:21Z"),
    value: 100000,
    action: "Top Up Saldo",
  },
  {
    date: new Date("2025-01-18T18:22:42Z"),
    value: 50000,
    action: "Top Up Saldo",
  },
  {
    date: new Date("2025-01-01T08:10:01Z"),
    value: -30000,
    action: "Listrik Pascabayar",
  },
  {
    date: new Date("2025-01-20T18:04:20Z"),
    value: 90000,
    action: "Top Up Saldo",
  },
  {
    date: new Date("2025-01-03T13:36:45Z"),
    value: 20000,
    action: "Top Up Saldo",
  },
];

const TransactionList = ({}: Props) => {
  return (
    <div className="mt-12 grid gap-6">
      {DATA.map((item) => (
        <div className="rounded-lg border bg-white p-6">
          <div className="flex flex-col gap-4 md:flex-row md:justify-between">
            <p
              className={cn(
                "text-2xl font-semibold",
                item.value < 0 ? "text-red-600" : "text-emerald-600",
              )}
            >
              {item.value < 0 ? "-" : "+"} Rp.
              {new Intl.NumberFormat("id-ID", {
                style: "decimal",
                currency: "IDR",
                maximumFractionDigits: 0,
              }).format(item.value < 0 ? item.value * -1 : item.value)}
            </p>
            <p className="text-sm">{item.action}</p>
          </div>
          <p className="mt-4 text-right text-xs text-muted-foreground md:items-center md:text-left">
            {new Intl.DateTimeFormat("id-ID", {
              year: "numeric",
              month: "long",
              day: "2-digit",
            }).format(item.date)}{" "}
            {new Intl.DateTimeFormat("id-ID", {
              hour: "2-digit",
              minute: "2-digit",
            }).format(item.date)}{" "}
            WIB
          </p>
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
