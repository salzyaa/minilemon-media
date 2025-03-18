import { useState } from "react";

const ProfileMenu = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <div className="relative">
      {/* Profile Section */}
      <button
        className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100"
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {/* Photo Profile */}
        <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-white font-medium text-lg">
          W
        </div>

        {/* Name & Status */}
        <div className="text-left">
          <p className="font-poppins font-semibold text-[16px] text-[#111928]">
            Wooyoung
          </p>
          <p className="text-sm text-gray-500">Anggota</p>
        </div>
      </button>

      {/* Dropdown */}
      {dropdownOpen && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-lg p-2">
          <ul className="text-[#6B7280]">
            <li className="flex rounded-lg items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
              <img
                src="/icons/ic-profile.svg"
                alt="Profil"
                className="w-5 h-5"
              />
              Profil
            </li>
            <li className="flex rounded-lg items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
              <img
                src="/icons/ic-article.svg"
                alt="Kelola Artikel"
                className="w-5 h-5"
              />
              Kelola Artikel
            </li>
            <li className="flex rounded-lg items-center gap-3 p-2 hover:bg-gray-100 cursor-pointer">
              <img
                src="/icons/ic-settings.svg"
                alt="Pengaturan"
                className="w-5 h-5"
              />
              Pengaturan
            </li>
            <hr className="my-2" />
            <li className="p-2 rounded-lg text-[#6B7280] font-medium hover:bg-gray-100 cursor-pointer">
              Keluar
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default ProfileMenu;
