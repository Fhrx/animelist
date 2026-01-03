import { FaTimes, FaStar, FaBookmark } from "react-icons/fa";

export default function AnimeModal({ anime, onClose }) {
  if (!anime) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
      <div
        className="
          relative
          bg-white dark:bg-neutral-900
          rounded-2xl
          max-w-5xl
          w-full
          grid
          grid-cols-1
          md:grid-cols-3
          gap-6
          p-6
          shadow-2xl
        "
      >
        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="
            absolute
            top-4
            right-4
            text-neutral-500
            hover:text-black
            dark:text-neutral-400
            dark:hover:text-white
            transition
          "
        >
          <FaTimes size={18} />
        </button>

        {/* POSTER */}
        <div className="flex justify-center">
          <img
            src={anime.images?.jpg?.large_image_url}
            alt={anime.title}
            className="rounded-xl w-full max-w-[260px] object-cover shadow-lg"
          />
        </div>

        {/* INFO */}
        <div className="md:col-span-2 space-y-4">
          {/* TITLE */}
          <h2 className="text-2xl font-bold text-neutral-900 dark:text-white">
            {anime.title}
          </h2>

          {/* META */}
          <div className="flex flex-wrap gap-4 text-sm text-neutral-600 dark:text-neutral-400">
            <span className="flex items-center gap-1">
              <FaStar className="text-yellow-400" />
              {anime.score ?? "-"}
            </span>
            <span>{anime.episodes ?? "?"} Episodes</span>
            <span>{anime.status}</span>
            <span>{anime.year}</span>
          </div>

          {/* SYNOPSIS */}
          <p className="text-sm leading-relaxed text-neutral-700 dark:text-neutral-300">
            {anime.synopsis || "No synopsis available."}
          </p>

          {/* GENRES */}
          <div className="flex flex-wrap gap-2">
            {anime.genres?.map((g) => (
              <span
                key={g.mal_id}
                className="
                  px-3
                  py-1
                  rounded-full
                  text-xs
                  bg-neutral-200
                  text-neutral-700
                  dark:bg-neutral-800
                  dark:text-neutral-300
                "
              >
                {g.name}
              </span>
            ))}
          </div>

          {/* ACTION */}
          <button
            className="
              mt-4
              inline-flex
              items-center
              gap-2
              px-5
              py-2.5
              rounded-lg
              bg-indigo-600
              hover:bg-indigo-500
              text-white
              transition
            "
          >
            <FaBookmark />
            Bookmark
          </button>
        </div>
      </div>
    </div>
  );
}