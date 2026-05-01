"use client";

interface Props {
  message: string;
}

export default function EmptyState({ message }: Props) {
  return (
    <div className="flex items-center justify-center h-40 border border-dashed border-white/10 rounded-xl text-slate-400">
      {message}
    </div>
  );
}