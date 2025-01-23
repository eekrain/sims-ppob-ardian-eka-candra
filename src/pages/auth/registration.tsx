import { AuthHeader } from "@/components/auth/AuthHeader";
import FormRegistrasi from "@/components/auth/FormRegistrasi";
import API from "@/lib/api";
import { TRegistrationSchema } from "@/lib/schema";
import { toast } from "sonner";

type Props = {};

const RegistrationPage = (props: Props) => {
  const onSubmit = (values: TRegistrationSchema) => {
    API.auth
      .registration(values)
      .then((val) => {
        console.log("🚀 ~ API.auth.registration ~ val:", val);
        toast.success(val.message);
      })
      .catch((err) => {
        console.log("🚀 ~ API.auth.registration ~ err:", err);
        toast.error(err.message);
      });
  };

  return (
    <div className="max-w-sm mx-auto">
      <AuthHeader
        description={
          <span>
            Lengkapi data untuk
            <br />
            membuat akun
          </span>
        }
      />
      <FormRegistrasi onSubmit={onSubmit} />
    </div>
  );
};

export default RegistrationPage;
