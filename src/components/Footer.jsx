import {
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaDiscord,
  FaEnvelope,
  FaGlobe,
  FaHeart,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="
        bg-neutral-100 dark:bg-neutral-950
        border-t border-neutral-200 dark:border-neutral-800
        text-neutral-700 dark:text-neutral-300
      "
    >
      {/* FULL WIDTH */}
      <div className="px-10 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* BRAND */}
        <div className="space-y-3">
          <h2 className="text-2xl font-extrabold text-orange-500">
            AnimeList
          </h2>
          <p className="text-sm leading-relaxed">
            Platform anime modern untuk melihat anime populer,
            terbaru, rating tertinggi, dan menyimpan favoritmu.
          </p>

          <p className="text-xs text-neutral-500">
            Data diambil dari Jikan API (MyAnimeList).
          </p>
        </div>

        {/* MENU */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Navigasi</h3>
          <ul className="space-y-2 text-sm">
            <li className="hover:text-black dark:hover:text-white cursor-pointer">
              Anime Populer
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">
              Anime Terbaru
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">
              Genre
            </li>
            <li className="hover:text-black dark:hover:text-white cursor-pointer">
              Bookmark
            </li>
          </ul>
        </div>

        {/* INFO */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Informasi</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-center gap-2">
              <FaGlobe /> www.animelist.dev
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope /> support@animelist.dev
            </li>
            <li className="flex items-center gap-2">
              © 2025 AnimeList
            </li>
          </ul>
        </div>

        {/* SOCIAL */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Ikuti Kami</h3>
          <div className="flex gap-4 text-xl">
            <Social icon={<FaGithub />} />
            <Social icon={<FaInstagram />} />
            <Social icon={<FaTwitter />} />
            <Social icon={<FaDiscord />} />
          </div>

          <p className="text-xs text-neutral-500 mt-4">
            Dibuat dengan <FaHeart className="inline text-red-500" /> untuk
            pecinta anime.
          </p>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="border-t border-neutral-200 dark:border-neutral-800 py-4 px-10 text-sm flex justify-between">
        <span>© 2025 AnimeList, Fahri yang bikin mwhehehe</span>
        <span>Powered by Jikan API</span>
      </div>
    </footer>
  );
}

function Social({ icon }) {
  return (
    <button
      className="
        p-2 rounded-full
        bg-neutral-200 dark:bg-neutral-800
        hover:bg-neutral-300 dark:hover:bg-neutral-700
        transition
      "
    >
      {icon}
    </button>
  );
}