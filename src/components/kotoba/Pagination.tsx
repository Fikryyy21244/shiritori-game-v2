type Props = {
  currentPage: number;
  totalPages: number;
  onChange: (page: number) => void;
};

export default function Pagination({
  currentPage,
  totalPages,
  onChange,
}: Props) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-10 flex items-center justify-center gap-3 flex-wrap">
      <button
        onClick={() => onChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white disabled:opacity-40 cursor-pointer"
      >
        Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => i + 1)
        .filter(
          (page) =>
            page === 1 ||
            page === totalPages ||
            Math.abs(page - currentPage) <= 1,
        )
        .map((page) => (
          <button
            key={page}
            onClick={() => onChange(page)}
            className={`h-12 w-12 rounded-2xl font-bold ${
              currentPage === page
                ? "bg-cyan-400 text-black"
                : "border border-white/10 bg-white/5 text-white cursor-pointer"
            }`}
          >
            {page}
          </button>
        ))}

      <button
        onClick={() => onChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="rounded-2xl border border-white/10 bg-white/5 px-5 py-3 text-white disabled:opacity-40 cursor-pointer"
      >
        Next
      </button>
    </div>
  );
}
