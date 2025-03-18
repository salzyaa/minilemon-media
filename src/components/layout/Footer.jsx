const Footer = () => {
  return (
    <footer className="bg-[#424242] text-gray-400 py-4">
      {/* Logo */}
      <div className="flex justify-center items-center mt-2">
        <img src="images/icon/ml-logo.png" alt="Minilemon Logo" className="h-10 w-auto" />
      </div>

      {/* Copyright */}
      <div className="font-poppins font-medium text-[12px] text-[#D1D5DB] text-center text-sm mt-4">
        Copyright 2025 | All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;