import { AuthHeader } from "@/components/auth/AuthHeader";
import FormRegistrasi from "@/components/auth/FormRegistrasi";
import { TRegistrationSchema } from "@/lib/schema";
import { useNavigate } from "react-router";
import { toast } from "sonner";

type Props = {};

const RegistrationPage = (props: Props) => {
  const navigate = useNavigate();
  const onSubmit = (values: TRegistrationSchema) => {
    // API.auth
    //   .registration(values)
    //   .then((val) => {
    //     console.log("🚀 ~ API.auth.registration ~ val:", val);
    //     toast.success(val.message);
    //     navigate("/auth");
    //   })
    //   .catch((err) => {
    //     console.log("🚀 ~ API.auth.registration ~ err:", err);
    //     toast.error(err.message);
    //   });
  };

  return (
    <div className="mx-auto max-w-sm">
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
