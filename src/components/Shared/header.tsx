"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuMobile, setMenuMobile] = useState(false);

  useEffect(() => {
    // Adiciona ou remove a classe 'no-scroll' no <body> dependendo do estado do menu
    if (menuMobile) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }

    // Função de limpeza para remover a classe quando o componente é desmontado
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [menuMobile]); // Executa o efeito sempre que o 'menuMobile' mudar

  function handleMenuMobile() {
    setMenuMobile(!menuMobile); // Altera o estado: se estiver aberto, fecha; se estiver fechado, abre.
  }
  function handleFecharMenu() {
    setMenuMobile(false);
  }
  return (
    <>
      <header className="sticky top-0 z-50">
        <div className={`bg-zinc-800 py-5 `}>
          <div className=" container flex justify-between items-center">
            <Link href="/">
              <Image
                src={Logo}
                className="w-40"
                alt="Logo da ideal health"
                width={160}
                height={40}
                priority
              />
            </Link>

            <nav
              onClick={handleFecharMenu}
              className={`lg:block ${
                menuMobile ? "flex" : "hidden"
              } items-center z-40 max-lg:fixed max-lg:h-[500px] max-lg:w-full max-lg:inset-0`}
            >
              <div
                className={`animate-slideIn fixed inset-0 bg-zinc-800 lg:hidden ${
                  menuMobile ? "block" : "hidden"
                }`}
              ></div>

              <ul
                className={`lg:flex lg:flex-wrap items-center lg:gap-4 max-lg:z-60 max-lg:absolute max-lg:divide-y-2 max-lg:divide-white/10 max-lg:p-8 max-lg:w-full max-lg:text-2xl ${
                  menuMobile ? "block" : "hidden"
                }`}
              >
                <li className="max-lg:animate-slideIn max-lg:animate-1">
                  <Link
                    className={` text-gray-200 lg:hover:bg-gray-200 lg:hover:text-black py-2 px-4 lg:rounded-md block transition duration-300 max-lg:hover:bg-white/10`}
                    href={"/sobre"}
                  >
                    Sobre
                  </Link>
                </li>
                <li className="max-lg:animate-slideIn max-lg:animate-2">
                  <Link
                    className={` text-gray-200 lg:hover:bg-gray-200 lg:hover:text-black py-2 px-4 rounded-md max-lg:rounded-none block transition duration-300 max-lg:hover:bg-white/10`}
                    href={"/fale-conosco"}
                  >
                    Contato
                  </Link>
                </li>
                <li className="max-lg:animate-slideIn max-lg:animate-3">
                  <Link
                    className={` text-gray-200 lg:hover:bg-gray-200 lg:hover:text-black py-2 px-4 rounded-md max-lg:rounded-none block transition duration-300 max-lg:hover:bg-white/10`}
                    href={"/compras"}
                  >
                    Compras
                  </Link>
                </li>
                <li className="max-lg:animate-slideIn max-lg:animate-4">
                  <Link
                    className={`text-gray-200 lg:hover:shadow-[0_0_0_4px_#fff] py-2 px-4 lg:rounded-md block transition lg:border max-lg:hover:bg-white/10`}
                    href={"/login"}
                  >
                    Entrar
                  </Link>
                </li>
              </ul>
            </nav>
            <button
              aria-label="Menu"
              onClick={handleMenuMobile}
              className="flex items-center gap-3 lg:hidden border p-3 rounded-md hover:shadow-[0_0_0_4px_#fff] transition "
            >
              <span className="h-3 w-4 flex flex-col justify-between *:h-0.5 *:rounded-md *:bg-white ">
                <span></span>
                <span></span>
                <span></span>
              </span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
