import React, { PropsWithChildren } from "react";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import { DialogOverlay } from "@/components/ui/dialog";
import { cn } from "@/lib/utils";
import logo from "@/assets/logo.png";
import { IoClose, IoCheckmark } from "react-icons/io5";
import { Button } from "../ui/button";

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => (
  <DialogPrimitive.DialogPortal>
    <DialogOverlay />
    <DialogPrimitive.Content
      ref={ref}
      className={cn(
        "fixed left-[50%] top-[50%] z-50 grid w-full max-w-lg translate-x-[-50%] translate-y-[-50%] gap-4 border bg-background p-6 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] sm:rounded-lg",
        className,
      )}
      {...props}
    >
      {children}
    </DialogPrimitive.Content>
  </DialogPrimitive.DialogPortal>
));
DialogContent.displayName = DialogPrimitive.Content.displayName;

export type MyDialogType = "success" | "error" | "topup";
export type MyDialogProps =
  | {
      type: MyDialogType;
      content: JSX.Element;
      confirmation?: {
        warning: string;
        onConfirm: () => void;
      };
      handleClose: () => void;
    }
  | undefined
  | null;

export const MyDialog = ({ data }: { data?: MyDialogProps }) => {
  if (!data) return null;
  return (
    <DialogPrimitive.Root
      open={Boolean(data)}
      onOpenChange={(_open) => data.handleClose()}
    >
      <DialogContent>
        <DialogPrimitive.Title className="invisible hidden">
          {data.content}
        </DialogPrimitive.Title>
        <div className="flex flex-col items-center space-y-2">
          {data.type === "success" ? (
            <div className="flex size-16 items-center justify-center rounded-full bg-emerald-500 text-white">
              <IoCheckmark className="size-10" />
            </div>
          ) : data.type === "error" ? (
            <div className="flex size-16 items-center justify-center rounded-full bg-red-500 text-white">
              <IoClose className="size-10" />
            </div>
          ) : (
            <img src={logo} alt="Logo" className="size-16" />
          )}

          {data.content}

          <div className="mt-8 flex flex-col gap-4">
            {data.confirmation && (
              <Button
                type="button"
                onClick={data.confirmation.onConfirm}
                variant="ghost"
              >
                {data.confirmation.warning}
              </Button>
            )}
            <Button
              type="button"
              onClick={data.handleClose}
              variant="ghost"
              className="text-muted-foreground"
            >
              {data.confirmation ? "Batalkan" : "Kembali ke Beranda"}
            </Button>
          </div>
        </div>
      </DialogContent>
    </DialogPrimitive.Root>
  );
};
export const MyDialogBigText = ({ children }: PropsWithChildren) => (
  <p className="text-2xl font-semibold">{children}</p>
);
