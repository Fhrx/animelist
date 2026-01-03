import { useEffect, useState } from "react";
import axios from "axios";
import AnimeCard from "../components/AnimeCard";
import AnimeModal from "../components/AnimeModal";

export default function AnimeAxios({ search = "" }) {
  const [anime, setAnime] = useState([]);
  const [selectedAnime, setSelectedAnime] = useState(null);

  useEffect(() => {
    axios.get("https://api.jikan.moe/v4/seasons/now")
      .then((res) => setAnime(res.data?.data || []))
      .catch(console.error);
  }, []);

  const filteredAnime = anime.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const isSearching = search.trim() !== "";
  const isEmpty = isSearching && filteredAnime.length === 0;

  return (
    <section className="px-6 pb-16">

      {!isEmpty && (
        <h2 className="text-3xl font-bold mb-4 text-neutral-900 dark:text-white">
          Anime Terbaru
          <span className="ml-2 text-sm text-neutral-500 dark:text-neutral-400">
            (Bagian Axios)
          </span>
        </h2>
      )}

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