import profilePicture from "@/assets/Profile Photo.png";

type Props = {};

export const Welcome = (props: Props) => {
  return (
    <div>
      <img
        src={profilePicture}
        alt="User profile picture"
        className="rounded-full border size-[48px] md:size-[72px]"
      />

      <p className="text-lg mt-4">
        Selamat Datang, <br />
        <span className="text-2xl font-semibold">Ardian Eka Candra</span>
      </p>
    </div>
  );
};
