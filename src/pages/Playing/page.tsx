import { useEffect, useMemo, useState } from "react";
import CountdownOverlay from "../../components/CountdownOverlay";
import { IoTimer, IoStar } from "react-icons/io5";
import { shitoriWords } from "../../utils/getHiragana";
import { useNavigate } from "react-router-dom";

export default function PlayingPage() {
  const GAME_TIME = 60;

  const [startGame, setStartGame] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(GAME_TIME);

  const navigate = useNavigate();

  const forbiddenEndings = ["る", "ぬ", "づ"];

  const filteredWords = shitoriWords.filter(
    (word) =>
      word &&
      word.length > 1 &&
      !forbiddenEndings.some((char) => word.endsWith(char)) &&
      !word.endsWith("ん"),
  );

  // RANDOM WORD
  const getRandomWord = () => {
    return filteredWords[Math.floor(Math.random() * filteredWords.length)];
  };

  const [currentWord, setCurrentWord] = useState(getRandomWord());
  const [input, setInput] = useState("");
  const [message, setMessage] = useState("");
  const [usedWords, setUsedWords] = useState<string[]>([]);

  // INIT USED WORDS
  useEffect(() => {
    setUsedWords([currentWord]);
  }, []);

  // TIMER
  useEffect(() => {
    if (!startGame) return;

    if (timeLeft <= 0) {
      setMessage("⌛ ゲームオーバー");
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [startGame, timeLeft]);

  // GAME OVER
  useEffect(() => {
    if (timeLeft <= 0) {
      const timeout = setTimeout(() => {
        navigate("/main/game-over", {
          state: { finalScore: score },
        });
      }, 1500);

      return () => clearTimeout(timeout);
    }
  }, [timeLeft, navigate, score]);

  // FORMAT TIMER
  const formattedTime = useMemo(() => {
    const minutes = String(Math.floor(timeLeft / 60)).padStart(2, "0");
    const seconds = String(timeLeft % 60).padStart(2, "0");

    return `${minutes}:${seconds}`;
  }, [timeLeft]);

  // PROGRESS
  const progressWidth = (timeLeft / GAME_TIME) * 100;

  // VALIDASI HIRAGANA
  const isHiragana = (text: string) => {
    return /^[ぁ-んー\s]+$/.test(text);
  };

  // NORMALIZE SMALL CHAR
  const normalizeKana = (text: string) => {
    return text
      .replace(/ゃ/g, "や")
      .replace(/ゅ/g, "ゆ")
      .replace(/ょ/g, "よ")
      .replace(/っ/g, "つ")
      .replace(/ぁ/g, "あ")
      .replace(/ぃ/g, "い")
      .replace(/ぅ/g, "う")
      .replace(/ぇ/g, "え")
      .replace(/ぉ/g, "お");
  };

  // SUBMIT
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const cleanInput = input.trim();

    if (!cleanInput) {
      setMessage("⚠️ ことばを入力してください");
      return;
    }

    // HARUS HIRAGANA
    if (!isHiragana(cleanInput)) {
      setMessage("❌ （ひらがな）使ってください");
      return;
    }

    // CEK ADA DI DATABASE
    if (!shitoriWords.includes(cleanInput)) {
      setMessage("❌ その言葉はありません");
      return;
    }

    // CEK SUDAH DIPAKAI
    if (usedWords.includes(cleanInput)) {
      setMessage("❌ その言葉もう使いました");
      return;
    }

    const lastLetter = normalizeKana(currentWord.slice(-1));
    const firstLetter = normalizeKana(cleanInput.charAt(0));

    // CEK SHIRITORI
    if (firstLetter !== lastLetter) {
      setMessage(`❌ 「${lastLetter}」から始めてください`);
      return;
    }

    // HINDARI ん
    if (cleanInput.slice(-1) === "ん") {
      setMessage("❌ 「ん」で終わりました");

      navigate("/main/game-over", {
        state: {
          finalScore: score,
        },
      });

      return;
    }

    // BENAR
    setMessage("✅ 正解！");
    setScore((prev) => prev + 20);

    // RESET TIMER
    setTimeLeft(GAME_TIME);

    // UPDATE DATA
    setCurrentWord(cleanInput);
    setUsedWords((prev) => [...prev, cleanInput]);
    setInput("");
  };

  return (
    <div className="my-10 w-full text-white">
      {!startGame && <CountdownOverlay onFinish={() => setStartGame(true)} />}

      {startGame && (
        <div className="mx-auto max-w-6xl">
          {/* HEADER */}
          <div className="flex flex-col items-center gap-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 backdrop-blur-md sm:gap-3 sm:px-5">
              <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>

              <span className="text-sm font-bold tracking-[0.15em] text-cyan-300 max-md:text-xs">
                JAPANESE WORD GAME
              </span>
            </div>

            <h1 className="font-jaro text-5xl uppercase tracking-[0.15em] text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)] max-md:text-4xl">
              Shiritori
            </h1>
          </div>

          {/* GRID */}
          <div className="mt-10 flex gap-5 max-md:flex-col">
            {/* LEFT SIDE */}
            <div className="flex w-[320px] flex-col gap-5 max-md:w-full max-md:flex-row">
              {/* SCORE */}
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="absolute inset-0 bg-linear-to-br from-yellow-400/20 to-orange-400/10"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="font-rampart text-lg text-white/60">スコア</p>

                    <IoStar className="text-3xl text-yellow-300" />
                  </div>

                  <h2 className="mt-6 font-jaro text-6xl text-white max-md:text-5xl">
                    {score}
                  </h2>
                </div>
              </div>

              {/* TIMER */}
              <div className="relative flex-1 overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
                <div className="absolute inset-0 bg-linear-to-br from-green-400/20 to-emerald-400/10"></div>

                <div className="relative z-10">
                  <div className="flex items-center justify-between">
                    <p className="font-rampart text-lg text-white/60">
                      タイマー
                    </p>

                    <IoTimer className="text-3xl text-green-300" />
                  </div>

                  <h2 className="mt-6 font-jaro text-5xl text-white max-md:text-4xl">
                    {formattedTime}
                  </h2>

                  <div className="mt-6 h-3 w-full overflow-hidden rounded-full bg-black/20">
                    <div
                      className="h-full rounded-full bg-linear-to-r from-cyan-400 to-blue-500 transition-all duration-1000"
                      style={{ width: `${progressWidth}%` }}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div className="flex flex-1 flex-col gap-5">
              {/* CURRENT WORD */}
              <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
                <div className="absolute inset-0 bg-linear-to-br from-cyan-400/20 to-blue-400/10"></div>

                <div className="relative z-10">
                  <p className="mb-6 font-rampart text-lg text-white/60">
                    今の言葉
                  </p>

                  <h2 className="mt-2 break-all font-jaro text-5xl tracking-wide text-white max-md:text-3xl">
                    {currentWord}
                  </h2>

                  <div className="mt-8 inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/20 px-5 py-3">
                    <span className="text-xs text-gray-300">NEXT LETTER</span>

                    <span className="text-2xl font-black text-cyan-400">
                      {normalizeKana(currentWord.slice(-1))}
                    </span>
                  </div>
                </div>
              </div>

              {/* INPUT */}
              <form
                onSubmit={handleSubmit}
                className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-linear-to-br from-violet-400/20 to-indigo-400/10"></div>

                <div className="relative z-10 flex gap-4 max-md:flex-col">
                  <input
                    type="text"
                    lang="ja"
                    autoComplete="off"
                    placeholder="ひらがなを入力..."
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="flex-1 rounded-2xl border border-white/10 bg-black/20 px-5 py-4 text-lg text-white outline-none transition-all placeholder:text-gray-500 focus:border-cyan-400"
                  />

                  <button
                    type="submit"
                    className="cursor-pointer rounded-2xl bg-cyan-400 px-8 py-4 font-jaro font-black uppercase tracking-wide text-black transition-all hover:scale-105"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>

          {/* MESSAGE */}
          {message && (
            <div className="relative mt-5 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur-2xl">
              {/* BACKGROUND */}
              <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 via-transparent to-violet-500/10"></div>

              <div className="relative z-10 flex items-center gap-5">
                {/* STATUS ICON */}
                <div
                  className={`flex h-16 w-16 items-center justify-center rounded-3xl border text-2xl shadow-lg ${
                    message.includes("✅")
                      ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300 shadow-emerald-400/10"
                      : message.includes("❌")
                        ? "border-red-400/20 bg-red-400/10 text-red-300 shadow-red-400/10"
                        : "border-yellow-400/20 bg-yellow-400/10 text-yellow-300 shadow-yellow-400/10"
                  }`}
                >
                  {message.includes("✅")
                    ? "✓"
                    : message.includes("❌")
                      ? "!"
                      : "⏳"}
                </div>

                {/* TEXT */}
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400"></div>

                    <span className="text-xs font-bold tracking-[0.3em] text-gray-300 uppercase">
                      Pesan
                    </span>
                  </div>

                  <h3 className="mt-2 text-xl font-black tracking-wide text-white max-md:text-lg">
                    {message}
                  </h3>
                </div>
              </div>
            </div>
          )}

          {/* USED WORDS */}
          <div className="relative mt-5 w-full overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl">
            <div className="absolute inset-0 bg-linear-to-br from-pink-400/20 to-rose-400/10"></div>

            <div className="relative z-10">
              <div className="flex items-center justify-between max-md:flex-col max-md:items-start max-md:gap-4">
                <div>
                  <p className="font-rampart text-lg text-white/60">
                    使った言葉
                  </p>

                  <h2 className="font-jaro text-3xl uppercase tracking-wide text-white max-md:text-2xl">
                    Kosakata yang sudah dipakai
                  </h2>
                </div>

                <div className="rounded-md border border-white/10 bg-black/20 px-6 py-2 text-base font-bold tracking-[0.15em] text-pink-300">
                  {usedWords.length}
                </div>
              </div>

              <div className="mt-6 flex flex-wrap gap-3">
                {usedWords.map((word, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-black/20 px-4 py-2 text-sm font-bold text-white transition-all hover:border-cyan-400"
                  >
                    {word}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
