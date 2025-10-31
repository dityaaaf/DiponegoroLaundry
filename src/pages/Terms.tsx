import React from "react";
import { useNavigate } from "react-router-dom";

export default function Terms() {
  const navigate = useNavigate();

  return (
    <div className="max-w-3xl mx-auto px-6 py-12 text-gray-800 leading-relaxed">
      <h1 className="text-3xl font-bold text-blue-700 mb-6">
        Syarat dan Ketentuan Diponegoro Laundry
      </h1>

      <p className="mb-4">
        Selamat datang di <strong>Diponegoro Laundry</strong>. Dengan
        menggunakan layanan kami, Anda dianggap telah membaca, memahami, dan
        menyetujui seluruh syarat dan ketentuan berikut.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-2">
        1. Layanan Kami
      </h2>
      <p className="mb-4">
        Diponegoro Laundry menyediakan layanan pencucian, pengeringan, dan
        penyetrikaan pakaian. Kami berkomitmen untuk memberikan hasil terbaik
        sesuai dengan standar kebersihan dan kualitas yang telah kami tetapkan.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-2">
        2. Barang dan Tanggung Jawab
      </h2>
      <ul className="list-disc ml-6 mb-4">
        <li>
          Pelanggan wajib memeriksa dan menghitung jumlah pakaian sebelum
          diserahkan.
        </li>
        <li>
          Diponegoro Laundry tidak bertanggung jawab atas pakaian yang luntur,
          menyusut, atau rusak akibat bahan pakaian yang tidak tahan proses
          pencucian standar.
        </li>
        <li>
          Klaim kerusakan atau kehilangan harus dilakukan maksimal 24 jam setelah
          pakaian diambil.
        </li>
      </ul>

      <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-2">
        3. Pembayaran
      </h2>
      <p className="mb-4">
        Pembayaran dilakukan sesuai harga yang tertera di daftar harga resmi.
        Layanan hanya akan diproses setelah pembayaran dilakukan untuk layanan
        tertentu (misalnya laundry kilat atau premium).
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-2">
        4. Waktu Pengerjaan
      </h2>
      <p className="mb-4">
        Estimasi waktu pengerjaan akan diinformasikan saat penyerahan barang.
        Keterlambatan dapat terjadi akibat kondisi tertentu seperti cuaca atau
        volume pesanan tinggi, namun kami akan berusaha memberi kabar secepatnya.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-2">
        5. Perubahan Ketentuan
      </h2>
      <p className="mb-4">
        Diponegoro Laundry berhak mengubah syarat dan ketentuan ini sewaktu-waktu.
        Perubahan akan diumumkan melalui situs resmi atau media sosial kami.
      </p>

      <h2 className="text-xl font-semibold text-blue-600 mt-8 mb-2">
        6. Kontak
      </h2>
      <p className="mb-4">
        Jika Anda memiliki pertanyaan terkait layanan kami, silakan hubungi:
      </p>
      <ul className="ml-6 mb-8">
        <li>
          Email:{" "}
          <a
            href="mailto:diponegorolaundry@gmail.com"
            className="text-blue-500"
          >
            diponegorolaundry@gmail.com
          </a>
        </li>
        <li>Telepon: 0812-3456-7890</li>
        <li>Alamat: Jl. Diponegoro No. 45, Semarang</li>
      </ul>

      <p className="text-sm text-gray-500 mb-8">
        Terakhir diperbarui: 31 Oktober 2025
      </p>

      {/* Tombol Kembali */}
      <button
        onClick={() => navigate("/")}
        className="px-5 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 transition"
      >
        ← Kembali ke Beranda
      </button>
    </div>
  );
}
