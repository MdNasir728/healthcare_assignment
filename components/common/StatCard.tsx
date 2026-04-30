interface StatCardProps {
  label: string;
  value: string;
}

export default function StatCard({ label, value }: StatCardProps) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10 text-center backdrop-blur-xl">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-lg font-medium mt-1 text-white">{value}</p>
    </div>
  );
}