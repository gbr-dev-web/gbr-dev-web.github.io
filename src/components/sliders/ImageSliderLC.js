import { useState, useEffect, Suspense } from "react";
import Image from "next/image";

import SkillPill from "../SkillPill";

import lucas1 from "@/assets/img/lucas/lucas1.png";
import lucas2 from "@/assets/img/lucas/lucas2.png";
import lucas3 from "@/assets/img/lucas/lucas3.png";

import External from "@/assets/icons/externalLink.svg";
import Github from "@/assets/social/github.svg";

import ProjectLink from "@/components/ProjectLink";

export default function ImageSliderLC() {
  const images = [
    { src: lucas1, position: "object-top" },
    { src: lucas2, position: "object-bottom" },
    { src: lucas3, position: "object-bottom" },
  ];

  const altText = "Slider image";
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const openModal = () => {
    setIsOpen(true);
    // delay para ativar a animação após renderizar o modal
    setTimeout(() => setIsVisible(true), 10);
  };

  const closeModal = () => {
    setIsVisible(false);
    // espera o fade-out antes de desmontar
    setTimeout(() => setIsOpen(false), 300); // duração da transição
  };

  return (
    <>
      {/* Slider */}
      <div
        className="relative w-full h-full overflow-hidden shadow-md cursor-pointer rounded-sm transform transition-transform duration-300 hover:scale-105"
        onClick={openModal}
        style={{ outline: "1px solid #FF7300" }}
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
              alt={`${altText} ${index + 1}`}
              fill
              className={`object-cover rounded-sm ${img.position}`}
              priority={index === currentIndex}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
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
              relative w-[700px] max-w-[90vw] max-h-[90vh] overflow-auto px-5 py-4 sm:px-7 sm:py-7
              bg-black rounded-lg shadow-[0px_0px_8px_0px_rgba(255,104,0,1.00)]
              flex flex-col justify-start items-center gap-2.5
              transition-transform duration-300
              ${isVisible ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"}
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
              <h5 className="self-center text-2xl md:text-3xl">Lucas Gesso</h5>

              <p>
                O projeto <span>Lucas Gesso</span> foi desenvolvido para ajudar
                um parente a ser encontrado no <span>Google</span> por clientes
                que buscam <span>serviços de decoração</span>. Criei um site{" "}
                <span>rápido</span>, <span>responsivo</span> e com bom{" "}
                <span>SEO</span>, garantindo uma{" "}
                <span>presença digital profissional</span> e eficaz. O resultado
                deixou o cliente <span>muito satisfeito</span>.
              </p>

              <div className="flex flex-col justify-start items-start gap-3.5">
                <Suspense fallback={<div>Carregando...</div>}>
                  <div className="flex flex-wrap justify-start items-center gap-2">
                    <SkillPill text="React" />
                    <SkillPill text="Next.js" />
                    <SkillPill text="Javascript" />
                    <SkillPill text="Tailwind" />
                  </div>
                </Suspense>

                <Suspense fallback={<div>Carregando...</div>}>
                  <div className="flex justify-start items-center gap-5">
                    <ProjectLink
                      icon={Github}
                      href="https://github.com/gbr-dev-web/lucas-gesso"
                      text="Repositório"
                    />
                    <ProjectLink
                      icon={External}
                      href="https://gbr-dev-web.github.io/lucas-gesso/"
                      text="Acesse"
                    />
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
