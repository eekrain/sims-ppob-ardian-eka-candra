import { useForm } from "react-hook-form";
import { Button } from "../ui/button";
import { MdOutlineMoney } from "react-icons/md";
import { topupSchema, TTopupSchema } from "@/lib/schema";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "../ui/form";
import { NumberInput } from "../ui/number-input";
import { MyDialog, MyDialogProps } from "../MyDialog";
import { useState } from "react";
import { useAppDispatch } from "@/store";
import { topupBalance } from "@/store/transaction";
import { useNavigate } from "react-router";

const TOPUP_BTNS = [10000, 20000, 50000, 100000, 250000, 500000];

type Props = {};

const FormTopup = ({}: Props) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const form = useForm<TTopupSchema>({
    resolver: zodResolver(topupSchema),
    defaultValues: {
      top_up_amount: 0,
    },
  });
  const currTopup = form.watch("top_up_amount");

  const [dialog, setDialog] = useState<MyDialogProps | null>(null);
  const onSubmit = (values: TTopupSchema) => {
    const formatted = new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      maximumFractionDigits: 0,
    }).format(values.top_up_amount);

    const onConfirm = () => {
      const notif = (success: boolean): MyDialogProps => ({
        type: success ? "success" : "error",
        handleClose: () => {
          setDialog(null);
          navigate("/");
        },
        content: (
          <p className="text-center">
            Top Up sebesar
            <br />
            <span className="text-2xl font-semibold">{formatted}</span>
            <br />
            {success ? "berhasil!" : "gagal!"}
          </p>
        ),
      });

      dispatch(topupBalance(values))
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
        warning: "Ya, lanjutkan Top Up",
        onConfirm,
      },
      handleClose: () => setDialog(null),
      content: (
        <p className="text-center">
          Anda yakin untuk Top Up sebesar
          <br />
          <span className="text-2xl font-semibold">{formatted} ?</span>
        </p>
      ),
    });
  };

  return (
    <>
      <MyDialog data={dialog} />
      <div className="mt-12">
        <h3 className="">
          Silahkan masukkan
          <br />
          <span className="text-2xl font-semibold">Nominal Top Up</span>
        </h3>
      </div>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-[60%_40%]"
        >
          <div className="flex flex-col gap-y-4">
            <FormField
              control={form.control}
              name="top_up_amount"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
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
                      {...field}
                      onChange={(e) => {
                        const val = e.currentTarget.value.replace(/[,]/g, "");
                        form.setValue("top_up_amount", +val);
                      }}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              variant="destructive"
              className="hidden md:block"
              disabled={+currTopup < 10000}
            >
              Top Up
            </Button>
          </div>

          <div className="grid grid-cols-3 gap-x-2 gap-y-4">
            {TOPUP_BTNS.map((item) => (
              <button
                onClick={() => form.setValue("top_up_amount", item)}
                key={item}
                type="button"
                className="rounded border border-gray-500 p-2"
              >
                {new Intl.NumberFormat("id-ID", {
                  style: "currency",
                  currency: "IDR",
                  maximumFractionDigits: 0,
                }).format(item)}
              </button>
            ))}
          </div>

          <Button
            variant="destructive"
            className="mt-4 md:hidden"
            disabled={+currTopup < 10000}
          >
            Top Up
          </Button>
        </form>
      </Form>
    </>
  );
};

export default FormTopup;
