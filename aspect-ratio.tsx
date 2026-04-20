import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Sparkles } from "lucide-react";

export const SurpriseButton = () => {
  const [opened, setOpened] = useState(false);
  const [confetti, setConfetti] = useState<{ id: number; x: number; emoji: string; delay: number }[]>([]);

  const handlePress = () => {
    setOpened(true);
    const emojis = ["💖", "🌼", "🧸", "🐱", "🌸", "✨", "💕", "💗"];
    const pieces = Array.from({ length: 60 }).map((_, i) => ({
      id: Date.now() + i,
      x: Math.random() * 100,
      emoji: emojis[Math.floor(Math.random() * emojis.length)],
      delay: Math.random() * 0.8,
    }));
    setConfetti(pieces);
    setTimeout(() => setConfetti([]), 4000);
  };

  return (
    <div className="relative flex flex-col items-center">
      {/* confetti */}
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        {confetti.map((c) => (
          <span
            key={c.id}
            className="absolute -top-10 select-none text-3xl"
            style={{
              left: `${c.x}%`,
              animation: `petal-fall 3s ${c.delay}s ease-in forwards`,
            }}
          >
            {c.emoji}
          </span>
        ))}
      </div>

      {!opened ? (
        <Button
          onClick={handlePress}
          size="lg"
          className="group relative h-auto rounded-full bg-gradient-button px-10 py-6 text-xl font-bold text-primary-foreground shadow-plush transition-bounce hover:scale-110 hover:shadow-glow animate-heartbeat"
          style={{ transition: "var(--transition-bounce)" }}
        >
          <Sparkles className="mr-2 h-6 w-6" />
          Press Me 💗
          <Sparkles className="ml-2 h-6 w-6" />
        </Button>
      ) : (
        <div className="animate-scale-in rounded-3xl border-4 border-dashed border-primary/40 bg-card/90 p-8 text-center shadow-plush backdrop-blur-sm md:p-12">
          <div className="mb-4 text-6xl animate-heartbeat">💗</div>
          <p className="font-hand text-3xl leading-snug text-primary md:text-4xl">
            You are my favorite hello<br />and my hardest goodbye.
          </p>
          <p className="mt-4 text-lg text-foreground/70 md:text-xl">
            Thank you for being you. I'd choose you, every time, in every universe. 🌼🐱
          </p>
          <Button
            variant="ghost"
            onClick={() => setOpened(false)}
            className="mt-6 text-primary hover:bg-primary/10"
          >
            ✨ press again
          </Button>
        </div>
      )}
    </div>
  );
};
