import React from 'react';

const HexagonBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-[1]">
      {/* Honeycomb texture */}
      <div className="absolute inset-0 honeycomb-pattern opacity-[0.13] mix-blend-multiply" />

      {/* Floating hexagons */}
      <div className="absolute top-[15%] left-[5%] w-32 h-32 hexagon-float hidden md:block opacity-[0.18]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-earth/30 stroke-[1.2]">
          <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
        </svg>
      </div>

      <div className="absolute top-[40%] right-[5%] w-24 h-24 hexagon-float-slow hidden md:block opacity-[0.14]">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-earth/22 stroke-[0.9]">
          <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] left-[10%] w-40 h-40 hexagon-float-reverse hidden md:block opacity-[0.16]" style={{ animationDelay: '-7s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-earth/25 stroke-1">
          <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
        </svg>
      </div>

      <div className="absolute bottom-[20%] right-[8%] w-48 h-48 hexagon-float hidden md:block opacity-[0.17]" style={{ animationDelay: '-5s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-earth/22 stroke-[0.9]">
          <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
        </svg>
      </div>

      <div className="absolute top-[60%] left-[50%] w-16 h-16 hexagon-float-slow hidden lg:block opacity-[0.10]" style={{ animationDelay: '-12s' }}>
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-brand-earth/15 stroke-[0.8]">
          <path d="M50 5 L90 28 L90 72 L50 95 L10 72 L10 28 Z" />
        </svg>
      </div>

      {/* Center soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-earth/[0.06] rounded-full blur-[130px] hexagon-pulse" />

      {/* Corner accent */}
      <div className="absolute top-0 right-0 p-8 opacity-[0.25] hidden lg:block">
        <svg width="120" height="120" viewBox="0 0 120 120" className="stroke-brand-earth stroke-[1.5] fill-none">
          <path d="M100 20 L120 32 L120 55 L100 67 L80 55 L80 32 Z" opacity="0.55" />
          <path d="M80 55 L100 67 L100 90 L80 102 L60 90 L60 67 Z" opacity="0.35" />
        </svg>
      </div>
    </div>
  );
};

export default HexagonBackground;



//  All values are now exactly midway between the original and the lighter version:

// ┌───────────────┬───────────┬───────────┬────────────────┐
// │    Element    │ Original  │    Now    │ Previous light │
// ├───────────────┼───────────┼───────────┼────────────────┤
// │ Honeycomb     │ 0.20      │ 0.13      │ 0.06           │
// ├───────────────┼───────────┼───────────┼────────────────┤
// │ Hexagons      │ 0.20–0.30 │ 0.10–0.18 │ 0.06–0.10      │
// ├───────────────┼───────────┼───────────┼────────────────┤
// │ Stroke color  │ /30–/40   │ /15–/30   │ /10–/20        │
// ├───────────────┼───────────┼───────────┼────────────────┤
// │ Center glow   │ /10       │ /0.06     │ /0.03          │
// ├───────────────┼───────────┼───────────┼────────────────┤
// │ Corner accent │ 0.40      │ 0.25      │ 0.12           │
// └───────────────┴───────────┴───────────┴────────────────┘

// ✻ Sautéed for 1m 15s · 1 shell still running