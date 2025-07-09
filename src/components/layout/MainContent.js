"use client";

import { Suspense, lazy } from "react";
import Image from "next/image";

import Plus from "@/assets/icons/plus.svg";
import Arrow from "@/assets/icons/arrowUp.svg";
import Quote from "@/assets/icons/quote.svg";

import Github from "@/assets/social/github.svg";
import Linkedin from "@/assets/social/linkedin.svg";
import Email from "@/assets/social/email.svg";
import Instagram from "@/assets/social/Instagram.svg";

import perfil from "@/assets/img/perfil.webp";

import TechMarquee from "../TechMarquee";

import Projects from "../sections/Projects";

const IconLink = lazy(() => import("../IconLink"));
const NavMobile = lazy(() => import("../NavMobile"));

export default function MainContent() {
  return (
    <div className="flex flex-col justify-start items-center gap-6 lg:gap-8">
      {/* NAV COMPLETA - só em telas maiores */}
      <nav className="hidden md:flex bg-black justify-between items-center z-10 px-3.5 py-[5px] rounded-[10px] outline outline-[-2px] outline-offset-[-1.30px] outline-orange-500">
        <ul className="flex list-none gap-6">
          <li className="holographic-hover hover:scale-105 hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-lg px-2 py-1">
            <a
              href="#sobre"
              className="relative z-10 no-underline text-xl text-white text-center font-semibold font-inter hover:text-orange-400 hover:drop-shadow-md transition-colors duration-300"
            >
              Sobre
            </a>
          </li>
          <li className="holographic-hover hover:scale-105 hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-lg px-2 py-1">
            <a
              href="#projetos"
              className="relative z-10 no-underline text-xl text-white text-center font-semibold font-inter hover:text-orange-400 hover:drop-shadow-md transition-colors duration-300"
            >
              Projetos
            </a>
          </li>
          <li className="holographic-hover hover:scale-105 hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-lg px-2 py-1">
            <a
              href="#feedbacks"
              className="relative z-10 no-underline text-xl text-white text-center font-semibold font-inter hover:text-orange-400 hover:drop-shadow-md transition-colors duration-300"
            >
              Feedbacks
            </a>
          </li>
          <li className="holographic-hover hover:scale-105 hover:bg-gray-800 transition-transform duration-300 ease-in-out rounded-lg px-2 py-1">
            <a
              href="#contato"
              className="relative z-10 no-underline text-xl text-white text-center font-semibold font-inter hover:text-orange-400 hover:drop-shadow-md transition-colors duration-300"
            >
              Contatos
            </a>
          </li>
        </ul>
      </nav>

      {/* NAV COMPACTA - só em telas menores */}
      <Suspense fallback={<div>Carregando...</div>}>
        <NavMobile />
      </Suspense>

      <div className="flex flex-col items-center">
        <h1>Gabriel Martins</h1>
        <h4>DESENVOLVEDOR FULLSTACK</h4>
        <h6 className="text-[#c4c4c4]">Criando softwares eficientes</h6>
      </div>

      <a
        href="/assets/Gabriel_Martins_currículo.pdf"
        download
        className="holographic-hover mt-5 p-2.5 rounded-[10px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1.00)] outline outline-orange-500 inline-flex flex-col justify-center items-center gap-2.5 bg-transparent hover:bg-gray-800 transition-all duration-300"
      >
        <span className="relative z-10 text-white text-xl font-bold font-['Inter'] leading-normal text-center">
          CURRÍCULO
        </span>
      </a>

      {/* stacks */}
      <TechMarquee />

      <section id="sobre" className="mt-6">
        <h3 className="mb-4">Sobre Mim</h3>

        {/* sobre mim */}
        <div className="flex flex-col lg:flex-row justify-start items-center gap-6 lg:gap-10">
          {/* Imagem (fica em cima no mobile, no meio no desktop) */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-start items-center">
            <div className="md:w-80 md:h-80 w-60 h-60 rounded-full overflow-hidden relative">
              <Image
                src={perfil}
                alt="foto"
                loading="lazy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 240px, 320px"
              />
            </div>
          </div>

          {/* Texto (fica no meio no mobile, à esquerda no desktop) */}
          <p className="order-2 md:order-1 max-w-3xl text-sm sm:text-base text-left whitespace-normal">
            Prazer, Sou <span>jovem desenvolvedor</span> web capaz de{" "}
            <span>criar projetos do zero</span> e <span>bem estruturados</span>.
            <br />
            <br />
            Meu interesse por programação começou em <span>2018</span>, quando
            tive meu primeiro contato com a linguagem <span>c#</span>. Naquela
            época, adorava <span>criar programas</span> simples, como
            calculadoras, e <span>compartilhar meus scripts</span> com os meus
            amigos.
            <br />
            <br />
            Somente em <span>2024</span> que eu tive a oportunidade de{" "}
            <span>estudar</span> mais <span>seriamente</span> sobre a área e
            descobri que essa era <span>minha vocação</span>. Tenho me dedicado
            a <span>aprender</span> tecnologias modernas como{" "}
            <span>Javascript</span>, <span>Node.js</span>, e <span>React</span>{" "}
            e atualmente estou estudando <span>UI/UX</span>.
            <br />
            <br />
            Estou sempre <span>me desafiando</span> e me atualizando com as
            tendências do mercado. Sigo motivado por aquela mesma{" "}
            <span>curiosidade</span> de quando comecei, agora com ainda mais{" "}
            <span>foco disciplina</span> e vontade de <span>construir</span>{" "}
            soluções <span>úteis</span> e bem feitas.
          </p>

          {/* Experiências (fica por último no mobile, à direita no desktop) */}
          <div className="order-3 px-5 lg:px-0 flex lg:flex-col lg:justify-center justify-between items-center lg:gap-10 w-full lg:w-auto">
            <div className="flex flex-col justify-start items-center lg:items-start gap-0.5">
              <div className="flex justify-center items-center gap-0.5">
                <h5>1</h5>
                <Plus className="w-8 h-8 stroke-orange-500 text-orange-500" />
              </div>
              <p className="max-[500px]:text-xs text-lg">Ano de experiência</p>
            </div>
            <div className="flex flex-col justify-start items-center lg:items-start gap-0.5">
              <div className="flex justify-center items-center gap-0.5">
                <h5>5</h5>
                <Plus className="w-8 h-8 stroke-orange-500 text-orange-500" />
              </div>
              <p className="max-[500px]:text-xs md:text-lg">
                Projetos Finalizados
              </p>
            </div>
          </div>
        </div>
      </section>

      <Projects />

      <section id="feedbacks" className="mt-6 w-full">
        <h3 className="mb-4">Feedbacks</h3>

        <div className="w-full max-w-[700px] h-auto p-4 sm:p-5 mx-auto bg-black rounded-lg shadow-[0px_0px_8px_0px_rgba(255,104,0,1.00)] flex flex-col justify-start gap-2 sm:gap-2.5">
          <Quote className="w-7 h-7 sm:w-9 sm:h-9 rotate-180" />

          <div className="px-6 sm:px-10">
            <p className="text-white text-sm sm:text-base font-normal text-justify">
              Fiquei extremamente satisfeito com o serviço de criação do meu
              site! O resultado superou minhas expectativas: o layout ficou
              moderno, profissional e muito bem estruturado. Estou satisfeito.
              Obrigado! Gabriel Martins.
            </p>
          </div>

          <Quote className="w-7 h-7 sm:w-9 sm:h-9 self-end" />

          <p className="text-center text-white text-xl sm:text-2xl font-bold">
            Lucas
          </p>
          <p className="text-center text-[#C4c4c4] text-base sm:text-xl italic">
            Gesseiro Profissional
          </p>
        </div>
      </section>

      <section id="contato">
        <div className="w-fill items-center flex flex-col justify-center mt-6 mb-4">
          <h2>Entre em Contato</h2>
          <h6 className="text-[#c4c4c4]">Vamos conversar!</h6>
        </div>

        <div className="flex flex-col justify-center items-center gap-8 w-full">
          <button
            className="holographic-hover p-2.5 rounded-[10px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1.00)] outline outline-orange-500 inline-flex flex-col justify-center items-center gap-2.5 bg-transparent hover:bg-gray-800 transition-all duration-300"
            onClick={() =>
              window.open(
                "https://wa.me/5585996594003?text=Olá!%20Vim%20pelo%20site,%20gostaria%20de%20saber%20mais%20sobre%20seus%20serviços",
                "_blank"
              )
            }
          >
            <span className="relative z-10 text-white text-xl font-bold font-['Inter'] leading-normal text-center">
              WHATSAPP
            </span>
          </button>

          <Suspense fallback={<div>Carregando...</div>}>
            <div className="flex justify-start items-center gap-5">
              <IconLink icon={Github} href="https://github.com/gbr-dev-web" />
              <IconLink
                icon={Instagram}
                href="https://www.instagram.com/gabriel.martins.dev/"
              />
              <IconLink
                icon={Email}
                href="https://mail.google.com/mail/?view=cm&fs=1&to=gabrielsil20177@gmail.com"
              />
              <IconLink
                icon={Linkedin}
                href="https://www.linkedin.com/in/gabriel-martins-042900279"
              />
            </div>
          </Suspense>

          <p className="max-[400px]:text-[0.7rem]">
            Copyright &copy; 2025 Gabriel Martins
          </p>
        </div>
      </section>

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 p-1.5 bg-orange-500 rounded-[10px] flex justify-center items-center cursor-pointer z-40"
      >
        <Arrow className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}
