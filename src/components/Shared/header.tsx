"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Logo from "../../../public/logo.svg";
import { usePathname } from "next/navigation";

const Header = () => {
  const pathname = usePathname();
  const [menuMobile, setMenuMobile] = useState(false);

  function handleMenuMobile() {
    setMenuMobile(true);
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
              }  items-center z-40 max-lg:fixed max-lg:h-[500px] max-lg:w-full max-lg:inset-0`}
            >
              <div className="animate-slideIn fixed inset-0 bg-zinc-800 lg:hidden"></div>

              <ul className="lg:flex lg:flex-wrap items-center lg:gap-4 max-lg:z-60 max-lg:absolute max-lg:divide-y-2 max-lg:divide-white/10 max-lg:p-8 max-lg:w-full max-lg:text-2xl ">
                <li className="max-lg:animate-slideIn max-lg:opacity-0 max-lg:animate-1">
                  <Link
                    className={`${
                      pathname === "/sobre"
                        ? "bg-white text-stone-800"
                        : "text-gray-200"
                    } text-gray-200 lg:hover:bg-white lg:hover:text-black p-4 lg:rounded-md block transition duration-300 max-lg:hover:bg-white/10`}
                    href={"/sobre"}
                  >
                    Sobre
                  </Link>
                </li>
                <li className="max-lg:animate-slideIn max-lg:opacity-0 max-lg:animate-2">
                  <Link
                    className={`${
                      pathname === "/fale-conosco"
                        ? "bg-white text-stone-800"
                        : "text-gray-200"
                    } text-gray-200 lg:hover:bg-white lg:hover:text-black p-4 rounded-md max-lg:rounded-none block transition duration-300 max-lg:hover:bg-white/10`}
                    href={"/fale-conosco"}
                  >
                    Contato
                  </Link>
                </li>
                <li className="max-lg:animate-slideIn max-lg:opacity-0 max-lg:animate-3">
                  <Link
                    className={`${
                      pathname === "/compras"
                        ? "bg-white text-stone-800"
                        : "text-gray-200"
                    } text-gray-200 lg:hover:bg-white lg:hover:text-black p-4 rounded-md max-lg:rounded-none block transition duration-300 max-lg:hover:bg-white/10`}
                    href={"/compras"}
                  >
                    Compras
                  </Link>
                </li>
                <li className="max-lg:animate-slideIn max-lg:opacity-0 max-lg:animate-4">
                  <Link
                    className={`text-gray-200 lg:hover:shadow-[0_0_0_4px_#fff] p-4 lg:rounded-md block transition lg:border max-lg:hover:bg-white/10`}
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

{
  /* <nav
          onClick={handleFecharMenu}
          className={`${menuMobile ? "flex" : "hidden"} ${
            fecharMenu ? "hidden" : "flex"
          } items-center lg:block max-lg:fixed max-lg:w-full max-lg:inset-0`}
        >
          <div className="fixed lg:hidden inset-0 bg-jazzberry_jam-950/40 backdrop-blur-md"></div>
          <ul className="flex max-lg:flex-col max-lg:p-8 max-lg:w-full max-lg:text-2xl  max-lg:z-50 max-lg:absolute max-lg:divide-y-2 max-lg:divide-white/10">
            <li className="max-lg:animate-slide-in max-lg:opacity-0 max-lg:animate-1">
              <Link
                className={`max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10 p-4 block lg:hover:underline hover:underline-offset-8 lg:hover:text-jazzberry_jam-900 ${
                  pathname === "/"
                    ? "text-jazzberry_jam-900 underline underline-offset-8"
                    : "max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10"
                }`}
                href="/"
              >
                Inicio
              </Link>
            </li>
            <li className="max-lg:animate-slide-in max-lg:opacity-0 max-lg:animate-2">
              <Link
                className={`max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10 p-4 block lg:hover:underline hover:underline-offset-8 lg:hover:text-jazzberry_jam-900 ${
                  pathname === "/servicos"
                    ? "text-jazzberry_jam-900 underline underline-offset-8"
                    : "max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10"
                } `}
                href="/servicos"
              >
                Serviços
              </Link>
            </li>
            <li className="max-lg:animate-slide-in max-lg:opacity-0 max-lg:animate-3">
              <Link
                className={`max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10 p-4 block lg:hover:underline hover:underline-offset-8 lg:hover:text-jazzberry_jam-900 ${
                  pathname === "/contato"
                    ? "text-jazzberry_jam-900 underline underline-offset-8"
                    : "max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10"
                } `}
                href="/contato"
              >
                Contato
              </Link>
            </li>
            <li className="max-lg:animate-slide-in max-lg:opacity-0 max-lg:animate-4">
              <Link
                className={`max-lg:max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10 p-4 block lg:hover:underline hover:underline-offset-8 lg:hover:text-jazzberry_jam-900 ${
                  pathname === "/sobre"
                    ? "text-jazzberry_jam-900 underline underline-offset-8"
                    : "max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10"
                } `}
                href="/sobre"
              >
                Sobre
              </Link>
            </li>
            <li className="max-lg:animate-slide-in max-lg:opacity-0 max-lg:animate-5">
              <Link
                className={`max-lg:max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10 p-4 block lg:hover:underline hover:underline-offset-8 lg:hover:text-jazzberry_jam-900 ${
                  pathname === "/obras-realizadas"
                    ? "text-jazzberry_jam-900 underline underline-offset-8"
                    : "max-lg:text-jazzberry_jam-50 max-lg:hover:bg-white/10"
                }`}
                href="/obras-realizadas"
              >
                Obras Realizadas
              </Link>
            </li>
          </ul>
        </nav>
        <button
          onClick={handleMenuMobile}
          className=" text-jazzberry_jam-950 py-1 px-3 text-lg rounded-sm flex items-center gap-3 lg:hidden"
        >
          Menu
          <span className="h-4 w-5 flex flex-col justify-between *:h-0.5 *:bg-jazzberry_jam-950 *:rounded">
            <span></span>
            <span></span>
            <span></span>
          </span>
        </button> */
}
