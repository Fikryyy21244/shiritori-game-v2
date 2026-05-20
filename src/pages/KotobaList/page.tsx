import { FaBookOpen, FaMagnifyingGlass } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const kotobaList = [
  {
    word: "ねこ",
    romaji: "Neko",
    meaning: "Kucing",
    category: "Animal",
    color: "from-pink-400/20 to-rose-400/10",
  },
  {
    word: "いぬ",
    romaji: "Inu",
    meaning: "Anjing",
    category: "Animal",
    color: "from-cyan-400/20 to-blue-400/10",
  },
  {
    word: "さくら",
    romaji: "Sakura",
    meaning: "Bunga Sakura",
    category: "Nature",
    color: "from-pink-300/20 to-fuchsia-400/10",
  },
  {
    word: "やま",
    romaji: "Yama",
    meaning: "Gunung",
    category: "Nature",
    color: "from-green-400/20 to-emerald-400/10",
  },
  {
    word: "でんしゃ",
    romaji: "Densha",
    meaning: "Kereta",
    category: "Transport",
    color: "from-yellow-400/20 to-orange-400/10",
  },
  {
    word: "みず",
    romaji: "Mizu",
    meaning: "Air",
    category: "Object",
    color: "from-sky-400/20 to-cyan-400/10",
  },
];

export default function KotobaListPage() {
  const navigate = useNavigate();

  return (
    <div className="w-full my-10  ">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></div>

          <span className="text-sm font-bold tracking-[0.2em] text-cyan-300">
            WORD COLLECTION
          </span>
        </div>

        <h1 className="font-jaro text-6xl uppercase tracking-[0.2em] text-cyan-400 drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]">
          Kotoba List
        </h1>

        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Kumpulan kosakata bahasa Jepang yang bisa digunakan untuk bermain
          Shiritori.
        </p>
      </div>

      {/* Back Button */}
      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="group flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-yellow-400/30 hover:bg-white/10 cursor-pointer"
        >
          <FaArrowLeftLong className="text-cyan-300 transition-transform duration-300 group-hover:-translate-x-1" />

          <span className="font-semibold text-white group-hover:text-cyan-300 ">
            Kembali
          </span>
        </button>
      </div>

      {/* Search */}
      <div className="relative mt-5 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="relative z-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
          <FaMagnifyingGlass className="text-cyan-300 text-lg" />

          <input
            type="text"
            placeholder="Cari kosakata Jepang..."
            className="w-full bg-transparent text-white outline-none placeholder:text-gray-500"
          />
        </div>
      </div>

      {/* Categories */}
      <div className="mt-6 flex flex-wrap gap-3">
        {["All", "Animal", "Nature", "Transport", "Object"].map(
          (category, index) => (
            <button
              key={index}
              className={`rounded-full px-5 py-2 text-sm font-bold transition-all duration-300 ${
                index === 0
                  ? "bg-cyan-400 text-black"
                  : "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
              }`}
            >
              {category}
            </button>
          ),
        )}
      </div>

      {/* Word Grid */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
        {kotobaList.map((kotoba, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10 "
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${kotoba.color} opacity-70`}
            ></div>

            {/* Blur */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-300 group-hover:scale-125"></div>

            <div className="relative z-10 flex h-full flex-col justify-between">
              {/* Top */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/20 text-xl text-white">
                  <FaBookOpen />
                </div>

                <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-cyan-300">
                  {kotoba.category}
                </div>
              </div>

              {/* Content */}
              <div className="mt-8">
                <h2 className="text-5xl font-black text-white">
                  {kotoba.word}
                </h2>

                <p className="mt-2 text-lg font-semibold text-cyan-300">
                  {kotoba.romaji}
                </p>

                <p className="mt-4 leading-relaxed text-gray-300">
                  {kotoba.meaning}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative mt-10 overflow-hidden rounded-4xl border border-cyan-400/20 bg-cyan-400/10 p-8 backdrop-blur-xl">
        <div className="absolute -bottom-10 -left-10 h-40 w-40 rounded-full bg-cyan-300/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col items-center text-center gap-4">
          <h3 className="text-4xl font-black text-white">日本語を学ぼう</h3>

          <p className="max-w-2xl leading-relaxed text-gray-200">
            Semakin banyak kosakata yang kamu hafal, semakin lama kamu bisa
            bertahan dalam permainan Shiritori.
          </p>

          <div className="mt-2 rounded-full border border-cyan-400/20 bg-cyan-400/10 px-5 py-2 text-sm font-bold tracking-[0.2em] text-cyan-300">
            KEEP LEARNING ✨
          </div>
        </div>
      </div>
    </div>
  );
}
