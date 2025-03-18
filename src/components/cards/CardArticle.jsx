import React from "react";

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

export { CardTitle };
