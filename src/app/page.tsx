import ProfileHeader from "@/components/ProfileHeader";
import LinkCard from "@/components/LinkCard";

// 보여주기용 더미 데이터
const profile = {
  name: "김개발",
  bio: "풀스택 개발자 | 요즘에는 AI 개발에 관심이 많아요",
  imageSrc: "/profile.jpg",
};

const links = [
  { title: "깃허브", url: "https://github.com/jygkim24", emoji: "❤️" },
  { title: "블로그", url: "https://github.com/jygkim24", emoji: "✏️" },
  { title: "이메일", url: "mailto:jj@gmail.com", emoji: "✉️" },
  { title: "유튜브", url: "https://www.youtube.com/shorts/qkMZN1b-7h0", emoji: "▶️" },
];

export default function Home() {
  return (
    <div className="relative isolate flex flex-1 justify-center overflow-hidden bg-linear-to-b from-[#fffaf3] via-[#fdf0e2] to-[#f8dcc4] px-6 pt-20 pb-20 sm:pt-28 dark:from-[#1c1714] dark:via-[#211a16] dark:to-[#2b1f18]">
      {/* 글래스 카드 뒤로 은은하게 비치는 배경 빛 */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 -z-10 h-80 w-80 rounded-full bg-orange-200/50 blur-3xl dark:bg-orange-900/20"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 -right-28 -z-10 h-80 w-80 rounded-full bg-rose-200/40 blur-3xl dark:bg-rose-900/15"
      />
      <main className="flex w-full max-w-sm flex-col items-center">
        <ProfileHeader {...profile} />
        <ul className="mt-12 flex w-full flex-col gap-4">
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
