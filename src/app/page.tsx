import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

// 보여주기용 더미 데이터
const profile = {
  name: "김클로",
  bio: "세계 최강 바이브코더",
  imageSrc: "/profile.svg",
};

const links = [
  { title: "GitHub", url: "https://github.com" },
  { title: "LinkedIn", url: "https://www.linkedin.com" },
  { title: "Blog", url: "https://example.com" },
];

export default function Home() {
  return (
    <div className="flex flex-1 justify-center bg-zinc-50 px-4 py-16 dark:bg-black">
      <main className="flex w-full max-w-md flex-col items-center">
        <ProfileHeader {...profile} />
        <ul className="mt-10 flex w-full flex-col gap-6">
          {links.map((link) => (
            <li key={link.title}>
              <LinkCard {...link} />
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
