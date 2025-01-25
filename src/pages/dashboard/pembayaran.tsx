import { WelcomeWithSaldo } from "@/components/home";
import { NotFoundError } from "@/components/common";
import { FormPembayaran } from "@/components/pembayaran";
import { useAppDispatch, useAppSelector } from "@/store";
import { getAllServices } from "@/store/information";
import { useEffect, useMemo } from "react";
import { useParams } from "react-router";

type Props = {};

const PembayaranPage = ({}: Props) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  const params = useParams();
  const { services, loading } = useAppSelector((state) => state.information);
  const serviceFound = useMemo(
    () => services.find((svc) => svc.service_code === params.service_code),
    [services, params],
  );

  if (loading) return null;

  if (!serviceFound) return <NotFoundError />;

  return (
    <>
      <WelcomeWithSaldo />
      <FormPembayaran service={serviceFound} />
    </>
  );
};

export default PembayaranPage;
