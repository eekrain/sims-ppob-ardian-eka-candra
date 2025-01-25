import { paymentSchema, TPaymentSchema } from "@/lib/schema";
import { TService } from "@/lib/services/information";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { NumberInput } from "@/components/ui/number-input";
import { MdOutlineMoney } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store";
import { createPayment } from "@/store/transaction";
import { useNavigate } from "react-router";
import { MyDialogProps, useDialog } from "@/store/app";

type Props = {
  service: TService;
};

export const FormPembayaran = ({ service }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { setDialog } = useDialog();
  const form = useForm<TPaymentSchema>({
    resolver: zodResolver(paymentSchema),
    defaultValues: { service_code: service.service_code },
  });

  const { balance, loading } = useAppSelector((state) => state.transaction);

  const onSubmit = (values: TPaymentSchema) => {
    const formatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(service.service_tariff);

    const onConfirm = () => {
      const notif = (success: boolean): MyDialogProps => ({
        type: success ? "success" : "error",
        handleClose: () => {
          setDialog(null);
          navigate("/");
        },
        content: [
          { normal: `Pembayaran ${service.service_name} sebesar` },
          { big: formatted },
          { normal: success ? "berhasil!" : "gagal!" },
        ],
      });

      dispatch(createPayment(values)).then((res) => {
        if (res.type.includes("reject")) setDialog(notif(false));
        else setDialog(notif(true));
      });
    };

    setDialog({
      type: "topup",
      confirmation: {
        warning: "Ya, lanjutkan Bayar",
        onConfirm,
      },
      handleClose: () => setDialog(null),
      content: [
        { normal: `Beli ${service.service_name} senilai` },
        { big: `${formatted} ?` },
      ],
    });
  };

  return (
    <div className="mt-12">
      <p className="text-lg">PemBayaran</p>
      <div className="mt-4 flex items-center gap-4">
        <img
          src={service.service_icon}
          alt={`Logo ${service.service_name}`}
          className="size-8"
        />
        <h3 className="text-2xl font-semibold">{service.service_name}</h3>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-12 grid grid-cols-1 gap-6"
        >
          <FormField
            control={form.control}
            name="service_code"
            render={({ field }) => <input type="hidden" {...field} />}
          />
          <NumberInput
            icon={<MdOutlineMoney />}
            placeholder="masukkan nominal topup"
            className="w-full"
            allowNegative={false}
            isAllowed={({ floatValue }) => {
              return floatValue ? floatValue <= 1000000 : true;
            }}
            thousandSeparator=","
            defaultValue={0}
            value={service.service_tariff}
            disabled
          />

          <Button
            type="submit"
            size="lg"
            variant="destructive"
            disabled={service.service_tariff > balance || loading}
          >
            Bayar
          </Button>
        </form>
      </Form>
    </div>
  );
};
