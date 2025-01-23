import { TMenu } from "@/lib/constant";

type InnerProps = {} & TMenu;
const MenuItem = ({ title, img }: InnerProps) => {
  return (
    <button className="flex flex-col items-center">
      <img src={img} alt={`Logo ${title}`} className="size-[70px]" />
      <p className="text-wrap text-sm text-muted-foreground text-center">
        {title}
      </p>
    </button>
  );
};

type Props = {
  menuList: TMenu[];
};
export const PPOBMenu = ({ menuList }: Props) => {
  return (
    <div className="grid grid-cols-3 gap-4 md:grid-cols-6 lg:grid-cols-12 lg:gap-2 mt-12">
      {menuList.map((menu) => (
        <MenuItem key={menu.title} {...menu} />
      ))}
    </div>
  );
};
