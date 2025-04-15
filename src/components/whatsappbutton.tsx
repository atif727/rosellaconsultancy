// import { useState } from "react";
// import { WhatsAppOutlined } from "@ant-design/icons";

// export const WhatsAppButton = () => {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className="relative inline-block text-center"
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <button className="max-md:mt-9 px-10 py-5 shadow-2xl rounded-4xl hover:bg-gray-100 hover:text-emerald-500 text-4xl cursor-pointer transition-all">
//         <WhatsAppOutlined className="mr-2" /> WHATSAPP
//       </button>

//       {/* Animated number list */}
//       <div
//         className={`transition-all duration-500 overflow-hidden ${
//           hovered ? "max-h-40 opacity-100 mt-4" : "max-h-0 opacity-0 mt-0"
//         }`}
//       >
//         <div className="flex flex-col gap-2 text-lg text-gray-700">
//         <a href="tel:+8801611092258">+880 16 1109 2258</a>
//         <a href="tel:+8801877428856">+880 18 7742 8856</a>
//         <a href="tel:+8801898795851">+880 18 9879 5851</a>
//         </div>
//       </div>
//     </div>
//   );
// };

import { useState } from "react";
import { WhatsAppOutlined } from "@ant-design/icons";

export const WhatsAppButton = () => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className="relative inline-block text-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* WhatsApp Button */}
      <button className="px-10 py-5 shadow-2xl rounded-4xl hover:bg-gray-100 hover:text-emerald-500 text-4xl cursor-pointer transition-all bg-white text-black">
        <WhatsAppOutlined className="mr-2" /> WHATSAPP
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
          <a className="block hover:text-emerald-500" href="tel:+8801611092258">
            +880 16 1109 2258
          </a>
          <a className="block hover:text-emerald-500" href="tel:+8801877428856">
            +880 18 7742 8856
          </a>
          <a className="block hover:text-emerald-500" href="tel:+8801898795851">
            +880 18 9879 5851
          </a>
        </div>
      </div>
    </div>
  );
};
