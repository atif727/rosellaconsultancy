import { useState } from "react";
import { PhoneOutlined } from "@ant-design/icons";

export const HotlineButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Hotline Button */}
      <button className="px-10 py-5 shadow-2xl rounded-4xl hover:bg-gray-100 hover:text-amber-500 text-4xl cursor-pointer transition-all bg-white text-black">
      <PhoneOutlined /> HOTLINE
      </button>

      {/* Phone Numbers Dropdown (Absolutely positioned) */}
      <div
        className={`absolute left-1/2 -translate-x-1/2 w-full transition-all duration-500 ${
          hovered
            ? "opacity-100 mt-4 max-h-40 pointer-events-auto"
            : "opacity-0 mt-0 max-h-0 pointer-events-auto"
        }`}
      >
        <div className="bg-white shadow-2xl rounded-3xl px-10 py-5 text-lg text-gray-800">
          <a className="block hover:text-amber-500" href="tel:+8801611092258">
            +880 16 1109 2258
          </a>
          <a className="block hover:text-amber-500" href="tel:+8801877428856">
            +880 18 7742 8856
          </a>
          <a className="block hover:text-amber-500" href="tel:+8801898795851">
            +880 18 9879 5851
          </a>
        </div>
      </div>
    </div>
  );
};
