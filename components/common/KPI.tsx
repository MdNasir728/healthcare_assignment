export function KPI({ label, value }: { label: string; value: number }) {
  return (
    <div className="p-4 rounded-xl bg-white/5 border border-white/10">
      <p className="text-sm text-slate-400">{label}</p>
      <p className="text-xl font-semibold mt-1">{value}</p>
    </div>
  );
}