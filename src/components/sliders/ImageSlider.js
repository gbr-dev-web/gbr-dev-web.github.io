import { useState, useEffect, Suspense } from "react";
import Image from "next/image";

import SkillPill from "../SkillPill";
import ProjectLink from "@/components/ProjectLink";

export default function ProjectSlider({
  images,
  title,
  description,
  skills,
  links,
  aspectRatio = "16/9",
  modalWidth = "700px",
}) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false); // controle da animação

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = () => {
    setIsOpen(true);
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    setTimeout(() => setIsOpen(false), 300);
  };

  return (
    <>
      {/* Slider */}
      <div
        className={`relative w-full aspect-[${aspectRatio}] overflow-hidden transform transition-transform duration-300 hover:scale-105 cursor-pointer rounded-sm shadow-[0px_0px_4px_0px_rgba(255,104,0,1.00)]`}
        onClick={openModal}
      >
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={img.src}
              alt={img.alt || `Image ${index + 1}`}
              fill
              className={`object-cover ${
                img.position || "object-center"
              } rounded-sm`}
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* Modal com animação */}
      {isOpen && (
        <div
          className={`
            fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center
            transition-opacity duration-300
            ${isVisible ? "opacity-100" : "opacity-0"}
          `}
          onClick={closeModal}
        >
          <div
            className={`
              relative w-[${modalWidth}] max-w-[90vw] max-h-[90vh] overflow-auto px-5 py-4 sm:px-7 sm:py-7 bg-black rounded-lg shadow-[0px_0px_8px_0px_rgba(255,104,0,1.00)]
              flex flex-col justify-start items-center gap-2.5
              transition-transform duration-300
              ${
                isVisible
                  ? "translate-y-0 opacity-100"
                  : "translate-y-6 opacity-0"
              }
            `}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Botão de fechar */}
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 z-10 transition-transform duration-200 hover:scale-110 hover:brightness-125"
              aria-label="Fechar modal"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
              >
                <path
                  fill="#f24822"
                  d="M6.4 19L5 17.6l5.6-5.6L5 6.4L6.4 5l5.6 5.6L17.6 5L19 6.4L13.4 12l5.6 5.6l-1.4 1.4l-5.6-5.6z"
                />
              </svg>
            </button>

            {/* Conteúdo */}
            <div className="flex-1 flex flex-col flex-wrap justify-start items-start gap-6 w-full">
              <h5 className="self-center text-2xl md:text-3xl">{title}</h5>

              <p className="leading-relaxed">{description}</p>

              <div className="flex flex-col justify-start items-start gap-3.5">
                <Suspense fallback={<div>Carregando...</div>}>
                  <div className="flex flex-wrap justify-start items-center gap-2">
                    {skills.map((skill) => (
                      <SkillPill key={skill} text={skill} />
                    ))}
                  </div>
                </Suspense>

                <Suspense fallback={<div>Carregando...</div>}>
                  <div className="flex justify-start items-center gap-5">
                    {links.map(({ icon: Icon, href, text }) => (
                      <ProjectLink
                        key={href}
                        icon={Icon}
                        href={href}
                        text={text}
                      />
                    ))}
                  </div>
                </Suspense>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
