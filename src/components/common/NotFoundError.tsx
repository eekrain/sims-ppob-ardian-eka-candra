import { NavLink } from "react-router";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

type Props = {};

export const NotFoundError = ({}: Props) => {
  return (
    <Card className="mx-auto max-w-lg text-center">
      <CardHeader>
        <CardTitle className="text-2xl text-destructive">
          404 Not Found
        </CardTitle>
      </CardHeader>

      <CardContent>
        <p>
          Halaman tujuan yang diminta tidak ditemukan.{" "}
          <NavLink to={"/"} className={"underline"}>
            Klik disini untuk kembali ke Home.
          </NavLink>
        </p>
      </CardContent>
    </Card>
  );
};
