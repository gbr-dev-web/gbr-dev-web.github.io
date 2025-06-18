import { useState, useEffect } from "react";

const HamBox = ({ isOpen }) => (
  <svg
    className={`w-12 h-12 transition-all duration-500 ease-in-out ${
      isOpen
        ? "z-[10000] text-red-500 stroke-red-500"
        : "text-orange-500 stroke-orange-500"
    }`}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
  >
    {isOpen ? (
      <>
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M4 4L20 20"
        />
        <path
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="1.5"
          d="M20 4L4 20"
        />
      </>
    ) : (
      <path
        fill="none"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.5"
        d="M4 7h3m13 0h-9m9 10h-3M4 17h9m-9-5h16"
      />
    )}
  </svg>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setIsVisible(true);
    } else {
      // Espera a animação de saída terminar (400ms)
      const timeout = setTimeout(() => setIsVisible(false), 400);
      return () => clearTimeout(timeout);
    }
  }, [isOpen]);

  const handleRedirect = (id) => {
    setIsOpen(false);
    setTimeout(() => {
      const section = document.querySelector(id);
      section?.scrollIntoView({ behavior: "smooth" });
    }, 500);
  };

  return (
    <>
      {/* NAV COMPACTA - só em telas menores */}
      <nav className="flex justify-between items-center w-full md:hidden">
        <h3 className="text-[2.5rem]">Gb.</h3>
        <button
          onClick={() => setIsOpen((prev) => !prev)}
          className="z-[10000]"
        >
          <HamBox isOpen={isOpen} />
        </button>
      </nav>

      {/* MODAL */}
      {isVisible && (
        <div className="fixed inset-0 z-[9999] flex items-center justify-center">
          <div
            className={`bg-black bg-opacity-90 w-full h-full flex flex-col justify-center items-center gap-8
            transform transition-all duration-500 ease-in-out ${
              isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
          >
            <button
              onClick={() => handleRedirect("#sobre")}
              className="text-white text-3xl font-semibold hover:text-orange-400 transition"
            >
              Sobre
            </button>
            <button
              onClick={() => handleRedirect("#projetos")}
              className="text-white text-3xl font-semibold hover:text-orange-400 transition"
            >
              Projetos
            </button>
            <button
              onClick={() => handleRedirect("#contato")}
              className="text-white text-3xl font-semibold hover:text-orange-400 transition"
            >
              Contato
            </button>
          </div>
        </div>
      )}
    </>
  );
}
