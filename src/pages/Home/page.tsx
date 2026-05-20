const homeContents = [
  {
    title: "Main",
    jp: "ゲーム",
    desc: "Mulai permainan Shiritori dan sambung kata Jepang.",
    glow: "from-yellow-400/20 to-orange-400/10",
    span: "row-span-2",
    href: "/main",
  },
  {
    title: "List Kotoba",
    jp: "言葉リスト",
    desc: "Lihat kumpulan kosakata untuk latihan Shiritori.",
    glow: "from-red-400/20 to-pink-400/10",
    span: "",
    href: "/list-kotoba",
  },
  {
    title: "Cara Bermain",
    jp: "遊び方",
    desc: "Pelajari aturan dasar permainan Shiritori.",
    glow: "from-violet-400/20 to-indigo-400/10",
    span: "row-span-2",
    href: "/cara-bermain",
  },
  {
    title: "Tentang",
    jp: "について",
    desc: "Informasi tentang game dan developer.",
    glow: "from-cyan-400/20 to-blue-400/10",
    span: "",
    href: "/tentang",
  },
];

export default function Home() {
  return (
    <div className="w-full my-10">
      {/* Header */}
      <div className="flex flex-col items-center text-center gap-4">
        <div className="inline-flex items-center gap-3 rounded-full border border-yellow-400/20 bg-yellow-400/10 px-5 py-2 backdrop-blur-md">
          <div className="h-2 w-2 rounded-full bg-yellow-400 animate-pulse"></div>

          <span className="text-sm font-bold tracking-[0.2em] text-yellow-300">
            JAPANESE WORD GAME
          </span>
        </div>

        <h1 className="font-jaro text-6xl uppercase tracking-[0.2em] text-yellow-400 drop-shadow-[0_0_25px_rgba(250,204,21,0.35)]">
          Shiritori
        </h1>
      </div>

      {/* Grid Menu */}
      <div className="mt-10 grid h-110 grid-cols-1 gap-5 md:grid-cols-3 md:grid-rows-2">
        {homeContents.map((c, index) => (
          <a
            key={index}
            href={c.href}
            className={`group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-7 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-yellow-400/30 hover:bg-white/10 ${c.span}`}
          >
            {/* Glow */}
            <div
              className={`absolute inset-0 bg-linear-to-br ${c.glow} opacity-70`}
            ></div>

            {/* Blur Circle */}
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-300 group-hover:scale-125"></div>

            {/* Content */}
            <div className="relative z-10 flex h-full flex-col justify-between">
              <div className="flex items-start justify-between">
                <div>
                  <p className="font-rampart text-lg text-white/60">{c.jp}</p>

                  <h2 className="mt-1 font-jaro text-3xl uppercase tracking-wide text-white">
                    {c.title}
                  </h2>
                </div>

                <div className="rounded-full border border-white/10 bg-black/20 px-3 py-1 text-xs font-bold tracking-[0.2em] text-yellow-300">
                  MENU
                </div>
              </div>

              <div className="space-y-5">
                <p className="max-w-xs leading-relaxed text-gray-300">
                  {c.desc}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
