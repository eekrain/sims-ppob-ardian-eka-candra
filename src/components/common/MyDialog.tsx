import * as DialogPrimitive from "@radix-ui/react-dialog";
import logo from "@/assets/logo.png";
import { IoClose, IoCheckmark } from "react-icons/io5";
import { useAppSelector } from "@/store";
import { DialogContent } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const MyDialog = () => {
  const dialog = useAppSelector((state) => state.app.dialog);

  if (!dialog) return null;

  return (
    <DialogPrimitive.Root
      open={Boolean(dialog)}
      onOpenChange={(_open) => dialog.handleClose()}
    >
      <DialogContent>
        <DialogPrimitive.Title className="sr-only">
          {dialog.content.map((x) => x.normal || x.big)}
        </DialogPrimitive.Title>
        <DialogPrimitive.Description className="sr-only">
          {dialog.content.map((x) => x.normal || x.big)}
        </DialogPrimitive.Description>
        <div className="flex flex-col items-center gap-6">
          {dialog.type === "success" ? (
            <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500 text-white">
              <IoCheckmark className="size-10" />
            </div>
          ) : dialog.type === "error" ? (
            <div className="flex size-16 items-center justify-center rounded-full bg-red-500 text-white">
              <IoClose className="size-10" />
            </div>
          ) : (
            <img src={logo} alt="Logo" className="size-16" />
          )}

          <p className="text-center">
            {dialog.content.map((item) =>
              item.big ? (
                <span key={item.big} className="block text-2xl font-semibold">
                  {item.big}
                </span>
              ) : (
                <span key={item.normal}>{item.normal}</span>
              ),
            )}
          </p>

          <div className="flex flex-col gap-2">
            {dialog.confirmation && (
              <Button
                type="button"
                onClick={dialog.confirmation.onConfirm}
                variant="ghost"
              >
                {dialog.confirmation.warning}
              </Button>
            )}
            <Button
              type="button"
              onClick={dialog.handleClose}
              variant="ghost"
              className="text-muted-foreground"
            >
              {dialog.confirmation ? "Batalkan" : "Kembali ke Beranda"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </DialogPrimitive.Root>
  );
};
