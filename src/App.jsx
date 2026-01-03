import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AnimeFetch from "./pages/AnimeFetch";
import AnimeAxios from "./pages/AnimeAxios";

function App() {
  const [search, setSearch] = useState("");

  return (
    <div className="min-h-screen bg-white dark:bg-neutral-900 transition-colors duration-300">
      <Navbar />

      {/* SEARCH BAR */}
      <div className="px-6 py-4 border-b border-neutral-200 dark:border-neutral-800">
        <input
          type="text"
          placeholder="Cari anime..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="
            w-full
            px-4 py-3
            rounded-md
            bg-neutral-100 dark:bg-neutral-800
            text-black dark:text-white
            outline-none
            focus:ring-2 focus:ring-orange-500
            transition
          "
        />
      </div>

      <AnimeFetch search={search} />
      <AnimeAxios search={search} />
      <Footer />
    </div>
  );
}

export default App;