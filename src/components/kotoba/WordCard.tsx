import { FaBookOpen } from "react-icons/fa6";

type Props = {
  word: string;
  meaning: string;
  category: string;
};

export default function WordCard({ word, meaning, category }: Props) {
  return (
    <div className="group relative overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-cyan-400/30 hover:bg-white/10">
      <div className="absolute inset-0 bg-linear-to-br from-cyan-400/20 via-blue-500/10 to-transparent opacity-70"></div>

      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-3xl transition-all duration-300 group-hover:scale-125"></div>

      <div className="relative z-10">
        <div className="flex items-start justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-black/20 text-xl text-white">
            <FaBookOpen />
          </div>

          <div className="rounded-full border border-cyan-400/20 bg-cyan-400/10 px-3 py-1 text-xs font-bold tracking-[0.2em] text-cyan-300">
            {category}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-3xl font-black leading-tight text-white wrap-break-word max-md:text-2xl max-sm:text-xl">
            {word}
          </h2>

          <p className="mt-4 leading-relaxed text-gray-300">{meaning}</p>
        </div>
      </div>
    </div>
  );
}
