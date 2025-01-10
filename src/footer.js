import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0d3b4f] text-[#EFC98A] pt-10 pb-10  px-6 md:px-12">
      <div className="flex flex-col my-8 md:flex-row justify-between items-start md:items-center space-y-6 md:space-y-0">
        {/* Logo Section */}
        <div className="text-end">
        <h1 className="text-6xl " style={{ fontFamily: "Times New Roman, serif",
         }}>KLAS</h1>
          <span className="tracking-wide text-sm uppercase">INFOTECH</span>
        </div>

        {/* Details Section */}
        <div className="text-left space-y-3">
          <p className="text-white flex items-center">
            <i className="fa-solid fa-map-marker-alt mr-3"></i>
            603, KLAS Infotech, Dalamal Towers, Free Press Journal Marg, Nariman Point, Mumbai, 400021
          </p>
          <p className="flex items-center">
            <i className="fa-solid fa-envelope mr-3 text-white"></i>
            <a
              href="mailto:info@klasinfotech.com"
              className="hover:underline text-white"
            >
              info@klasinfotech.com
            </a>
          </p>
          <p className="flex items-center">
          <i className="fa-brands fa-linkedin mr-3 text-white"></i>

            <a
              href="https://www.linkedin.com/company/klas-infotech/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline text-white"
            >
              https://www.linkedin.com/company/klas-infotech/
            </a>
          </p>
        </div>
      </div>

      {/* Horizontal Line */}
      <hr className="border-t border-gray-400 mt-6" />
      <span className="block text-center hover:underline text-[#d4af7a] pt-2">
  © 2024 Klas Infotech | Carefully Crafted by Digitalize The Globe
</span>

    </footer>
  );
};

export default Footer;
