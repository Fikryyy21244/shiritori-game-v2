import DragScroll from "./DragScroll";

type Props = {
  title: string;
  items: string[];
  selected: string;
  onSelect: (value: string) => void;
};

export default function FilterBar({ title, items, selected, onSelect }: Props) {
  return (
    <div>
      <p className="mb-3 text-sm font-bold tracking-[0.2em] text-cyan-300 ">
        {title}
      </p>

      <DragScroll>
        {items.map((item) => (
          <button
            key={item}
            onClick={() => onSelect(item)}
            className={`shrink-0 rounded-2xl px-5 py-3 text-sm font-bold transition-all duration-300 cursor-pointer ${
              selected === item
                ? "bg-cyan-400 text-black shadow-[0_0_25px_rgba(34,211,238,0.35)]"
                : "border border-white/10 bg-white/5 text-gray-300 hover:border-cyan-400/30 hover:bg-cyan-400/10 hover:text-cyan-300"
            }`}
          >
            {item}
          </button>
        ))}
      </DragScroll>
    </div>
  );
}
