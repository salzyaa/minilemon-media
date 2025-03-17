import React from "react";

const CardTag = ({ text, color, icon }) => {
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
      <div className="text-[#8F8F8F] text-[18px] font-medium cursor-pointer underline ml-4">
        Lihat Lebih Banyak
      </div>
    </div>
  );
};


const CardTitle = ({ image, title, date, time }) => {
  return (
    <div className="bg-white p-1 max-w-xl ml-5">
      <CardTitle.Header image={image} />
      <CardTitle.Body title={title} />
      <CardTitle.Footer date={date} time={time} />
    </div>
  );
};


CardTitle.Header = ({ image }) => (
  <img src={image} alt="Card Image" className="w-[500px] h-[230px] object-cover rounded-t-lg" />
);

CardTitle.Body = ({ title }) => (
  <div className="py-2">
    <h3 className="text-[16px] font-semibold" style={{ color: "#111928", fontFamily: "Poppins" }}>
      {title}
    </h3>
  </div>
);

CardTitle.Footer = ({ date, time }) => (
  <div className="text-[16px]" style={{ color: "#637381", fontFamily: "Poppins", fontWeight: "400" }}>
    {date} • {time}
  </div>
);

export { CardTag, CardTitle };
