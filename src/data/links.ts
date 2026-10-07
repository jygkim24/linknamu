export type LinkItem = {
  // 클릭 수를 저장할 때 쓰는 고유 키 (URL이 겹칠 수 있어서 따로 둠)
  id: string;
  title: string;
  url: string;
  emoji?: string;
};

// 보여주기용 더미 데이터
export const links: LinkItem[] = [
  { id: "github", title: "깃허브", url: "https://github.com/jygkim24", emoji: "❤️" },
  { id: "blog", title: "블로그", url: "https://github.com/jygkim24", emoji: "✏️" },
  { id: "email", title: "이메일", url: "mailto:jj@gmail.com", emoji: "✉️" },
  { id: "youtube", title: "유튜브", url: "https://www.youtube.com/shorts/qkMZN1b-7h0", emoji: "▶️" },
];
