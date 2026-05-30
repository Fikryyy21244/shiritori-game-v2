import { useState } from "react";

interface WordCardProps {
  word?: string;
  meaning?: string;
  category: string;
}

export default function WordCard({ word, meaning, category }: WordCardProps) {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const match = word?.match(/^(.+?)[（(](.+?)[）)]$/);

  const kanji = match ? match[1] : word || "";
  const reading = match ? match[2] : "";

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();

    setPosition({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      className="
        group relative overflow-hidden rounded-3xl
        border border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl
        transition-all duration-300
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:bg-white/10
      "
    >
      <div
        className="
          pointer-events-none absolute inset-0
          opacity-0 transition-opacity duration-300
          group-hover:opacity-100
        "
        style={{
          background: `radial-gradient(
            220px circle at ${position.x}px ${position.y}px,
            rgba(34,211,238,0.18),
            transparent 70%
          )`,
        }}
      />

      <div
        className="
          absolute -right-10 -top-10
          h-32 w-32 rounded-full
          bg-cyan-400/10 blur-3xl
        "
      />

      <div className="relative z-10 mb-5 flex items-center justify-between">
        <span
          className="
            rounded-full
            border border-cyan-400/20
            bg-cyan-400/10
            px-3 py-1
            text-[10px]
            font-bold
            tracking-[0.2em]
            text-cyan-300
          "
        >
          {category}
        </span>

        <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse" />
      </div>

      <div className="relative z-10">
        <h2
          className="
            wrap-break-words
            text-3xl
            font-bold
            leading-relaxed
            text-white
            transition-all duration-300
            group-hover:text-cyan-300
            max-sm:text-2xl
          "
        >
          {kanji}
        </h2>

        {reading && (
          <div
            className="
              mt-3 inline-flex max-w-full flex-wrap
              rounded-2xl
              border border-cyan-400/20
              bg-cyan-400/10
              px-3 py-2
            "
          >
            <p
              className="
                break-all
                text-sm
                tracking-wide
                text-cyan-100
                max-sm:text-xs
              "
            >
              {reading}
            </p>
          </div>
        )}
      </div>

      <div
        className="
          relative z-10 my-5 h-px
          bg-linear-to-r
          from-transparent
          via-white/10
          to-transparent
        "
      />

      <div className="relative z-10">
        <p
          className="
            text-[10px]
            font-bold
            tracking-[0.25em]
            text-gray-500
          "
        >
          MEANING
        </p>

        <p
          className="
            mt-2
            text-lg
            font-semibold
            leading-relaxed
            text-gray-100
            max-sm:text-base
          "
        >
          {meaning}
        </p>
      </div>
    </div>
  );
}
