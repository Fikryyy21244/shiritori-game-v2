import {
  FaClock,
  FaGamepad,
  FaPlay,
  FaShuffle,
  FaVolumeHigh,
} from "react-icons/fa6";

import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function PlayPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full my-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-green-400/20 bg-green-400/10 px-5 py-2 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-green-400 animate-pulse"></div>

          <span className="text-sm font-bold tracking-[0.2em] text-green-300">
            GAME LOBBY
          </span>
        </div>

        <h1 className="font-jaro text-6xl uppercase tracking-[0.2em] text-green-400 drop-shadow-[0_0_25px_rgba(74,222,128,0.35)]">
          Shiritori
        </h1>

        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Atur mode permainan dan mulai bermain Shiritori bahasa Jepang.
        </p>
      </div>

      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="group flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-yellow-400/30 hover:bg-white/10 cursor-pointer"
        >
          <FaArrowLeftLong className="text-green-300 transition-transform duration-300 group-hover:-translate-x-1" />

          <span className="font-semibold text-white group-hover:text-green-300 ">
            Kembali
          </span>
        </button>
      </div>

      {/* Main Grid */}
      <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-[1.1fr_0.8fr]">
        {/* Left */}
        <div className="space-y-6">
          {/* Game Mode */}
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="absolute -top-12 -right-12 h-44 w-44 rounded-full bg-green-400/10 blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10 text-2xl text-green-300">
                  <FaGamepad />
                </div>

                <div>
                  <h2 className="text-3xl font-bold text-white">Game Mode</h2>

                  <p className="text-gray-400">
                    Pilih mode permainan Shiritori
                  </p>
                </div>
              </div>

              {/* Modes */}
              <div className="mt-6 grid gap-4 md:grid-cols-2">
                <button className="group rounded-3xl border border-green-400/30 bg-green-400/10 p-5 text-left transition-all duration-300 hover:scale-[1.02]">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-green-300">
                      Classic
                    </h3>

                    <div className="rounded-full bg-green-400 px-3 py-1 text-xs font-bold text-black">
                      ACTIVE
                    </div>
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-gray-300">
                    Main tanpa batas waktu dan santai untuk belajar kosakata.
                  </p>
                </button>

                <button className="group rounded-3xl border border-white/10 bg-black/20 p-5 text-left transition-all duration-300 hover:border-yellow-400/30 hover:bg-white/10">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-white">
                      Time Attack
                    </h3>

                    <FaClock className="text-yellow-300" />
                  </div>

                  <p className="mt-3 text-sm leading-relaxed text-gray-400">
                    Jawab secepat mungkin sebelum waktu habis.
                  </p>
                </button>
              </div>
            </div>
          </div>

          {/* Settings */}
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>

            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white">Pengaturan</h2>

              <p className="mt-2 text-gray-400">
                Atur permainan sebelum mulai bermain
              </p>

              <div className="mt-7 space-y-5">
                {/* Timer */}
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <h3 className="text-lg font-bold text-white">Timer</h3>

                      <p className="text-sm text-gray-400">
                        Aktifkan batas waktu permainan
                      </p>
                    </div>

                    <label className="relative inline-flex cursor-pointer items-center">
                      <input type="checkbox" className="peer sr-only" />

                      <div className="peer h-7 w-14 rounded-full bg-gray-700 transition-all after:absolute after:left-[4px] after:top-[4px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-green-400 peer-checked:after:translate-x-7"></div>
                    </label>
                  </div>
                </div>

                {/* Sound */}
                <div className="rounded-3xl border border-white/10 bg-black/20 p-5">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-cyan-400/10 text-cyan-300">
                        <FaVolumeHigh />
                      </div>

                      <div>
                        <h3 className="text-lg font-bold text-white">
                          Sound Effect
                        </h3>

                        <p className="text-sm text-gray-400">
                          Aktifkan suara game
                        </p>
                      </div>
                    </div>

                    <button className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-sm font-bold text-cyan-300">
                      ON
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div className="space-y-6">
          {/* Preview */}
          <div className="relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl">
            <div className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-yellow-400/10 blur-3xl"></div>

            <div className="relative z-10 flex flex-col items-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-4xl bg-green-400/10 text-2xl text-green-300 shadow-lg shadow-green-400/10">
                <FaShuffle />
              </div>

              <h2 className="mt-6 text-2xl font-black text-white">
                Ready to Play?
              </h2>

              <p className="mt-3 leading-relaxed text-gray-300">
                Mulai permainan Shiritori dan lihat seberapa banyak kosakata
                Jepang yang kamu ketahui.
              </p>

              {/* Sample */}
              <div className="mt-8 flex items-center gap-3">
                {["し", "り", "と", "り"].map((char, index) => (
                  <div
                    key={index}
                    className="rounded-2xl border border-white/10 bg-black/30 px-5 py-4 text-2xl font-black text-white"
                  >
                    {char}
                  </div>
                ))}
              </div>

              {/* Start */}
              <button className="group mt-10 flex w-full items-center justify-center gap-4 rounded-3xl bg-green-400 px-7 py-5 text-sm font-black text-black transition-all duration-300 hover:scale-[1.02] hover:bg-green-300 hover:shadow-2xl hover:shadow-green-400/30 cursor-pointer">
                <FaPlay className="transition-transform duration-300 group-hover:translate-x-1" />
                START GAME
              </button>
            </div>
          </div>

          {/* Info */}
          <div className="rounded-4xl border border-yellow-400/20 bg-yellow-400/10 p-6 backdrop-blur-xl">
            <h3 className="text-xl font-bold text-yellow-300">Tips</h3>

            <p className="mt-3 leading-relaxed text-gray-200">
              Gunakan kata panjang agar permainan lebih menantang dan hindari
              kata yang berakhir dengan 「ん」.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
