"use client";

import Css from "@/assets/stacks/css3.svg";
import Html from "@/assets/stacks/html.svg";
import Js from "@/assets/stacks/javascript.svg";
import ReactLogo from "@/assets/stacks/react.svg";
import Node from "@/assets/stacks/node.svg";
import Tailwind from "@/assets/stacks/tailwind.svg";
import Mongo from "@/assets/stacks/mongo.svg";

export default function TechMarquee() {
  const techs = [
    { name: "CSS", icon: Css },
    { name: "HTML 5", icon: Html },
    { name: "JAVASCRIPT", icon: Js },
    { name: "REACT", icon: ReactLogo },
    { name: "NODE.JS", icon: Node },
    { name: "TAILWIND", icon: Tailwind },
    { name: "MONGODB", icon: Mongo },
  ];

  return (
    <div className="overflow-hidden w-screen mt-4 -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20">
      <div className="flex animate-marquee-reverse whitespace-nowrap w-max gap-x-6 sm:gap-x-10">
        {[...Array(2)].flatMap((_, group) =>
          techs.map(({ name, icon: Icon }, i) => (
            <div
              key={`${group}-${i}`}
              className="flex items-center gap-2 min-w-max px-4"
            >
              <Icon className="w-8 h-8 sm:w-10 sm:h-10" />
              <p className="text-white font-bold text-[16px] sm:text[20px] font-inter">
                {name}
              </p>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
