import { FaGithub, FaGamepad, FaCode, FaHeart } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function AboutPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full my-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-pink-400/20 bg-pink-400/10 px-5 py-2 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-pink-400 animate-pulse"></div>

          <span className="text-sm max-sm:text-xs font-bold tracking-[0.2em] text-pink-300">
            ABOUT PROJECT
          </span>
        </div>

        <h1 className="font-jaro text-6xl max-sm:text-5xl uppercase tracking-[0.2em] text-pink-400 drop-shadow-[0_0_25px_rgba(244,114,182,0.35)]">
          Tentang
        </h1>

        <p className="max-w-2xl max-sm:text-sm text-gray-300 leading-relaxed">
          Informasi mengenai project Shiritori Game dan tujuan dibuatnya
          aplikasi ini.
        </p>
      </div>

      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="group flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-yellow-400/30 hover:bg-white/10 cursor-pointer"
        >
          <FaArrowLeftLong className="text-pink-300 transition-transform duration-300 group-hover:-translate-x-1 max-sm:text-sm" />

          <span className="font-semibold text-white group-hover:text-pink-300 max-sm:text-sm ">
            Kembali
          </span>
        </button>
      </div>

      {/* Hero */}
      <div className="relative mt-10 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        {/* Glow */}
        <div className="absolute -top-16 -right-16 h-60 w-60 rounded-full bg-pink-400/10 blur-3xl"></div>

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_1.2fr] items-center">
          {/* Left */}
          <div className="flex flex-col gap-5">
            <div className="w-fit rounded-full border border-pink-400/20 bg-pink-400/10 px-4 py-1 text-sm font-bold tracking-[0.2em] text-pink-300 max-sm:text-xs">
              SHIRITORI GAME
            </div>

            <h2 className="text-5xl max-sm:text-4xl font-black leading-tight text-white">
              Japanese Word Chain Game
            </h2>

            <p className="leading-relaxed text-gray-300 max-sm:text-sm">
              Shiritori Game adalah permainan sambung kata bahasa Jepang dengan
              tampilan modern anime style UI yang dibuat untuk belajar kosakata
              Jepang menjadi lebih menyenangkan dan interaktif.
            </p>

            <div className="flex flex-wrap gap-3 pt-2">
              <div className="rounded-2xl max-sm:text-sm border border-cyan-400/20 bg-cyan-400/10 px-4 py-2 text-cyan-300">
                React
              </div>

              <div className="rounded-2xl max-sm:text-sm border border-yellow-400/20 bg-yellow-400/10 px-4 py-2 text-yellow-300">
                TailwindCSS
              </div>
            </div>
          </div>

          {/* Right */}
          <div className="grid grid-cols-2 gap-5">
            <div className="group rounded-4xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-pink-400/30 hover:bg-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-pink-400/10 text-2xl text-pink-300">
                <FaGamepad />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white max-sm:text-xl">
                Gameplay
              </h3>

              <p className="mt-2 leading-relaxed text-gray-400 max-sm:text-sm">
                Belajar bahasa Jepang sambil bermain sambung kata.
              </p>
            </div>

            <div className="group rounded-4xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-cyan-400/10 text-2xl text-cyan-300">
                <FaHeart />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white max-sm:text-xl">
                Learning
              </h3>

              <p className="mt-2 leading-relaxed text-gray-400 max-sm:text-sm">
                Membantu menghafal kosakata Jepang lebih mudah.
              </p>
            </div>

            <div className="group rounded-4xl border border-white/10 bg-black/30 p-6 transition-all duration-300 hover:-translate-y-2 hover:border-green-400/30 hover:bg-white/10">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-green-400/10 text-2xl text-green-300">
                <FaGithub />
              </div>

              <h3 className="mt-5 text-2xl font-bold text-white max-sm:text-xl">
                Open Source
              </h3>

              <p className="mt-2 leading-relaxed text-gray-400 max-sm:text-sm">
                Dibuat menggunakan React dan TailwindCSS.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative mt-10 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-pink-400/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center text-center gap-4">
          <h3 className="text-4xl font-black text-white max-sm:text-3xl">
            しりとりゲーム
          </h3>

          <p className="max-w-2xl leading-relaxed text-gray-300 max-sm:text-md">
            “Belajar bahasa Jepang tidak harus membosankan. Dengan permainan,
            belajar menjadi lebih seru dan interaktif.”
          </p>

          <div className="mt-2 rounded-full border border-pink-400/20 bg-pink-400/10 px-5 py-2 text-sm font-bold tracking-[0.2em] text-pink-300 ">
            MADE WITH ❤️
          </div>
        </div>
      </div>
    </div>
  );
}
