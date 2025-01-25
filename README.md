# SIMS PPOB - Ardian Eka Candra

Aplikasi **SIMS PPOB** adalah aplikasi untuk pembayaran yang digunakan sebagai assignment Front End Programmer yang dibuat mengunakan React + Vite, dan state management menggunakan Redux. Akses form di-validasi dengan [zod validator](https://zod.dev/) dan di manage menggunakan [react-hook-form](https://react-hook-form.com/). UI Library tambahan menggunakan [shadcn](https://ui.shadcn.com/) untuk mempercepat pengerjaan. Semua code di tulis dengan type safe menggunakan Typescript. Fitur yang dibangun antara lain:

1. Registrasi
2. Login
3. Lihat Profile
4. Update Profile Data
5. Update Profile Picture
6. Top Up
7. Pembayaran
8. Riwayat Transaksi

Untuk demo aplikasi, Anda bisa akses di [sini](https://sims-ppob.ardianeka.my.id/) atau [sini](https://sims-ppob-eka.vercel.app/).

# Dokumentasi API SIMS PPOB

Dokumentasi API dengan swagger dapat di akses di [sini](https://api-doc-tht.nutech-integrasi.app).

Atau apabila Anda menggunakan [Bruno](https://www.usebruno.com/), Anda bisa import di ./api_docs.

# Development

Project ini menggunakan NodeJS dengan package manager PNPM. Pastikan Anda sudah menginstall [PNPM](https://pnpm.io/).

#### 1. Instalasi packages

```bash
pnpm install
```

#### 2. Setup environment variable .env

Pastikan anda membuat file .env, dan isi persis seperti di .example.env.

#### 3. Running dev mode

Setelah .env sudah di isi. Anda bisa run:

```bash
pnpm dev
```

#### 3. Bundling

Untuk mem-bundling app, anda bisa run:

```bash
pnpm build
```

Kemudian untuk memastikan hasil build bekerja dengan semestinya, check dengan run:

```bash
pnpm preview
```
