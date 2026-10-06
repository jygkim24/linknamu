import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <Image
        src={imageSrc}
        alt={`${name} 프로필 사진`}
        width={176}
        height={176}
        priority
        unoptimized
        className="h-36 w-36 rounded-full object-cover ring-4 ring-white shadow-md sm:h-44 sm:w-44 dark:ring-zinc-800"
      />
      <h1 className="mt-5 text-2xl font-bold tracking-tight">{name}</h1>
      <p className="mt-2 text-base text-zinc-600 dark:text-zinc-400">{bio}</p>
    </header>
  );
}
