import React from "react";
import { CardTag, CardTitle } from "./CardArticle";

const Home = () => {
  const cardTag1 = [
    {
      image: "/images/artikel/image1.png",
      title: "Anak dan Kreativitas: Bagaimana Bermain Membantu Perkembangan Otak?",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image2.png",
      title: "Pendidikan Karakter di Sekolah: Seberapa Efektif Membangun Moral Siswa?",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image3.png",
      title: "Gizi Seimbang, Anak Sehat: Pentingnya Nutrisi untuk Tumbuh Kembang",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
  ];

  const cardTag2 = [
    {
      image: "/images/artikel/image4.png",
      title: "Kata-Kata Ajaib yang Bisa Meningkatkan Kepercayaan Diri Anak",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image5.png",
      title: "Cara Menjadi Pendengar yang Baik bagi Si Kecil",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image6.png",
      title: "Bantu Anak Mengenali Emosi dan Mengelolanya dengan Baik",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image7.png",
      title: "Pentingnya Waktu Berkualitas Bersama Keluarga di Tengah Kesibukan",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image8.png",
      title: "Perjuangan Seorang Ibu: Menginspirasi Anak untuk Mengejar Mimpi",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image9.png",
      title: "Belajar Sambil Bermain: Metode Efektif untuk Anak Cerdas",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
  ];

  return (
    <div className="p-6" style={{ fontFamily: "Poppins, sans-serif" }}>
      <CardTag text="Khusus Buat Kamu" color="#2F855A" icon="/images/icon/iconkbk.png" />
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        {cardTag1.map((article, index) => (
          <CardTitle key={index} {...article} />
        ))}
      </div>
      <div className="mt-8">
        <CardTag text="Cerita Terbaru" color="#D28CD8" icon="/images/icon/iconct.png" />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
          {cardTag2.map((story, index) => (
            <CardTitle key={index} {...story} />
          ))}
        </div>
      </div>
    </div>
  );
};


export default Home;