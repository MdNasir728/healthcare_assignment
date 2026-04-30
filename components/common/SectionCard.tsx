interface SectionCardProps {
  title: string;
  children: React.ReactNode;
}

export default function SectionCard({
  title,
  children,
}: SectionCardProps) {
  return (
    <div className="p-6 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-xl">
      <h2 className="text-lg font-medium mb-4 text-white">{title}</h2>
      <div className="space-y-2">{children}</div>
    </div>
  );
}