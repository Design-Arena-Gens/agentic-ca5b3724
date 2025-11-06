interface MoodPaletteProps {
  colors: string[];
}

export function MoodPalette({ colors }: MoodPaletteProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {colors.map((swatch) => (
        <div
          key={swatch}
          className="group relative overflow-hidden rounded-2xl border border-white/10"
        >
          <div className="h-16 w-32 bg-gradient-to-br from-white/5 via-transparent to-white/5 group-hover:via-white/10" />
          <span className="absolute inset-x-0 bottom-2 text-center text-xs font-medium text-white/80">
            {swatch}
          </span>
        </div>
      ))}
    </div>
  );
}
