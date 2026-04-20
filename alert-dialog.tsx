import { useEffect, useState } from "react";

type Burst = { id: number; x: number; y: number; emoji: string };

const EMOJIS = ["💖", "🌼", "💗", "🌸", "🐱", "💕", "✨", "🧸"];

export const HeartBurst = () => {
  const [bursts, setBursts] = useState<Burst[]>([]);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      // skip clicks on actual interactive controls so they still work
      if (target.closest("button, a, input, textarea, select, [data-no-burst]")) {
        // still spawn a tiny burst for buttons (feels delightful)
        if (!target.closest("[data-no-burst]")) {
          spawn(e.clientX, e.clientY, 3);
        }
        return;
      }
      spawn(e.clientX, e.clientY, 5);
    };

    const spawn = (x: number, y: number, count: number) => {
      const newOnes: Burst[] = Array.from({ length: count }).map((_, i) => ({
        id: Date.now() + i + Math.random(),
        x: x + (Math.random() - 0.5) * 60,
        y: y + (Math.random() - 0.5) * 20,
        emoji: EMOJIS[Math.floor(Math.random() * EMOJIS.length)],
      }));
      setBursts((b) => [...b, ...newOnes]);
      setTimeout(() => {
        setBursts((b) => b.filter((x) => !newOnes.find((n) => n.id === x.id)));
      }, 1300);
    };

    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-50">
      {bursts.map((b) => (
        <span
          key={b.id}
          className="absolute animate-heart-pop select-none text-3xl"
          style={{ left: b.x, top: b.y, transform: "translate(-50%, -50%)" }}
        >
          {b.emoji}
        </span>
      ))}
    </div>
  );
};
