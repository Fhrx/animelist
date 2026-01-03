import { useEffect, useState } from "react";
import AnimeCard from "../components/AnimeCard";
import AnimeModal from "../components/AnimeModal";

export default function AnimeFetch({ search = "" }) {
  const [anime, setAnime] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    fetch("https://api.jikan.moe/v4/top/anime")
      .then((res) => res.json())
      .then((data) => setAnime(data?.data || []))
      .catch(console.error);
  }, []);

  const filteredAnime = anime.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const isSearching = search.trim() !== "";
  const isEmpty = isSearching && filteredAnime.length === 0;

  return (
    <section className="px-6 pb-16">

      {/* JUDUL NORMAL */}
      {!isEmpty && (
        <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
          Anime Populer
          <span className="ml-2 text-sm text-neutral-500 dark:text-neutral-400">
            (Bagian Fetch)
          </span>
        </h2>
      )}

     {/* EMPTY STATE */}
{isEmpty && (
  <div className="min-h-[60vh] flex flex-col items-center text-center">
    
    {/* CENTER TEXT */}
    <div className="flex-1 flex flex-col justify-center">
      <h1 className="text-3xl font-bold text-neutral-900 dark:text-white">
        Data dengan judul "{search}" tidak ditemukan.
      </h1>
    </div>

    {/* BOTTOM TEXT */}
    <p className="mb-6 text-sm uppercase tracking-widest text-neutral-400">
      Rekomendasi untuk Anda
    </p>
  </div>
)}

      {/* GRID */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
        {(isEmpty ? anime : filteredAnime).map((item) => (
          <AnimeCard
            key={item.mal_id}
            anime={item}
            onClick={() => setSelectedAnime(item)}
          />
        ))}
      </div>

      {selectedAnime && (
        <AnimeModal
          anime={selectedAnime}
          onClose={() => setSelectedAnime(null)}
        />
      )}
    </section>
  );
}