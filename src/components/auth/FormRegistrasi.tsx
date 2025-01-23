import { Input } from "../ui/input";
import { MdAlternateEmail } from "react-icons/md";
import { FaRegUser } from "react-icons/fa6";
import { GrLock } from "react-icons/gr";
import { Button } from "../ui/button";

type Props = {};

const FormRegistrasi = (props: Props) => {
  return (
    <div className="flex flex-col gap-6">
      <div>
        <Input
          placeholderIcon={<MdAlternateEmail />}
          placeholder="masukkan email anda"
        />
      </div>

      <div>
        <Input placeholderIcon={<FaRegUser />} placeholder="nama depan" />
      </div>
      <div>
        <Input placeholderIcon={<FaRegUser />} placeholder="nama belakang" />
      </div>

      <div>
        <Input
          placeholderIcon={<GrLock />}
          placeholder="buat password"
          type="password"
        />
      </div>
      <div>
        <Input
          placeholderIcon={<GrLock />}
          placeholder="konfirmasi password"
          type="password"
        />
      </div>

      <Button variant={"destructive"} className="mt-6">
        Registrasi
      </Button>

      <p className="text-sm text-center">
        sudah punya akun? login{" "}
        <a href="/auth" className="text-red-600 font-semibold">
          di sini
        </a>
      </p>
    </div>
  );
};

export default FormRegistrasi;
