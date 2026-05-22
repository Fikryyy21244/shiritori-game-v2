import { FaMagnifyingGlass } from "react-icons/fa6";

type Props = {
  value: string;
  onChange: (value: string) => void;
};

export default function SearchBox({ value, onChange }: Props) {
  return (
    <div className="relative mt-5 overflow-hidden rounded-4xl border border-white/10 bg-white/5 p-5 backdrop-blur-xl">
      <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-cyan-400/10 blur-3xl"></div>

      <div className="relative z-10 flex items-center gap-4 rounded-2xl border border-white/10 bg-black/20 px-5 py-4">
        <FaMagnifyingGlass className="text-cyan-300 text-lg max-sm:text-md" />

        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Cari kosakata Jepang..."
          className="w-full bg-transparent text-white outline-none placeholder:text-gray-500 max-sm:text-sm"
        />
      </div>
    </div>
  );
}
