import React from "react";
import { CardTitle } from "../components/cards/CardArticle";
import CardTag from "../components/cards/CardTag";
import { Card, ArticleInfo } from "../components/cards/CardArticle2";

const Home = () => {
  const cardTag1 = [
    {
      image: "/images/artikel/image1.png",
      title:
        "Anak dan Kreativitas: Bagaimana Bermain Membantu Perkembangan Otak?",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image2.png",
      title:
        "Pendidikan Karakter di Sekolah: Seberapa Efektif Membangun Moral Siswa?",
      date: "11 Maret 2025",
      time: "2 jam yang lalu",
    },
    {
      image: "/images/artikel/image3.png",
      title:
        "Gizi Seimbang, Anak Sehat: Pentingnya Nutrisi untuk Tumbuh Kembang",
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
      title:
        "Pentingnya Waktu Berkualitas Bersama Keluarga di Tengah Kesibukan",
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

  const popularArticles = ArticleInfo.filter(
    (article) => article.type === "populer"
  ).slice(0, 3);
  const regularArticles = ArticleInfo.filter(
    (article) => article.type !== "populer"
  );

  return (
    <div>
      <CardTag
        text="Artikel Populer"
        color="#901C1B"
        icon="https://s3-alpha-sig.figma.com/img/de04/01a5/5d7abf9dd272c402fede273de86b1420?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cSGK38uApZtMC71AM9oMx-1La47M2otYIgXpIwbBgk0V8uO10Jk5kzMrdTHRTYSf2fWL62ZMzVDKSf7DAL13nsc37SSx0qq7fpiDCVECwsXrSrBvKf7hPHFaKy8saHai7kJy~vvK2-x6YbVK7fNhsTBDB7Whgct6KuTW-jC00F~ghZc3V-OLC6XgGUcXsFeb56HgwHkY4CbcT0UPpKO07t9VAEykHmxAVBeIMMPmd~cGJVuhuPPwhANf0PJfH78io7Go4E9DN81YIis~D0T9OxqN9gvhcnz9cjfgFNb8BMTpYnsrWcZILDd0TG-h0lgWVGwHs0HGjjOZDfZErh7UCQ__"
      />
      {/*Section artikel populer*/}
      {popularArticles.length > 0 && (
        <div className="w-full max-w-[1170px] flex flex-col md:flex-row items-center gap-6 p-4 lg-grid mx-auto "> 
          <div className="md:col-span-2">
            <div className="relative">
              <img
                src="https://s3-alpha-sig.figma.com/img/9196/e200/58b870f058b36bb86335b1539a1f9018?Expires=1743379200&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=ovPhtbKptvfN9GZPcO4Kx6ga4tTkcp-srecia7PbhJykXT4JpoKB2AWUOmPj~HaaOnVOSBkwpBziVeb-WWSiHB-O3hBKQnB7uDdm8mT2Jzu-n1-oqhUOZy~eTDxlw6ioIoymwwTWd7zDdHC8GZHRlXj~M8jZJkN3AqhNHO4C0xusYgvNK713hoUmDIxRPrZwzhOKXH~wt2LHj7RD4vjB9G1ldWqvQb6fa8x~631HcNAW1nlGFij8AEqJLRb8h0RjN43y5BBqJrQORtF7bvYJCP-eelXG0mB0gmEdSFES~-N7b08qlmg4c3f2hmjWtPVnOUkEIKar5OGhOvn3hlVGoA__"
                alt="Children playing on the grass, making funny faces with their hands"
                className="w-[670px] h-[384px] rounded-[6px] object-cover"
              />
              <div className="absolute inset-0 bg-[#5A4D1133] opacity-20 rounded-[6px]"></div>
              <div className="absolute bottom-0 left-0 right-0 bg-[#665400] bg-opacity-30 text-white p-4 rounded-b-lg">
                <h2 className="text-[18px] font-bold text-left">
                  Meningkatkan Kepercayaan Diri Anak dengan Pola Asuh yang Tepat
                </h2>
              </div>
            </div>
          </div>

          {/* Kolom Kanan: Teks dalam baris */}
          <div className="w-full md:w-1/2 flex flex-col">
            {popularArticles.map((article, index) => (
              <Card
                key={index}
                image={article.image}
                category={article.category}
                title={article.title}
                date={article.date}
                type="populer" // Bisa dipakai untuk custom tampilan Card
              />
            ))}
          </div>
        </div>
      )}
      <div className="p-6" style={{ fontFamily: "Poppins, sans-serif" }}>
        <CardTag
          text={<span className="ml-[-20px]">Khusus Buat Kamu</span>}
          color="#2F855A"
          icon="/images/icon/iconkbk.png"
        />
        <div className="w-full max-w-[1170px] grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mx-auto">
          {cardTag1.map((article, index) => (
            <CardTitle key={index} {...article} />
          ))}
        </div>
        <div className="mt-8">
          <CardTag
            text="Cerita Terbaru"
            color="#D28CD8"
            icon="/images/icon/iconct.png"
          />
          <div className="w-full max-w-[1170px] grid grid-cols-1 md:grid-cols-3 gap-6 p-4 mx-auto">
            {cardTag2.map((story, index) => (
              <CardTitle key={index} {...story} />
            ))}
          </div>
        </div>
      </div>

      <CardTag
        text="Baca Juga"
        color="#58A2C5"
        icon="/images/icon/iconbacajuga.png"
      />
      {/* Section Artikel Baca Juga */}
      <div className="w-full max-w-[1170px] grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mx-auto mt-5">

        {regularArticles.map((article, index) => (
          <Card
            key={index}
            image={article.image}
            category={article.category}
            title={article.title}
            date={article.date}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
