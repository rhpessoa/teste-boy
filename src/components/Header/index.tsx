"use client";
import Link from "next/link";
import Image from "next/image";
import InternalWrapper from "../ui/InternalWrapper";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="flex w-full items-center bg-[#1A1A1A]">
      <InternalWrapper>
        {/* Logo da empresa */}
        <div className="w-16 mx-5 my-4 md:w-[270px] md:m-0">
          <Image
            src="/images/epic-loot-logo.png"
            width={270}
            height={52}
            alt="Epicloot Software - Logo completo da empresa"
            priority
            className="hidden md:block"
          />
          <Image
            src="/images/epic-loot-mobile-logo.png"
            width={64}
            height={64}
            alt="Epicloot - Logo mobile"
            loading="lazy"
            className="block md:hidden"
          />
        </div>

        <div className="flex-1">&nbsp;</div>

        {/* Navegação principal */}
        <div className="flex w-8 mx-5 my-4 text-2xl justify-center md:w-[calc(75%-270px)] md:m-0">
          <nav
            role="navigation"
            aria-label="Navegação principal"
            className="hidden md:flex flex-1 justify-center text-[#EAEAEA] text-2xl font-medium"
          >
            <ul className="flex space-x-8">
              <li>
                <Link
                  href="#companyServices"
                  prefetch={false}
                  className="hover:text-[#D97706]"
                  aria-label="Ir para a seção de serviços"
                >
                  Serviços
                </Link>
              </li>
              <li>
                <Link
                  href="#intro"
                  prefetch={false}
                  className="hover:text-[#D97706]"
                  aria-label="Ir para a seção Quem Somos"
                >
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link
                  href="#team"
                  prefetch={false}
                  className="hover:text-[#D97706]"
                  aria-label="Ir para a seção Nosso Time"
                >
                  Nosso Time
                </Link>
              </li>
              <li>
                <Link
                  href="https://www.linktr.ee/tvnergal"
                  prefetch={false}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-[#D97706]"
                  aria-label="Abrir link externo para contato no Linktree"
                >
                  Fale Conosco
                </Link>
              </li>
            </ul>
          </nav>

          {/* Ícone do menu mobile */}
          {!isOpen && (
            <button
              className="md:hidden text-[#EAEAEA] hover:text-[#1849c4]"
              onClick={() => setIsOpen(true)}
              aria-label="Abrir menu de navegação"
            >
              <FaBars size={32} />
            </button>
          )}

          {/* Menu Mobile */}
          {isOpen && (
            <div
              role="dialog"
              aria-modal="true"
              className="fixed inset-0 bg-black/80 text-[#EAEAEA] flex flex-col items-center justify-center z-50 transition-opacity duration-300"
            >
              <button
                className="absolute top-7 right-5 hover:text-[#3D5A80]"
                onClick={() => setIsOpen(false)}
                aria-label="Fechar menu de navegação"
              >
                <FaTimes size={36} />
              </button>

              <ul className="text-3xl space-y-6 text-center">
                <li>
                  <Link
                    href="#companyServices"
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#D97706]"
                    aria-label="Ir para a seção de serviços"
                  >
                    Serviços
                  </Link>
                </li>
                <li>
                  <Link
                    href="#intro"
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#D97706]"
                    aria-label="Ir para a seção Quem Somos"
                  >
                    Quem Somos
                  </Link>
                </li>
                <li>
                  <Link
                    href="#team"
                    prefetch={false}
                    onClick={() => setIsOpen(false)}
                    className="hover:text-[#D97706]"
                    aria-label="Ir para a seção Nosso Time"
                  >
                    Nosso Time
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://www.linktr.ee/tvnergal"
                    prefetch={false}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#D97706]"
                    aria-label="Abrir link externo para contato no Linktree"
                  >
                    Fale Conosco
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </InternalWrapper>
    </header>
  );
};

export default Header;
