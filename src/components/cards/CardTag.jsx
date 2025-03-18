const CardTag = ({ text, color, icon}) => {
  return (
    <div className="flex items-center justify-between w-full h-[100px] px-12">
      {/* Tag */}
      <div
        className="text-white font-bold text-xl pl-20 pr-8 flex items-center h-full ml-[-15px]"
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
        className="absolute left-14"
        style={{
          width: "73.18px",
          height: "94px",
          transform: "translate(-20%, -6%)",
        }}
      />

      {/* Lihat Lebih Banyak */}
      {text !== "Artikel Populer" && text !== "Baca Juga" && (
        <div className="text-[#8F8F8F] text-[18px] font-medium cursor-pointer underline ml-4">
          Lihat Lebih Banyak
        </div>
      )}
    </div>
  );
};

export default CardTag;