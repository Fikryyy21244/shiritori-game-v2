import { useMemo, useState } from "react";
import { FaArrowLeftLong, FaFilter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

import vocabulary from "../../data/vocabulary";

import SearchBox from "../../components/kotoba/SearchBox";
import FilterBar from "../../components/kotoba/FilterBar";
import WordCard from "../../components/kotoba/WordCard";
import Pagination from "../../components/kotoba/Pagination";

type WordType = {
  word: string;
  meaning: string;
};

export default function KotobaListPage() {
  const navigate = useNavigate();

  // FILTER
  const [showFilter, setShowFilter] = useState(false);

  const [selectedFilter, setSelectedFilter] = useState("All");

  const [selectedCategory, setSelectedCategory] = useState("All");

  // SEARCH
  const [search, setSearch] = useState("");

  // PAGINATION
  const [currentPage, setCurrentPage] = useState(1);

  const ITEMS_PER_PAGE = 12;

  // MAIN CATEGORY
  const mainCategories = [
    "All",
    "Salam",
    "Angka",
    "Hitung",
    "Hari",
    "Bulan",
    "Tanggal",
    "Waktu",
    "Tubuh",
    "Warna",
    "Rasa",
    "Ruang Kelas",
    "Kata Sifat-i",
    "Kata Sifat-na",
    "Kata Kerja",
    "JFT A1",
    "JFT A2",
  ];

  // SUB CATEGORY
  const subCategories = useMemo(() => {
    const categories = Object.keys(vocabulary);

    if (selectedFilter === "JFT A1") {
      return categories.filter((category) => category.includes("A1"));
    }

    if (selectedFilter === "JFT A2") {
      return categories.filter((category) => category.includes("A2"));
    }

    return [];
  }, [selectedFilter]);

  // WORDS
  const words: WordType[] = useMemo(() => {
    if (selectedFilter === "All") {
      return vocabulary["All"] || [];
    }

    if (selectedFilter !== "JFT A1" && selectedFilter !== "JFT A2") {
      return vocabulary[selectedFilter] || [];
    }

    return vocabulary[selectedCategory] || [];
  }, [selectedFilter, selectedCategory]);

  // SEARCH FILTER
  const filteredWords = words.filter(
    (item) =>
      item.word?.toLowerCase().includes(search.toLowerCase()) ||
      item.meaning?.toLowerCase().includes(search.toLowerCase()),
  );

  // PAGINATION
  const totalPages = Math.ceil(filteredWords.length / ITEMS_PER_PAGE);

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;

  const paginatedWords = filteredWords.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE,
  );

  const handleSelectFilter = (category: string) => {
    setCurrentPage(1);
    setSelectedFilter(category);

    if (category === "JFT A1") {
      const firstA1 = Object.keys(vocabulary).find((item) =>
        item.includes("A1"),
      );

      if (firstA1) {
        setSelectedCategory(firstA1);
      }
    } else if (category === "JFT A2") {
      const firstA2 = Object.keys(vocabulary).find((item) =>
        item.includes("A2"),
      );

      if (firstA2) {
        setSelectedCategory(firstA2);
      }
    } else {
      setSelectedCategory("All");
      setShowFilter(false);
    }
  };

  const handleSelectSubFilter = (category: string) => {
    setCurrentPage(1);
    setSelectedCategory(category);
    setShowFilter(false);
  };

  return (
    <div className="my-10 w-full">
      {/* HEADER */}
      <div className="flex flex-col items-center gap-4 text-center">
        <div
          className="
            inline-flex items-center gap-3
            rounded-full border border-cyan-400/20
            bg-cyan-400/10
            px-5 py-2
            backdrop-blur-md
          "
        >
          <div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />

          <span
            className="
              text-sm font-bold
              tracking-[0.2em]
              text-cyan-300
              max-sm:text-xs
            "
          >
            WORD COLLECTION
          </span>
        </div>

        <h1
          className="
            font-jaro text-6xl uppercase
            tracking-[0.2em]
            text-cyan-400
            drop-shadow-[0_0_25px_rgba(34,211,238,0.35)]
            max-md:text-5xl
          "
        >
          Kotoba List
        </h1>

        <p
          className="
            max-w-2xl leading-relaxed
            text-gray-300
            max-sm:text-sm
          "
        >
          Kumpulan kosakata bahasa Jepang untuk bermain Shiritori.
        </p>
      </div>

      {/* BACK */}
      <div className="mt-8">
        <button
          onClick={() => navigate(-1)}
          className="
            group flex w-fit items-center gap-3
            rounded-2xl border border-white/10
            bg-white/5
            px-5 py-3
            backdrop-blur-xl
            transition-all duration-300
            hover:-translate-x-1
            hover:border-yellow-400/30
            hover:bg-white/10
            max-sm:text-sm
          "
        >
          <FaArrowLeftLong
            className="
              text-cyan-300
              transition-transform duration-300
              group-hover:-translate-x-1
            "
          />

          <span
            className="
              font-semibold text-white
              group-hover:text-cyan-300
            "
          >
            Kembali
          </span>
        </button>
      </div>

      {/* SEARCH */}
      <SearchBox
        value={search}
        onChange={(value) => {
          setCurrentPage(1);
          setSearch(value);
        }}
      />
      {/* FILTER BUTTON */}
      <div className="mt-6">
        <button
          onClick={() => setShowFilter(!showFilter)}
          className="
            flex items-center gap-3
            rounded-2xl border border-cyan-400/20
            bg-cyan-400/10
            px-5 py-3
            text-sm font-bold
            tracking-[0.15em]
            text-cyan-300
            backdrop-blur-xl
            transition-all duration-300
            hover:bg-cyan-400/20
            max-sm:text-xs
          "
        >
          <FaFilter />
          FILTER
        </button>
      </div>

      {/* FILTER CONTENT */}
      {showFilter && (
        <div className="mt-5 space-y-5">
          {/* MAIN FILTER */}
          <FilterBar
            title="CATEGORY"
            items={mainCategories}
            selected={selectedFilter}
            onSelect={handleSelectFilter}
          />

          {/* SUB FILTER */}
          {(selectedFilter === "JFT A1" || selectedFilter === "JFT A2") && (
            <FilterBar
              title="LESSON"
              items={subCategories}
              selected={selectedCategory}
              onSelect={handleSelectSubFilter}
            />
          )}
        </div>
      )}

      {/* WORD GRID */}
      <div
        className="
          mt-10 grid grid-cols-3 gap-5
          max-lg:grid-cols-2
          max-sm:grid-cols-1
        "
      >
        {paginatedWords.map((kotoba, index) => (
          <WordCard
            key={index}
            word={kotoba.word}
            meaning={kotoba.meaning}
            category={
              selectedFilter === "JFT A1" || selectedFilter === "JFT A2"
                ? selectedCategory
                : selectedFilter
            }
          />
        ))}
      </div>

      {/* EMPTY */}
      {filteredWords.length === 0 && (
        <div
          className="
            mt-10 rounded-3xl
            border border-white/10
            bg-white/5
            px-6 py-10
            text-center text-gray-400
            backdrop-blur-xl
          "
        >
          Tidak ada kosakata ditemukan.
        </div>
      )}

      {/* PAGINATION */}
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={setCurrentPage}
      />

      {/* SOURCE DATA */}
      <div className="mt-8 flex justify-center">
        <div
          className="
            max-w-2xl rounded-3xl
            border border-cyan-400/20
            bg-cyan-400/5
            px-6 py-5
            text-center
            backdrop-blur-xl
          "
        >
          <p
            className="
              text-xs font-bold
              tracking-[0.2em]
              text-cyan-300
            "
          >
            SUMBER DATA
          </p>

          <p
            className="
              mt-3 text-sm leading-relaxed
              text-gray-300
              max-sm:text-xs
            "
          >
            Sebagian besar data kosakata pada halaman ini berasal dari
            kontribusi teman seperjuangan belajar bahasa Jepang saya,
            <span className="font-semibold text-cyan-300"> Abang Friendly</span>
            , yang kemudian disusun kembali agar lebih nyaman digunakan untuk
            bermain Shiritori.
          </p>

          <div
            className="
              mt-5 flex flex-wrap items-center
              justify-center gap-3
              text-sm
              max-sm:text-xs
            "
          >
            <a
              href="https://instagram.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl border border-pink-400/20
                bg-pink-400/10
                px-4 py-2
                text-pink-300
                transition-all duration-300
                hover:bg-pink-400/20
              "
            >
              Instagram
            </a>

            <a
              href="https://github.com/username"
              target="_blank"
              rel="noopener noreferrer"
              className="
                rounded-xl border border-white/10
                bg-white/5
                px-4 py-2
                text-gray-200
                transition-all duration-300
                hover:bg-white/10
              "
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
