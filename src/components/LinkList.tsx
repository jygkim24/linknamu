"use client";

import { useEffect, useState } from "react";
import LinkCard from "@/components/LinkCard";
import type { LinkItem } from "@/data/links";

type LinkListProps = {
  links: LinkItem[];
};

export default function LinkList({ links }: LinkListProps) {
  // 데이터를 받기 전에는 모두 0회로 표시
  const [counts, setCounts] = useState<Record<string, number>>({});

  useEffect(() => {
    let ignore = false;
    fetch("/api/clicks")
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { counts: Record<string, number> }) => {
        // 서버 값과 그 사이에 눌린 클릭 중 큰 쪽을 유지
        if (!ignore) {
          setCounts((prev) => {
            const next = { ...data.counts };
            for (const [id, n] of Object.entries(prev)) {
              next[id] = Math.max(next[id] ?? 0, n);
            }
            return next;
          });
        }
      })
      .catch((error) => console.error("클릭 수 조회 실패", error));
    return () => {
      ignore = true;
    };
  }, []);

  function handleClick(id: string) {
    // 화면은 바로 올리고, 서버 저장은 새 탭이 열려도 끝까지 보내지도록 keepalive 사용
    setCounts((prev) => ({ ...prev, [id]: (prev[id] ?? 0) + 1 }));
    fetch("/api/clicks", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id }),
      keepalive: true,
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res.status)))
      .then((data: { id: string; count: number }) => {
        setCounts((prev) => ({ ...prev, [data.id]: data.count }));
      })
      .catch((error) => console.error("클릭 수 저장 실패", error));
  }

  return (
    <ul className="mt-12 flex w-full flex-col gap-4">
      {links.map((link) => (
        <li key={link.id}>
          <LinkCard
            title={link.title}
            url={link.url}
            emoji={link.emoji}
            clicks={counts[link.id] ?? 0}
            onClick={() => handleClick(link.id)}
          />
        </li>
      ))}
    </ul>
  );
}
