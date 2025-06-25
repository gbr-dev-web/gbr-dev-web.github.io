import React from "react";

export default function ProjectLink({ icon: Icon, href, text }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        flex items-center gap-1 sm:gap-2 md:gap-[5px]
        group cursor-pointer
        text-white/60 hover:text-white transition-colors duration-300
      "
    >
      <Icon
        className="
          w-6 h-6 sm:w-7 sm:h-7 md:w-9 md:h-9
          transition duration-300 ease-in-out
          group-hover:text-white
        "
      />
      <p
        className="
          text-[16px] sm:text-[18px] md:text-[20px]
          text-[#c4c4c4]
          group-hover:text-white
          transition-colors duration-300
        "
      >
        {text}
      </p>
    </a>
  );
}
