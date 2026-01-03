import { FaStar, FaBookmark } from "react-icons/fa";

export default function AnimeCard({ anime, onClick }) {
  if (!anime) return null;

  return (
    <div
      onClick={onClick}
      className="
        group
        cursor-pointer
        transition
        duration-300
        hover:-translate-y-1
      "
    >
      {/* POSTER */}
      <div
        className="
          relative
          aspect-[2/3]
          w-full
          max-w-[250px]
          mx-auto
          rounded-md
          overflow-hidden
          bg-neutral-200 dark:bg-neutral-800
          transition
          duration-300
          group-hover:shadow-xl
          group-hover:shadow-black/40
        "
      >
        <img
          src={anime.images?.jpg?.image_url}
          alt={anime.title}
          className="w-full h-full object-cover"
        />

        {/* HOVER OVERLAY */}
        <div
          className="
            absolute inset-0
            bg-gradient-to-t from-black/95 via-black/70 to-transparent
            opacity-0
            group-hover:opacity-100
            transition duration-300
            flex flex-col justify-end
            p-3
          "
        >
          <h3 className="text-lg font-semibold text-white line-clamp-2">
            {anime.title}
          </h3>

          <div className="flex items-center gap-2 text-sm text-neutral-300 mt-1">
            <FaStar className="text-yellow-400" />
            {anime.score ?? "-"}
            <span>•</span>
            {anime.episodes ?? "?"} Ep
          </div>

          <p className="text-[11px] text-neutral-400 mt-1 line-clamp-2">
            {anime.synopsis || "No description available."}
          </p>

          <div className="flex gap-3 text-white text-sm mt-2">
            <FaBookmark />
          </div>
        </div>
      </div>

      {/* INFO BAWAH POSTER */}
      <div className="mt-3 w-full text-center">
        <p className="text-lg font-semibold text-neutral-900 dark:text-white leading-snug line-clamp-2">
          {anime.title}
        </p>

        {/* RATING + TYPE */}
        <div className="flex justify-center items-center gap-2 mt-1 text-sm text-neutral-600 dark:text-neutral-400">
          <FaStar className="text-yellow-400 text-[13px]" />
          <span>{anime.score ?? "-"}</span>
          <span>•</span>
          <span>{anime.type ?? "TV"}</span>
        </div>

        {/* GENRE */}
        <p className="text-[13px] text-neutral-500 dark:text-neutral-500 mt-0.5 line-clamp-1">
          {anime.genres?.map((g) => g.name).join(" • ") || "Action • Fantasy"}
        </p>
      </div>
    </div>
  );
}