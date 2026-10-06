type LinkCardProps = {
  title: string;
  url: string;
};

export default function LinkCard({ title, url }: LinkCardProps) {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex w-full items-center justify-between rounded-2xl border border-zinc-200 bg-white px-5 py-4 font-medium shadow-sm transition hover:-translate-y-0.5 hover:border-emerald-400 hover:shadow-md active:translate-y-0 dark:border-zinc-700 dark:bg-zinc-900 dark:hover:border-emerald-500"
    >
      <span>{title}</span>
      <span aria-hidden className="text-zinc-400">
        →
      </span>
    </a>
  );
}
