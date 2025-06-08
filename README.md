# Aplikasi Todo List

Aplikasi Todo List adalah aplikasi web berbasis **Next.js** yang dirancang untuk membantu pengguna mengelola tugas dan kegiatan sehari-hari secara efisien. Dengan antarmuka yang responsif dan ramah pengguna, aplikasi ini memungkinkan pengguna untuk menambah, mengedit, menghapus, mencari, dan memantau progres tugas dengan fitur modern seperti tema gelap/terang dan notifikasi interaktif.

## Fitur

- **Tambah Tugas**: Buat tugas baru dengan nama, kategori, prioritas, dan tenggat waktu.
- **Edit Tugas**: Ubah detail tugas yang sudah ada melalui formulir edit.
- **Hapus Tugas**: Hapus tugas dengan konfirmasi untuk menghindari kesalahan.
- **Ubah Status Tugas**: Pilih status "Pending", "Dalam Proses", atau "Selesai".
- **Pencarian Tugas**: Cari tugas berdasarkan nama, kategori, atau tingkat prioritas.
- **Pengurutan Tugas**: Tugas diurutkan otomatis berdasarkan prioritas dan status.
- **Penyimpanan Lokal**: Data tugas disimpan di `localStorage` untuk persistensi.
- **Progress Bar**: Tampilkan persentase penyelesaian tugas dengan bilah progres visual.
- **Mode Gelap/Terang**: Dukungan tema gelap dan terang untuk kenyamanan pengguna.
- **Animasi**: Efek animasi halus menggunakan `framer-motion` untuk pengalaman pengguna yang lebih baik.
- **Notifikasi**: Notifikasi interaktif menggunakan `notiflix` untuk umpan balik pengguna.
- **Kutipan Inspiratif**: Tampilan kutipan acak di banner untuk motivasi.

## Teknologi yang Digunakan

- **Framework**: Next.js 14 (App Router)
- **Bahasa Pemrograman**: TypeScript
- **Styling**: Tailwind CSS dengan PostCSS
- **Package Manager**: pnpm
- **Dependensi Utama**:
  - `framer-motion`: Animasi antarmuka pengguna.
  - `notiflix`: Notifikasi dan konfirmasi.
  - `react-icons`: Ikon untuk antarmuka.
  - `react-select`: Dropdown untuk pemilihan kategori.
  - `geist`: Font modern untuk tipografi.
- **Asset**: Ikon SVG untuk kategori tugas dan prioritas di direktori `public/media/task_icon`.

## Prasyarat

Sebelum menjalankan proyek ini, pastikan Anda memiliki:

- **Node.js** versi 18 atau lebih baru.
- **pnpm** versi 8 atau lebih baru. Instal dengan perintah:
  ```bash
  npm install -g pnpm
  ```

## Instalasi

Ikuti langkah-langkah berikut untuk menjalankan proyek di lokal:

1. **Klon Repositori**

   ```bash
   git clone <URL_REPOSITORI_ANDA>
   cd todo-list
   ```

2. **Instal Dependensi**

   ```bash
   pnpm install
   ```

3. **Jalankan Aplikasi**

   ```bash
   pnpm dev
   ```

   Aplikasi akan berjalan di `http://localhost:3000`.

4. **Bangun untuk Produksi** (opsional)
   ```bash
   pnpm build
   pnpm start
   ```

## Struktur Direktori

Berikut adalah struktur direktori utama proyek:

```
todo-list/
├── public/
│   └── media/
│       └── task_icon/
│           ├── Belanja.svg
│           ├── high.svg
│           ├── Hobi.svg
│           ├── Kesehatan.svg
│           ├── Keuangan.svg
│           ├── Lainnya.svg
│           ├── medium.svg
│           ├── Pekerjaan.svg
│           ├── Pendidikan.svg
│           ├── Perjalanan.svg
│           ├── Pribadi.svg
│           └── Proyek.svg
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── AddButton.tsx
│   │   │   ├── AddForm.tsx
│   │   │   ├── Banner.tsx
│   │   │   ├── EditForm.tsx
│   │   │   ├── ProgressBar.tsx
│   │   │   ├── SearchBar.tsx
│   │   │   └── Tasks.tsx
│   │   ├── css/
│   │   │   └── EditForm.css
│   │   ├── favicon.ico
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── modules/
│   │   ├── data.ts
│   │   ├── inspirational-quotes.ts
│   │   └── todoSorting.ts
│   └── types/
│       ├── inspirationalQuotes.d.ts
│       └── Todo.ts
├── .gitignore
├── .vercelignore
├── next-env.d.ts
├── next.config.ts
├── package.json
├── pnpm-lock.yaml
├── postcss.config.mjs
├── tsconfig.json
└── README.md
```

## Penggunaan

1. **Tambah Tugas**:

   - Klik tombol "+" untuk membuka formulir tambah tugas.
   - Isi nama tugas, pilih kategori (opsional), prioritas, dan tenggat waktu (opsional).
   - Klik "Tambah Tugas" untuk menyimpan.

2. **Edit Tugas**:

   - Klik tugas yang ingin diedit untuk membuka formulir edit (jika tersedia).
   - Perbarui detail tugas dan simpan perubahan.

3. **Cari Tugas**:

   - Gunakan bilah pencarian di bagian atas untuk mencari tugas berdasarkan nama, kategori, atau prioritas.

4. **Ubah Status atau Hapus**:

   - Pilih status tugas dari dropdown ("Pending", "Dalam Proses", "Selesai").
   - Klik ikon tempat sampah untuk menghapus tugas (akan muncul konfirmasi).

5. **Pantau Progres**:
   - Bilah progres di bagian atas menunjukkan persentase tugas yang telah selesai berdasarkan status "Selesai".

## Kontribusi

Kami menyambut kontribusi untuk meningkatkan aplikasi ini! Ikuti langkah-langkah berikut:

1. Fork repositori ini.
2. Buat branch baru: `git checkout -b fitur/penambahan-fitur`.
3. Lakukan perubahan dan commit: `git commit -m "Menambahkan fitur X"`.
4. Push ke branch: `git push origin fitur/penambahan-fitur`.
5. Buat Pull Request di repositori asli.

## Lisensi

Proyek ini dilisensikan di bawah [MIT License](LICENSE).

## Pengembang

Dikembangkan oleh **Alief Ibnu**. Untuk pertanyaan atau dukungan, hubungi melalui [volterotect.id@gmail.com](mailto:volterotect.id@gmail.com).
