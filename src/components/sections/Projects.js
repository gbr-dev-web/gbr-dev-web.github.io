"use client";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

import storeapp1 from "@/assets/img/storeapp.webp";
import lawyer from "@/assets/img/lawyer.png";
import blogapp from "@/assets/img/blogapp.webp";
import lucasGesso from "@/assets/img/lucasGesso.png";

export default function Projects() {
  const scrollRef = useRef(null);
  const cardRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);
  const [scrollEnd, setScrollEnd] = useState(false);

  const [isScrolling, setIsScrolling] = useState(false);

  const slide = (direction) => {
    if (isScrolling || !scrollRef.current || !cardRef.current) return;

    const el = scrollRef.current;
    const cardWidth = cardRef.current.offsetWidth + 24;

    setIsScrolling(true);

    // scrollBy não retorna promessa, então escutamos o "scroll"
    el.scrollBy({ left: direction * cardWidth, behavior: "smooth" });

    // Espera final da rolagem com debounce curto
    const timeout = setTimeout(() => {
      scrollCheck(); // garante valores atualizados após scroll
      setIsScrolling(false);
    }, 350); // tempo ligeiramente menor para manter fluidez
  };

  const scrollCheck = () => {
    const el = scrollRef.current;
    if (!el) return;
  
    const reachedEnd = Math.ceil(el.scrollLeft + el.offsetWidth) >= el.scrollWidth;
  
    setScrollX(el.scrollLeft);
    setScrollEnd(reachedEnd);
  };

  const projects = [
    {
      title: "Lawyer Advocacia",
      description:
        "Website profissional com foco em advogados, exibindo especializações jurídicas, experiências e formas práticas de contato.",
      image: lawyer,
      tags: ["Profissional autônomo", "Institucional", "Landing Page"],
      url: "https://advogado-seven.vercel.app/",
    },
    {
      title: "Lucas Gesso",
      description:
        "Criei um site rápido e responsivo para ajudar um parente a ser encontrado no Google por clientes que buscam serviços de decoração.",
      image: lucasGesso,
      tags: ["Negócio Local", "Site Profissional", "Landing Page"],
      url: "https://gbr-dev-web.github.io/lucas-gesso/",
    },
    {
      title: "Storeapp",
      description:
        "Projeto pessoal de e-commerce didático com favoritos, carrinho, checkout, design responsivo e autenticação segura.",
      image: storeapp1,
      tags: ["E-commerce", "Interface Moderna", "Loja Online"],
      url: "https://storeapp-klm0.onrender.com/",
    },
    {
      title: "BlogApp",
      description:
        "BlogApp é uma aplicação de blog pra fins didáticos onde você pode criar posts usando Markdown de forma segura.",
      image: blogapp,
      tags: ["Blog", "Markdown"],
      url: "https://github.com/gbr-dev-web/blogApp",
    },
  ];

  return (
    <section id="projetos" className="py-10">
      <h3 className="text-center mb-6">Projetos</h3>

      {/* SLIDER FORA DO CONTAINER */}
      <div
        ref={scrollRef}
        onScroll={scrollCheck}
        className="flex gap-6 overflow-x-auto scroll-smooth scroll-hidden w-screen px-4 sm:px-20 font-inter"
      >
        {projects.map((project, idx) => (
          <article
            key={idx}
            ref={idx === 0 ? cardRef : null}
            className="w-[300px] sm:w-[320px] md:w-[360px] lg:w-[400px] my-4 rounded-lg bg-black shadow-[0px_0px_8px_0px_rgba(255,104,0,1.00)] flex-shrink-0"
          >
            <div className="relative w-full h-56 rounded-t-lg overflow-hidden">
              <Image
                alt={project.title}
                src={project.image}
                fill
                style={{ objectFit: "cover", objectPosition: "top" }}
                priority={idx === 0}
                sizes="(max-width: 640px) 280px, (max-width: 768px) 320px, (max-width: 1024px) 360px, 400px"
              />
            </div>

            <div className="p-4 sm:p-6">
              <h3 className="text-2xl text-start font-bold font-inter text-white">
                {project.title}
              </h3>

              <p className="mt-2 text-sm sm:text-base text-white/75 ">
                {project.description}
              </p>

              {/* ver site */}
              {project.url && (
                <a
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 mt-2 py-2 px-4 rounded bg-orange-700 text-white text-sm font-semibold hover:bg-orange-800 transition whitespace-nowrap w-fit"
                >
                  Ver Site
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M12 6H6a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6" />
                    <path d="M13 11l9-9" />
                    <path d="M17 2h5v5" />
                  </svg>
                </a>
              )}

              {/* tags */}
              <div className="mt-3 flex flex-wrap gap-2">
                {project.tags.map((tag, tagIdx) => (
                  <span
                    key={tagIdx}
                    className="px-2 py-0.5 text-xs rounded-full bg-gray-200 text-gray-800 dark:bg-white/10 dark:text-white/80"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* botoes */}
      <div className="mt-4 flex justify-center space-x-2">
        <button
          onClick={() => slide(-1)}
          disabled={scrollX <= 0 || isScrolling}
          className="p-2 bg-white/10 rounded hover:bg-white/20 disabled:opacity-50"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => slide(1)}
          disabled={scrollEnd || isScrolling}
          className="p-2 bg-white/10 rounded hover:bg-white/20 disabled:opacity-50"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
}
