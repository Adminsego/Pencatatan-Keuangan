# Dompet Pintar – React Expense Tracker

Dompet Pintar adalah aplikasi pencatat pengeluaran modern berbasis React + Vite. Aplikasi ini menampilkan dashboard finansial interaktif, form transaksi cepat, riwayat pengeluaran, dan halaman laporan untuk membantu mengontrol cash flow personal maupun bisnis.

## 🚀 Fitur Utama

1. **Dashboard Real-Time** – Kartu statistik total pengeluaran, pengeluaran bulan berjalan, dan sebaran kategori.
2. **Form Transaksi Cepat** – Input pengeluaran dengan validasi, pilihan kategori, metode pembayaran, dan catatan.
3. **Riwayat Pengeluaran** – Tabel interaktif dengan badge kategori, format mata uang IDR, dan aksi hapus.
4. **Halaman Laporan** – Insight kategori, ringkasan metode pembayaran, target budgeting, serta transaksi terbesar.
5. **Halaman Pengaturan** – Preferensi notifikasi, tema, keamanan, dan integrasi.
6. **Light & Dark Mode** – Satu klik ganti tema sesuai kenyamanan mata.
7. **UI Gelap Modern** – Tailwind CSS dengan gradien dan glassmorphism untuk pengalaman premium.

## 📦 Teknologi

- **React 18 + Vite 5** untuk pengalaman development super cepat.
- **React Router DOM 6** untuk multi-halaman (Dashboard, Reports, Settings).
- **Tailwind CSS 3** untuk styling utility-first yang konsisten.
- **Lucide React** sebagai ikon modern.
- **Context API + Hooks** untuk penyimpanan state pengeluaran.

## 🛠️ Instalasi

Follow these steps to get the project running on your local machine:

### Prerequisites

Make sure you have Node.js installed (version 16 or higher):

```bash
node --version
npm --version
```

### Langkah Setup

1. **Clone / copy project** dan masuk ke folder proyek ini.

2. **Install dependencies**
   
   ```bash
   npm install
   ```

3. **Jalankan development server**
   
   ```bash
   npm run dev
   ```

4. **Buka browser** ke `http://localhost:5173` (atau URL yang muncul di terminal).

## 📁 Struktur Project

```
dompet-pintar/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── ExpenseForm.jsx
│   │   ├── ExpenseTable.jsx
│   │   └── StatsGrid.jsx
│   ├── context/
│   │   └── ExpenseContext.jsx
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Reports.jsx
│   │   └── Settings.jsx
│   ├── utils/
│   │   └── formatCurrency.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── public/
├── README.md
└── Konfigurasi Vite, Tailwind, PostCSS, ESLint
```

## 🎯 Scripts

- `npm run dev` – Jalankan server dev Vite dengan HMR.
- `npm run build` – Build produksi ke folder `dist/`.
- `npm run preview` – Preview hasil build secara lokal.
- `npm run lint` – Jalankan ESLint.

## 🌟 Halaman

- **Dashboard** (`/`) – Overview pengeluaran, kartu statistik, form input, dan tabel transaksi.
- **Reports** (`/reports`) – Insight kategori, metode pembayaran, target budgeting, dan transaksi terbesar.
- **Settings** (`/settings`) – Pengaturan notifikasi, tema, keamanan, dan integrasi.

## 🎨 Kustomisasi

- **Tambah form field/kategori**: ubah `categoryOptions` & `paymentMethods` di `ExpenseForm.jsx`.
- **State global**: perbarui `initialExpenses`, logika `addExpense`, dsb di `ExpenseContext.jsx`.
- **Tampilan & Tema**: modifikasi utility Tailwind atau extend `tailwind.config.js`. Toggle tema dapat diakses di halaman Settings dan tersimpan di localStorage.
- **Halaman baru**: buat file di `src/pages`, register route di `App.jsx`, lalu tambah link di `Navbar.jsx`.

## 🚀 Deployment

1. Build aplikasi: `npm run build`.
2. Upload isi folder `dist/` ke platform statis pilihan (Vercel, Netlify, GitHub Pages, Cloudflare Pages, dsb).


## 🤝 Kontribusi

1. Fork repo ini.
2. Buat branch fitur (`git checkout -b fitur/yang-diinginkan`).
3. Commit perubahan (`git commit -m "feat: tambah fitur"`).
4. Push ke origin (`git push origin fitur/yang-diinginkan`).
5. Buka Pull Request.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🆘 Troubleshooting

1. **Port sudah dipakai** – Vite otomatis memakai port lain. Cek URL di terminal.
2. **Tailwind tidak bekerja** – Pastikan `@tailwind` di `src/index.css` dan `tailwind.config.js` mencakup semua path.
3. **Dependensi hilang** – Jalankan ulang `npm install`. Jika perlu hapus `node_modules` & `package-lock.json` terlebih dahulu.
4. **Laporan kosong** – Masukkan transaksi lewat form agar data muncul di dashboard dan laporan.

## 📞 Support

Butuh bantuan? Buka issue atau cek dokumentasi resmi React, Vite, dan Tailwind CSS.

---

Selamat mengatur keuangan! 🎉
