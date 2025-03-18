const CardTag = ({ text, color, icon}) => {
  return (
    <div className="w-full max-w-[1170px] grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mx-auto ">
      {/* w-full max-w-[1170px] grid grid-cols-1 md:grid-cols-2 gap-6 p-4 mx-auto */}
      {/* Tag */}
      <div
        className="text-white font-bold text-xl pl-20 pr-8 flex items-center h-full ml-4"
        style={{
          backgroundColor: color,
          fontFamily: "Poppins",
          width: "320px",
          height: "46px",
          clipPath: "polygon(0 0, 100% 0, 90% 50%, 100% 100%, 0 100%)",
        }}
      >
        <span>{text}</span>
      </div>

      {/* Icon */}
      <img
        src={icon}
        alt="Icon"
        className="absolute left-54 "
        style={{
          width: "73.18px",
          height: "94px",
          transform: "translate(-20%, -35%)",
        }}
      />

   {/* Lihat Lebih Banyak */}
{text !== "Artikel Populer" && text !== "Baca Juga" && (
  <div className="w-full max-w-[1170px] flex justify-end text-[#8F8F8F] text-[18px] font-medium cursor-pointer underline p-4 mx-auto"> 
    Lihat Lebih Banyak
  </div>
)}

    </div>
  );
};

export default CardTag;