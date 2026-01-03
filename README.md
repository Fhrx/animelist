# 🎌 AnimeList - React JS API Fetching Project

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Axios](https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=axios&logoColor=white)

AnimeList adalah aplikasi web berbasis **React JS** yang menampilkan daftar anime secara real-time dengan mengonsumsi data dari Jikan API (MyAnimeList). Project ini dirancang sebagai media pembelajaran untuk mendalami teknik *data fetching* menggunakan dua pendekatan populer: **Fetch API** dan **Axios**.

## 📌 Tujuan Utama
* Memahami alur *request* dan *response* data dari API publik.
* Implementasi method **GET** pada ekosistem React.
* Komparasi langsung antara penggunaan **Fetch API** dan **Axios**.
* Pengelolaan state kompleks menggunakan **React Hooks** (`useState`, `useEffect`).
* Penerapan UI adaptif dengan fitur **Dark/Light Mode**.

---

## 🛠️ Teknologi yang Digunakan
* **Core:** React JS
* **Styling:** Tailwind CSS
* **Icons:** React Icons
* **HTTP Clients:** Fetch API & Axios
* **API Source:** [Jikan API](https://jikan.moe/) (MyAnimeList API)

---

## 📡 Metode Fetching Data
Project ini memisahkan metode pengambilan data untuk tujuan demonstrasi:

1.  **Fetch API:** Digunakan untuk mengambil data **Anime Populer**.
    * *Endpoint:* `https://api.jikan.moe/v4/top/anime`
2.  **Axios:** Digunakan untuk mengambil data **Anime Terbaru**.
    * *Endpoint:* `https://api.jikan.moe/v4/seasons/now`

---

## ✨ Fitur Unggulan
-   🔍 **Pencarian Real-time:** Cari anime favorit berdasarkan judul.
-   🌓 **Dual Theme:** Dukungan penuh untuk Mode Gelap dan Terang.
-   🪟 **Detail Modal:** Popup informatif berisi rating, genre, sinopsis, dan tombol bookmark.
-   🔖 **Bookmark:** Tandai anime yang ingin ditonton nanti.
-   🚫 **Smart Empty State:** Pesan informatif dan rekomendasi alternatif saat data tidak ditemukan.
-   📱 **Responsive Design:** Tampilan optimal di berbagai ukuran layar (Mobile, Tablet, Desktop).

---

## 📸 Dokumentasi Interface

### Halaman Utama (Home)
Menampilkan daftar anime dalam bentuk grid card yang elegan.
| Dark Mode | Light Mode |
|---|---|
| ![Dark Mode](./ss/home-dark.png) | ![Light Mode](./ss/home-light.png) |

### Detail & Fitur Lainnya
| Modal Detail | Empty Search State | Footer |
|---|---|---|
| ![Modal](./ss/modal-popup.png) | ![Empty State](./ss/empty-search.png) | ![Footer](./ss/footer.png) |

---

## 📖 Dokumentasi Lengkap
Proses pengembangan, analisis perbedaan Fetch vs Axios, dan alur logika aplikasi telah disusun rapi dalam dokumen berikut:
🔗 **[Baca Dokumentasi di Google Docs](https://docs.google.com/document/d/1D0KuiJjXvdh17OYXmKbA7sB0d0mcGkNOQ0Pl-Kjr62o/edit?usp=sharing)**
