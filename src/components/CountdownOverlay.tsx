import { useEffect, useRef, useState } from "react";

interface CountdownOverlayProps {
  startFrom?: number;
  onFinish?: () => void;
}

export default function CountdownOverlay({
  startFrom = 3,
  onFinish,
}: CountdownOverlayProps) {
  const [count, setCount] = useState(startFrom);
  const [done, setDone] = useState(false);

  const tickSound = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // preload audio
    tickSound.current = new Audio("/sounds/tick.mp3");

    let current = startFrom;
    let interval: ReturnType<typeof setInterval>;

    const stopSound = () => {
      if (tickSound.current) {
        tickSound.current.pause();
        tickSound.current.currentTime = 0;
      }
    };

    interval = setInterval(() => {
      // FINISH CONDITION
      if (current <= 0) {
        clearInterval(interval);

        stopSound();

        setDone(true);
        onFinish?.();
        return;
      }

      // update UI
      setCount(current);

      // play sound tiap tick
      const sound = tickSound.current!;
      sound.currentTime = 0;

      sound.play().catch(() => {
        console.log("Audio blocked / file missing");
      });

      current -= 1;
    }, 1000);

    // cleanup
    return () => {
      clearInterval(interval);
      stopSound();
    };
  }, [startFrom, onFinish]);

  if (done) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/70 backdrop-blur-sm z-50">
      <h1 className="text-white text-8xl font-black animate-pulse">
        {count === 0 ? "START!" : count}
      </h1>
    </div>
  );
}
