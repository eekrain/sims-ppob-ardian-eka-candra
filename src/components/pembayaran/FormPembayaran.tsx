import { paymentSchema, TPaymentSchema } from "@/lib/schema";
import { TService } from "@/lib/services/information";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormField } from "@/components/ui/form";
import { NumberInput } from "@/components/ui/number-input";
import { MdOutlineMoney } from "react-icons/md";
import { Button } from "@/components/ui/button";
import { useAppDispatch, useAppSelector } from "@/store";
import { useState } from "react";
import { MyDialog, MyDialogProps } from "@/components/MyDialog";
import { createPayment } from "@/store/transaction";
import { useNavigate } from "react-router";

type Props = {
  service: TService;
};

export const FormPembayaran = ({ service }: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = useForm<TPaymentSchema>({
    resolver: zodResolver(paymentSchema),
    defaultValues: { service_code: service.service_code },
  });

  const { balance, loading } = useAppSelector((state) => state.transaction);

  const [dialog, setDialog] = useState<MyDialogProps | null>(null);

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
        content: (
          <p className="text-center">
            Pembayaran {service.service_name} sebesar
            <br />
            <span className="text-2xl font-semibold">{formatted}</span>
            <br />
            {success ? "berhasil!" : "gagal!"}
          </p>
        ),
      });

      dispatch(createPayment(values))
        .then((_res) => {
          setDialog(notif(true));
        })
        .catch((_err) => {
          setDialog(notif(false));
        });
    };

    setDialog({
      type: "topup",
      confirmation: {
        warning: "Ya, lanjutkan Bayar",
        onConfirm,
      },
      handleClose: () => setDialog(null),
      content: (
        <p className="text-center">
          Beli {service.service_name} senilai
          <br />
          <span className="text-2xl font-semibold">{formatted} ?</span>
        </p>
      ),
    });
  };

  return (
    <div className="mt-12">
      <MyDialog data={dialog} />

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
          className="mt-12 grid grid-cols-1 gap-4"
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
            className="hidden md:block"
            disabled={service.service_tariff > balance || loading}
          >
            Top Up
          </Button>
        </form>
      </Form>
    </div>
  );
};
