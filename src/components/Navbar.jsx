import {
  FaSearch,
  FaBookmark,
  FaSun,
  FaMoon,
  FaFire,
  FaClock,
  FaList,
  FaStar,
  FaUser,
  FaBell,
} from "react-icons/fa";
import { useTheme } from "../context/ThemeContext";

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav
      className="
        sticky top-0 z-50
        backdrop-blur-md
        bg-white/90 dark:bg-neutral-900/90
        border-b border-neutral-200 dark:border-neutral-800
      "
    >
      {/* FULL WIDTH – TIDAK CENTER */}
      <div className="flex items-center justify-between px-8 py-4">

        {/* LEFT */}
        <div className="flex items-center gap-10">
          <h1 className="text-2xl font-extrabold text-orange-500 tracking-wide">
            AnimeList
          </h1>

          <div className="hidden lg:flex items-center gap-6 text-sm font-medium">
            <NavItem icon={<FaFire />} label="Populer" />
            <NavItem icon={<FaClock />} label="Terbaru" />
            <NavItem icon={<FaStar />} label="Rating" />
            <NavItem icon={<FaList />} label="Genre" />
            <NavItem icon={<FaUser />} label="Karakter" />
          </div>
        </div>

        {/* RIGHT */}
        <div className="flex items-center gap-5">
          <IconButton icon={<FaSearch />} tooltip="Cari Anime" />
          <IconButton icon={<FaBookmark />} tooltip="Bookmark" />
          <IconButton icon={<FaBell />} tooltip="Notifikasi" />

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="
              relative group
              p-2 rounded-full
              bg-neutral-200 hover:bg-neutral-300
              dark:bg-neutral-800 dark:hover:bg-neutral-700
              text-neutral-800 dark:text-neutral-200
              transition
            "
          >
            {theme === "dark" ? <FaSun /> : <FaMoon />}
            <Tooltip text="Toggle Theme" />
          </button>
        </div>
      </div>
    </nav>
  );
}

/* ===== SMALL COMPONENTS ===== */

function NavItem({ icon, label }) {
  return (
    <button
      className="
        relative group flex items-center gap-2
        text-neutral-700 dark:text-neutral-300
        hover:text-black dark:hover:text-white
        transition
      "
    >
      {icon}
      {label}
      <span
        className="
          absolute left-0 -bottom-1
          h-[2px] w-0
          bg-orange-500
          transition-all
          group-hover:w-full
        "
      />
    </button>
  );
}

function IconButton({ icon, tooltip }) {
  return (
    <button
      className="
        relative group
        text-neutral-700 dark:text-neutral-300
        hover:text-black dark:hover:text-white
        transition
      "
    >
      {icon}
      <Tooltip text={tooltip} />
    </button>
  );
}

function Tooltip({ text }) {
  return (
    <span
      className="
        pointer-events-none
        absolute -bottom-9 left-1/2 -translate-x-1/2
        whitespace-nowrap
        rounded-md
        bg-black text-white
        px-2 py-1
        text-[11px]
        opacity-0 scale-95
        transition
        group-hover:opacity-100 group-hover:scale-100
      "
    >
      {text}
    </span>
  );
}