import Image from "next/image";

type ProfileHeaderProps = {
  name: string;
  bio: string;
  imageSrc: string;
};

export default function ProfileHeader({ name, bio, imageSrc }: ProfileHeaderProps) {
  return (
    <header className="flex flex-col items-center text-center">
      <div className="rounded-full bg-linear-to-b from-white to-orange-100 p-1.5 shadow-[0_18px_40px_-14px_rgba(154,88,38,0.45),inset_0_1px_0_rgba(255,255,255,0.9)] dark:from-stone-700 dark:to-stone-800 dark:shadow-[0_18px_40px_-14px_rgba(0,0,0,0.7)]">
        <Image
          src={imageSrc}
          alt={`${name} 프로필 사진`}
          width={128}
          height={128}
          priority
          unoptimized
          className="h-28 w-28 rounded-full object-cover sm:h-32 sm:w-32"
        />
      </div>
      <h1 className="mt-6 text-[22px] font-bold tracking-tight text-stone-800 dark:text-stone-100">
        {name}
      </h1>
      <p className="mt-2 max-w-xs text-[15px] leading-relaxed text-stone-500 dark:text-stone-400">
        {bio}
      </p>
    </header>
  );
}
