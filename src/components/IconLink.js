import React from "react";

const IconLink = ({ icon: Icon, href, size = "w-9 h-9" }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="text-white/60 group-hover:text-white hover:text-white transition duration-300 ease-in-out"
    >
      <Icon className={`${size} transition duration-300 ease-in-out cursor-pointer`} />
    </a>
  );
  

export default IconLink;
