import { useMemo } from "react";

const Daisy = ({ size = 40 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
    {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
      <ellipse
        key={angle}
        cx="32"
        cy="14"
        rx="7"
        ry="12"
        fill="white"
        stroke="hsl(var(--blush))"
        strokeWidth="1.5"
        transform={`rotate(${angle} 32 32)`}
      />
    ))}
    <circle cx="32" cy="32" r="8" fill="hsl(var(--accent))" stroke="hsl(50 80% 55%)" strokeWidth="1.5" />
    <circle cx="29" cy="30" r="1.5" fill="hsl(50 80% 40%)" />
    <circle cx="35" cy="30" r="1.5" fill="hsl(50 80% 40%)" />
  </svg>
);

const Heart = ({ size = 30 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 32 32" fill="none">
    <path
      d="M16 28s-12-7.5-12-15.5C4 7.5 7.5 4 12 4c2.5 0 4 1.5 4 3 0-1.5 1.5-3 4-3 4.5 0 8 3.5 8 8.5C28 20.5 16 28 16 28z"
      fill="hsl(var(--heart))"
      stroke="hsl(350 80% 50%)"
      strokeWidth="1.5"
      strokeLinejoin="round"
    />
    <ellipse cx="11" cy="11" rx="2" ry="3" fill="white" opacity="0.6" transform="rotate(-30 11 11)" />
  </svg>
);

const Cat = ({ size = 44 }: { size?: number }) => (
  <svg width={size} height={size} viewBox="0 0 64 64" fill="none">
    {/* ears */}
    <path d="M14 28 L18 12 L28 22 Z" fill="hsl(var(--blush))" stroke="hsl(340 60% 55%)" strokeWidth="1.5" strokeLinejoin="round" />
    <path d="M50 28 L46 12 L36 22 Z" fill="hsl(var(--blush))" stroke="hsl(340 60% 55%)" strokeWidth="1.5" strokeLinejoin="round" />
    {/* head */}
    <ellipse cx="32" cy="36" rx="20" ry="18" fill="white" stroke="hsl(340 60% 55%)" strokeWidth="1.5" />
    {/* cheeks */}
    <circle cx="20" cy="40" r="3" fill="hsl(var(--blush))" opacity="0.7" />
    <circle cx="44" cy="40" r="3" fill="hsl(var(--blush))" opacity="0.7" />
    {/* eyes */}
    <path d="M24 34 Q26 38 28 34" stroke="hsl(340 50% 25%)" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M36 34 Q38 38 40 34" stroke="hsl(340 50% 25%)" strokeWidth="2" strokeLinecap="round" fill="none" />
    {/* nose + mouth */}
    <path d="M30 41 L32 43 L34 41 Z" fill="hsl(var(--heart))" />
    <path d="M32 43 Q30 46 28 45 M32 43 Q34 46 36 45" stroke="hsl(340 50% 25%)" strokeWidth="1.2" strokeLinecap="round" fill="none" />
  </svg>
);

type DecorItem = {
  type: "daisy" | "heart" | "cat";
  left: string;
  delay: string;
  duration: string;
  size: number;
};

export const FloatingDecor = () => {
  const items: DecorItem[] = useMemo(() => {
    const types: DecorItem["type"][] = ["daisy", "heart", "cat", "daisy", "heart", "daisy"];
    return Array.from({ length: 18 }).map((_, i) => ({
      type: types[i % types.length],
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 12}s`,
      duration: `${10 + Math.random() * 10}s`,
      size: 24 + Math.random() * 28,
    }));
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {items.map((item, i) => (
        <div
          key={i}
          className="absolute -top-20 animate-float"
          style={{
            left: item.left,
            animationDelay: item.delay,
            animationDuration: item.duration,
            top: `${Math.random() * 100}%`,
            opacity: 0.55,
          }}
        >
          {item.type === "daisy" && <Daisy size={item.size} />}
          {item.type === "heart" && <Heart size={item.size * 0.8} />}
          {item.type === "cat" && <Cat size={item.size} />}
        </div>
      ))}
    </div>
  );
};

export { Daisy, Heart, Cat };
