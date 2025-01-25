import { useAppDispatch, useAppSelector } from "@/store";
import { TService } from "@/lib/services/information";
import { useEffect } from "react";
import { getAllServices } from "@/store/information";
import { NavLink } from "react-router";

type InnerProps = {} & TService;
const MenuItem = ({ service_icon, service_name, service_code }: InnerProps) => {
  return (
    <NavLink
      to={`/pembayaran/${service_code}`}
      className="flex flex-col items-center"
    >
      <img
        src={service_icon}
        alt={`Logo ${service_name}`}
        className="size-[60px]"
      />
      <p className="text-wrap text-center text-xs text-muted-foreground">
        {service_name}
      </p>
    </NavLink>
  );
};

type Props = {};
export const PPOBMenu = ({}: Props) => {
  const dispatch = useAppDispatch();
  const services = useAppSelector((state) => state.information.services);

  useEffect(() => {
    dispatch(getAllServices());
  }, [dispatch]);

  return (
    <div className="mt-12 grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12 lg:gap-2">
      {services.map((menu) => (
        <MenuItem key={menu.service_code} {...menu} />
      ))}
    </div>
  );
};
