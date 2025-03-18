import { useState } from "react";
import Button from "../buttons/Button";
import ProfileMenu from "../profile/ProfileMenu";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full top-0 left-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header Utama */}
        <div className="flex justify-between items-center py-4 border-b-[2px] border-[#E5E7EB]">
          {/* Logo */}
          <div>
            <img
              src="/images/icon/ml-logo.png"
              alt="Minilemon Logo"
              className="h-10 w-auto"
            />
          </div>

          {/* Login & Daftar */}
          {!isLoggedIn ? (
            <div className="flex items-center gap-[24px]">
              <span className="cursor-pointer font-poppins font-medium text-[16px] text-[#111928] hover:text-[#FFD200]">
                Daftar
              </span>
              <Button onClick={() => setIsLoggedIn(true)}>Masuk</Button>
            </div>
          ) : (
            // Profil (Anggota)
            <div className="flex items-center gap-[24px]">
              <button className="gap-3 p-2 hover:bg-gray-100 rounded-lg">
                <img src="/icons/ic-write.svg" alt="Write" className="h-6 w-6" />
              </button>
              <button className="gap-3 p-2 hover:bg-gray-100 rounded-lg">
                <img
                  src="/icons/ic-notification.svg"
                  alt="Notification"
                  className="h-6 w-6"
                />
              </button>
              <ProfileMenu></ProfileMenu>
            </div>
          )}
        </div>

        {/* Menu Kategori */}
        <div className="py-3">
          <div className="hidden md:flex justify-between items-center font-poppins font-semibold text-[16px] text-[#111928]">
            {[
              "Aktivitas",
              "Sejarah",
              "Kesehatan",
              "Motivasi",
              "Keluarga",
              "Petualangan",
              "Hobi",
              "Kehidupan Sekolah",
            ].map((category) => (
              <span
                key={category}
                className="cursor-pointer hover:text-[#FFD200]"
              >
                {category}
              </span>
            ))}
            <button className="flex items-center justify-center bg-[#FFED99] w-[40px] h-[40px] rounded-[24px] border-none cursor-pointer">
              <img src="/icons/ic-search.svg" alt="Search" className="h-6 w-6" />
            </button>
          </div>

          {/* Hamburger Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden flex flex-col items-start gap-3 py-3 px-4 font-poppins font-semibold text-[16px] text-[#111928] bg-white shadow-md transition-all">
            {[
              "Aktivitas",
              "Sejarah",
              "Kesehatan",
              "Motivasi",
              "Keluarga",
              "Petualangan",
              "Hobi",
              "Kehidupan Sekolah",
            ].map((category) => (
              <span
                key={category}
                className="cursor-pointer hover:text-[#FFD200]"
              >
                {category}
              </span>
            ))}
            <button className="flex items-center justify-center bg-[#FFED99] w-[40px] h-[40px] rounded-[24px] border-none cursor-pointer">
              <img src="/icons/ic-search.svg" alt="Search" className="h-6 w-6" />
            </button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;