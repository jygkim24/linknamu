type LinkCardProps = {
  title: string;
  url: string;
  emoji?: string;
};

export default function LinkCard({ title, url, emoji }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative flex w-full items-center justify-center rounded-2xl border border-white/70 bg-white/45 px-4 py-3.5 text-[15px] font-semibold text-stone-800 shadow-[0_6px_24px_-10px_rgba(154,88,38,0.25)] backdrop-blur-xl transition duration-300 ease-out hover:-translate-y-px hover:bg-white/65 hover:shadow-[0_10px_30px_-10px_rgba(154,88,38,0.32)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-orange-300 dark:border-white/10 dark:bg-white/5 dark:text-stone-100 dark:shadow-none dark:hover:bg-white/10"
    >
      <span className="flex items-center gap-3">
        {emoji && (
          <span
            aria-hidden
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-white/70 text-lg dark:bg-white/10"
          >
            {emoji}
          </span>
        )}
        {title}
      </span>
      <span
        aria-hidden
        className="absolute right-5 text-stone-400 transition duration-300 ease-out group-hover:translate-x-0.5 group-hover:text-stone-500"
      >
        →
      </span>
    </a>
  );
}
