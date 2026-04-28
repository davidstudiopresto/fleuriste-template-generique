type Props = {
  className?: string;
  size?: number;
  flip?: boolean;
  inline?: boolean; // si true : pas de position absolute (mode flow)
  side?: "left" | "right";
  offset?: number;
  top?: number;
};

export default function Filigrane({
  className = "",
  size = 160,
  flip = false,
  inline = true,
  side = "left",
  offset = 32,
  top = 32,
}: Props) {
  const positionStyle: React.CSSProperties = inline
    ? {}
    : side === "left"
    ? { position: "absolute", left: offset, top }
    : { position: "absolute", right: offset, top };

  return (
    <div
      className={className}
      style={{
        width: size,
        height: size,
        transform: flip ? "scaleX(-1)" : undefined,
        opacity: 0.55,
        pointerEvents: "none",
        userSelect: "none",
        ...positionStyle,
      }}
      aria-hidden="true"
    >
      <svg viewBox="0 0 200 200" fill="none" stroke="currentColor" strokeWidth="0.8" className="text-[var(--olive)]" strokeLinecap="round" strokeLinejoin="round">
        {/* Branche centrale */}
        <path d="M 30 180 Q 80 130 110 90 Q 140 50 170 30" />

        {/* Feuilles */}
        <path d="M 56 158 Q 38 152 32 168 Q 50 168 56 158 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 64 150 Q 80 140 86 154 Q 70 158 64 150 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 88 122 Q 70 116 64 132 Q 82 132 88 122 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 96 114 Q 112 104 118 118 Q 102 122 96 114 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 124 80 Q 106 74 100 90 Q 118 90 124 80 Z" fill="currentColor" fillOpacity="0.2" />
        <path d="M 132 72 Q 148 62 154 76 Q 138 80 132 72 Z" fill="currentColor" fillOpacity="0.2" />
        <ellipse cx="160" cy="40" rx="5" ry="7" transform="rotate(35 160 40)" fill="currentColor" fillOpacity="0.25" />
      </svg>
    </div>
  );
}
