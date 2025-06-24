"use client";

import { Suspense, lazy } from "react";
import Image from "next/image";

import Css from "@/assets/stacks/css3.svg";
import Html from "@/assets/stacks/html.svg";
import Js from "@/assets/stacks/javascript.svg";
import ReactLogo from "@/assets/stacks/react.svg";
import Node from "@/assets/stacks/node.svg";
import Tailwind from "@/assets/stacks/tailwind.svg";
import Mongo from "@/assets/stacks/mongo.svg";

import Plus from "@/assets/icons/plus.svg";
import External from "@/assets/icons/externalLink.svg";
import Arrow from "@/assets/icons/arrowUp.svg";

import Github from "@/assets/social/github.svg";
import Linkedin from "@/assets/social/linkedin.svg";
import Email from "@/assets/social/email.svg";

import perfil from "@/assets/img/perfil.webp";
import storeapp from "@/assets/img/storeapp.webp";
import blogapp from "@/assets/img/blogapp.webp";

const SkillPill = lazy(() => import("../SkillPill"));
const IconLink = lazy(() => import("../IconLink"));
const NavMobile = lazy(() => import("../NavMobile"));

export default function MainContent() {
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
    <div className="inline-flex flex-col justify-start items-center gap-6 lg:gap-8">
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
      <div className="overflow-hidden w-screen -mx-4 sm:-mx-6 md:-mx-12 lg:-mx-20">
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

      <section id="sobre" className="mt-8">
        <h3>Sobre Mim</h3>

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
                <h5>4</h5>
                <Plus className="w-8 h-8 stroke-orange-500 text-orange-500" />
              </div>
              <p className="max-[500px]:text-xs md:text-lg">
                Projetos Finalizados
              </p>
            </div>
          </div>
        </div>
      </section>

      <h3 id="projetos" className="mt-10">
        Projetos
      </h3>

      {/* projetos */}
      {/* storeapp */}
      <div className="w-full flex flex-col-reverse md:flex-row justify-between items-start md:items-center gap-6">
        <div className="flex-1 flex-wrap flex flex-col justify-start items-start gap-6 w-full">
          <h5 className="self-center text-2xl md:text-3xl">StoreApp</h5>
          <p>
            Projeto pessoal baseado em <span>e-commerce</span> criado para fins{" "}
            <span>didáticos</span>, o usuário pode <span>colocar</span> produtos
            na lista de <span>favoritos</span>, <span>colocar</span> produtos no{" "}
            <span>carrinho</span> e <span>finalizar pedido</span>. Ele possui,
            design <span>responsivo</span>, sistema de autenticação{" "}
            <span>segura</span> e boa estruturação com o padrão <span>MVC</span>
            .
          </p>

          <div className="flex flex-col justify-start items-start gap-3.5">
            <Suspense fallback={<div>Carregando...</div>}>
              <div className="flex-wrap flex justify-start items-center gap-2">
                <SkillPill text="Node.js" />
                <SkillPill text="MySQL" />
                <SkillPill text="Handlebars" />
                <SkillPill text="Javascript" />
                <SkillPill text="Tailwind" />
              </div>
            </Suspense>
            <Suspense fallback={<div>Carregando...</div>}>
              <div className="flex justify-start items-center gap-5">
                <IconLink
                  icon={Github}
                  href="https://github.com/gbr-dev-web/StoreApp"
                />
                <IconLink
                  icon={External}
                  href="https://storeapp-klm0.onrender.com/"
                />
              </div>
            </Suspense>
          </div>
        </div>

        <div
          className="
            relative
            lg:w-[550px] lg:h-[450px]
            md:w-[400px] md:h-[325px]
            sm:w-[300px]
            w-[250px]
            max-h-[450px]
            h-auto
            aspect-video 
            overflow-hidden
            shadow-[8px_8px_15px_0px_rgba(0,0,0,0.25)]
            mx-auto md:mx-0
        "
        >
          <Image
            src={storeapp}
            alt="storeapp"
            className="rounded-sm object-cover object-top"
            fill
            style={{ objectFit: "cover", objectPosition: "top" }} // só pra garantir
          />
        </div>
      </div>

      {/* blogapp */}
      <div className="w-full flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
        <div
          className="
            relative
            lg:w-[550px] lg:h-[450px]
            md:w-[400px] md:h-[325px]
            sm:w-[300px] 
            w-[250px]
            h-auto 
            aspect-video
            overflow-hidden
            shadow-[8px_8px_15px_0px_rgba(0,0,0,0.25)]
            mx-auto md:mx-0
          "
        >
          <Image
            src={blogapp}
            alt="blogapp"
            fill
            className="rounded-sm object-cover object-top"
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        </div>
        <div className="flex-1 flex-wrap flex flex-col justify-start items-start gap-6 w-full">
          <h5 className="self-center text-2xl md:text-3xl">BlogApp</h5>
          <p>
            BlogApp é uma <span>aplicação</span> baseada em <span>Blog</span>,
            através dele eu tive meu primeiro contato com <span>React</span> na
            prática, o usuário pode criar posts usando linguagem{" "}
            <span>Markdown</span> de forma <span>segura</span> prevenindo{" "}
            <span>XSS</span>.
          </p>
          <div className=" flex flex-col justify-start items-start gap-3.5">
            <Suspense fallback={<div>Carregando...</div>}>
              <div className=" flex-wrap flex justify-start items-center gap-2">
                <SkillPill text="React" />
                <SkillPill text="Javascript" />
                <SkillPill text="Tailwind" />
              </div>
            </Suspense>
            <Suspense fallback={<div>Carregando...</div>}>
              <div className="flex justify-start items-center gap-5">
                <IconLink
                  icon={Github}
                  href="https://github.com/gbr-dev-web/blogApp"
                />
              </div>
            </Suspense>
          </div>
        </div>
      </div>

      {/* contato */}
      <div
        id="contato"
        className="w-fill items-center flex flex-col justify-center mt-10"
      >
        <h2>Entre em Contato</h2>
        <h6 className="text-[#c4c4c4]">Vamos conversar!</h6>
      </div>

      <div className="flex flex-col justify-center items-center gap-8 w-full">
        <button
          className="holographic-hover p-2.5 rounded-[10px] shadow-[8px_8px_0px_0px_rgba(0,0,0,1.00)] outline outline-orange-500 inline-flex flex-col justify-center items-center gap-2.5 bg-transparent hover:bg-gray-800 transition-all duration-300"
          onClick={() =>
            window.open(
              "https://mail.google.com/mail/?view=cm&fs=1&to=gabrielsil20177@gmail.com",
              "_blank"
            )
          }
        >
          <span className="relative z-10 text-white text-xl font-bold font-['Inter'] leading-normal text-center">
            E-MAIL
          </span>
        </button>
        <Suspense fallback={<div>Carregando...</div>}>
          <div className="flex justify-start items-center gap-5">
            <IconLink icon={Github} href="https://github.com/gbr-dev-web" />
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

      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-4 right-4 p-1.5 bg-orange-500 rounded-[10px] flex justify-center items-center cursor-pointer z-50"
      >
        <Arrow className="w-8 h-8 text-white" />
      </div>
    </div>
  );
}
