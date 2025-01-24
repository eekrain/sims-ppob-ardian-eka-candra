import profilePicture from "@/assets/Profile Photo.png";

type Props = {};

export const Welcome = (props: Props) => {
  return (
    <div>
      <img
        src={profilePicture}
        alt="User profile picture"
        className="size-[48px] rounded-full border md:size-[72px]"
      />

      <p className="mt-4 text-lg">
        Selamat Datang, <br />
        <span className="text-2xl font-semibold">Ardian Eka Candra</span>
      </p>
    </div>
  );
};
