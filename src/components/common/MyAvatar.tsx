import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useMemo, useState } from "react";
import fallbackImage from "@/assets/Fallback User Picture.png";

type Props = {
  src: string;
  userName: string;
  className?: string;
};

export const MyAvatar = ({ src, userName, className }: Props) => {
  const [img, setImg] = useState(src);

  const alias = useMemo(
    () =>
      userName
        .split(" ")
        .map((val) => val[0].toUpperCase())
        .slice(0, 2)
        .join(""),
    [userName],
  );

  return (
    <Avatar className={className}>
      <AvatarImage
        src={img}
        alt={userName}
        onLoadingStatusChange={(status) => {
          if (status === "error") setImg(fallbackImage);
        }}
      />
      <AvatarFallback>{alias}</AvatarFallback>
    </Avatar>
  );
};
