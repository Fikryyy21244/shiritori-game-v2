import { useLocation, useNavigate } from "react-router-dom";
import { IoRefresh, IoTrophy, IoGameController, IoHome } from "react-icons/io5";

export default function GameOverPage() {
  const location = useLocation();
  const navigate = useNavigate();

  const state = location.state;

  const finalScore = state?.finalScore ?? 0;

  const handlePlayAgain = () => {
    navigate("/main/playing");
    window.location.reload();
  };

  const handleBackHome = () => {
    navigate("/");
  };

  return (
    <div className="relative flex min-h-screen w-full items-center justify-center overflow-hidden px-5 text-white">
      {/* BACKGROUND GLOW */}
      <div className="absolute left-1/2 top-1/2 h-125 w-125 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-400/10 blur-3xl"></div>

      {/* CARD */}
      <div className="relative w-full max-w-xl overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-10 text-center backdrop-blur-2xl">
        {/* TOP DECOR */}
        <div className="absolute inset-0 bg-linear-to-br from-cyan-400/10 via-transparent to-violet-500/10"></div>

        <div className="relative z-10">
          {/* ICON */}
          <div className="mx-auto flex h-24 w-24 max-sm:h-20 max-sm:w-20 items-center justify-center rounded-full border border-cyan-400/20 bg-cyan-400/10">
            <IoGameController className="text-5xl max-md:text-4xl max-sm:text-3xl text-cyan-300" />
          </div>

          {/* TITLE */}
          <h1 className="mt-8 max-md:mt-4 p-2 font-jaro text-6xl tracking-[0.15em] text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)] max-md:text-5xl max-sm:text-4xl">
            GAME OVER
          </h1>

          <p className="mt-3 text-lg uppercase tracking-[0.2em] text-gray-300">
            終わりました。
          </p>

          {/* SCORE CARD */}
          <div className="relative mt-5 overflow-hidden rounded-3xl border border-yellow-400/10 bg-yellow-400/10 p-10">
            <div className="absolute inset-0 bg-linear-to-br from-yellow-300/10 to-orange-400/10"></div>

            <div className="relative z-10">
              <div className="flex flex-col items-center justify-center gap-2 text-yellow-300 ">
                <div className="relative flex h-14 w-14 items-center justify-center overflow-hidden rounded-2xl border border-yellow-300/20 bg-yellow-300/10">
                  <div className="absolute inset-0 bg-linear-to-br from-yellow-200/20 to-orange-400/10"></div>

                  <IoTrophy className="relative z-10 text-3xl text-yellow-300" />
                </div>
              </div>

              <h2 className="font-jaro text-9xl text-white drop-shadow-[0_0_25px_rgba(250,204,21,0.35)] max-md:text-7xl my-4">
                {finalScore}
              </h2>

              <div className="relative flex  items-center justify-center overflow-hidden rounded-2xl border border-yellow-300/20 bg-yellow-300/10">
                <div className="absolute inset-0 bg-linear-to-br from-yellow-200/20 to-orange-400/10"></div>
                <span className="text-sm font-bold tracking-[0.2em] p-2 ">
                  SKOR AKHIR
                </span>
              </div>
            </div>
          </div>

          {/* BUTTONS */}
          <div className="mt-10 max-sm:mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {/* PLAY AGAIN */}
            <button
              onClick={handlePlayAgain}
              className="group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl bg-cyan-400 px-8 py-4 font-jaro text-lg tracking-wide text-black transition-all duration-300 hover:scale-105 hover:bg-cyan-300 sm:w-auto max-sm:text-lg "
            >
              <IoRefresh className="text-2xl max-sm:text-xl transition-transform duration-500 group-hover:rotate-180" />
              MAIN LAGI
            </button>

            {/* HOME */}
            <button
              onClick={handleBackHome}
              className="group inline-flex w-full cursor-pointer items-center justify-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-8 py-4 font-jaro text-lg tracking-wide text-white backdrop-blur-xl transition-all duration-300 hover:scale-105 hover:border-cyan-400 hover:bg-cyan-400/10 sm:w-auto max-sm:text-lg"
            >
              <IoHome className="text-2xl max-sm:text-xl transition-transform duration-300 group-hover:-translate-y-1" />
              BERANDA
            </button>
          </div>

          {/* FOOTER */}
          <p className="mt-8 text-sm text-yellow-200">
            頑張ったね！また挑戦しよう 🔥
          </p>
        </div>
      </div>
    </div>
  );
}
