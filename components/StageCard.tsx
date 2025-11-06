import { StageBlock } from "@/types/pipeline";

interface StageCardProps {
  block: StageBlock;
}

export function StageCard({ block }: StageCardProps) {
  return (
    <section className="rounded-3xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-md transition hover:border-accent-500/70 hover:bg-white/[0.04]">
      <header className="mb-4 space-y-1">
        <h3 className="text-xl font-semibold tracking-tight text-accent-500">
          {block.title}
        </h3>
        <p className="text-sm text-white/70">{block.summary}</p>
      </header>
      <dl className="space-y-3">
        {block.details.map((row) => (
          <div
            key={`${block.title}-${row.label}`}
            className="flex flex-col gap-1 rounded-xl border border-white/5 bg-black/30 p-3"
          >
            <dt className="text-xs uppercase tracking-wide text-white/50">
              {row.label}
            </dt>
            <dd className="text-sm text-white/90">{row.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
