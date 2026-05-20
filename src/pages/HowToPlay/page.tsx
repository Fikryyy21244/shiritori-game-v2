import { FaArrowLeftLong } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const steps = [
  {
    number: "01",
    title: "Mulai Permainan",
    jp: "ゲーム開始",
    desc: "Kamu akan diberikan satu kata dalam bahasa Jepang sebagai awal permainan Shiritori.",
    example: "ねこ",
  },
  {
    number: "02",
    title: "Sambung Kata",
    jp: "言葉をつなぐ",
    desc: "Masukkan kata baru yang dimulai dari huruf terakhir kata sebelumnya.",
    example: "ねこ → こい → いぬ",
  },
  {
    number: "03",
    title: "Jangan Mengulang",
    jp: "同じ言葉は禁止",
    desc: "Kata yang sudah pernah digunakan tidak dapat dipakai kembali.",
    example: "❌ ねこ → こい → ねこ",
  },
  {
    number: "04",
    title: "Hindari 「ん」",
    jp: "「ん」に注意",
    desc: "Jika kata yang kamu masukkan berakhir dengan huruf 「ん」 maka permainan selesai.",
    example: "❌ パン",
  },
];

export default function HowToPlayPage() {
  const navigate = useNavigate();

  return (
    <div className=" w-full my-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>

          <span className="text-sm font-bold tracking-[0.2em] text-yellow-300">
            HOW TO PLAY
          </span>
        </div>

        <h1 className="font-jaro text-6xl uppercase tracking-[0.2em] text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.35)]">
          Cara Bermain
        </h1>

        <p className="max-w-2xl text-gray-300 leading-relaxed">
          Pelajari aturan dasar Shiritori dan coba bertahan selama mungkin
          dengan menyambung kata bahasa Jepang.
        </p>
      </div>

      {/* Back Button */}
      <div className=" mt-8">
        <button
          onClick={() => navigate(-1)}
          className="group flex w-fit items-center gap-3 rounded-2xl border border-white/10 bg-white/5 px-5 py-3 backdrop-blur-xl transition-all duration-300 hover:-translate-x-1 hover:border-yellow-400/30 hover:bg-white/10 cursor-pointer"
        >
          <FaArrowLeftLong className="text-yellow-300 transition-transform duration-300 group-hover:-translate-x-1" />

          <span className="font-semibold text-white group-hover:text-yellow-300 ">
            Kembali
          </span>
        </button>
      </div>

      {/* Hero */}
      <div className="relative mt-8 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        {/* Glow */}
        <div className="absolute -top-14 -right-14 h-52 w-52 rounded-full bg-yellow-400/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col gap-6">
          {/* Badge */}
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-yellow-400 px-4 py-1 text-sm font-bold text-black">
              SHIRITORI
            </span>

            <span className="rounded-full border border-cyan-400/30 bg-cyan-400/10 px-4 py-1 text-sm font-semibold text-cyan-300">
              Japanese Word Chain
            </span>
          </div>

          {/* Title */}
          <div>
            <h2 className="text-4xl font-black leading-tight text-white">
              Sambung Kata Jepang
            </h2>

            <p className="mt-3 max-w-3xl leading-relaxed text-gray-300">
              Shiritori adalah permainan tradisional Jepang dimana kamu harus
              menyambung kata dari huruf terakhir kata sebelumnya.
            </p>
          </div>

          {/* Flow */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {["ねこ", "こい", "いぬ", "ぬま"].map((word, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="rounded-2xl border border-white/10 bg-black/30 px-5 py-3 text-lg font-bold text-white shadow-lg">
                  {word}
                </div>

                {index !== 3 && (
                  <span className="text-2xl text-yellow-400">→</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Rules */}
      <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2">
        {steps.map((step, index) => (
          <div
            key={index}
            className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/30 hover:bg-white/10"
          >
            {/* Glow */}
            <div className="absolute inset-0 bg-linear-to-br from-yellow-400/10 to-orange-400/5 opacity-70"></div>

            {/* Blur */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-300 group-hover:scale-125"></div>

            <div className="relative z-10 flex h-full flex-col justify-between gap-5">
              <div className="flex items-center justify-between">
                <span className="text-6xl font-black text-yellow-400/40">
                  {step.number}
                </span>

                <div className="rounded-full border border-yellow-400/20 bg-yellow-400/10 px-4 py-1 text-xs font-bold tracking-[0.2em] text-yellow-300">
                  RULE
                </div>
              </div>

              <div>
                <p className="font-rampart text-lg text-white/60">{step.jp}</p>

                <h3 className="mt-1 text-3xl font-bold text-white">
                  {step.title}
                </h3>
              </div>

              <p className="leading-relaxed text-gray-300">{step.desc}</p>

              <div className="rounded-2xl border border-white/10 bg-black/30 p-4">
                <p className="mb-2 text-sm text-gray-500">Contoh</p>

                <p className="text-lg font-semibold text-cyan-300">
                  {step.example}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Tips */}
      <div className="relative mt-10 overflow-hidden rounded-4xl border border-yellow-400/20 bg-yellow-400/10 p-7 backdrop-blur-xl">
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="relative z-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div>
            <h3 className="text-3xl font-bold text-yellow-300">Tips Bermain</h3>

            <p className="mt-2 max-w-2xl leading-relaxed text-gray-200">
              Gunakan kosakata yang panjang dan unik agar permainan bisa
              bertahan lebih lama tanpa terkena huruf 「ん」.
            </p>
          </div>

          <button className="rounded-2xl bg-yellow-400 px-7 py-3 font-bold text-black transition-all duration-300 hover:scale-105 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30">
            Start Game
          </button>
        </div>
      </div>
    </div>
  );
}
