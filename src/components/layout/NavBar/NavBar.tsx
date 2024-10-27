'use client';

import { useState } from "react";
import ButtonWrapper from "@/components/ui/Button/Button";
import Language from "@/components/ui/Language/Language";
import Image from "next/image";

type Props = {
  home: string,
  service: string,
  about: string,
  tools: string,
  partners: string,
  button: string,
}

export default function NavBar({ home, service, about, tools, partners, button }: Props) {
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const onShowMenu = () => setShowMenu(true);

  const onHideMenu = () => setShowMenu(false);

  return (
    <>
      <nav className=" transition-all bg-white rounded-md shadow-4xl lg:px-8 lg:py-4 lg:mx-4 lg:mt-4 xl:mx-8 lg:flex justify-between items-center sm:hidden">
        <ul className="flex flex-row justify-items-start items-center gap-8 w-auto">
          <li className="text-center m-0 p-0 text-black uppercase text-c-tx-1">{home}</li>
          <li className="text-center m-0 p-0 text-black uppercase text-c-tx-1">{service}</li>
          <li className="text-center m-0 p-0 text-black uppercase text-c-tx-1">{about}</li>
          <li className="text-center m-0 p-0 text-black uppercase text-c-tx-1">{tools}</li>
          <li className="text-center m-0 p-0 text-black uppercase text-c-tx-1">{partners}</li>
        </ul>
        <div className="flex justify-between items-center gap-6">
          <ButtonWrapper label={button} />
          <Language />
        </div>
      </nav>
      {
        !showMenu && (
          <button onClick={onShowMenu} className="block 2xl:hidden xl:hidden lg:hidden md:block absolute top-0 right-3">
            <Image width={48} height={48} src="/icons/menu.svg" alt="menu" />
          </button>
        )
      }
      {
        showMenu && (
          <nav className="absolute bg-c-blue-300 top-0 right-0 w-full h-[100vh] z-50">
            <div className="relative">
              <button className="absolute top-3 right-3" onClick={onHideMenu}>
                <Image width={48} height={48} src="/icons/close.svg" alt="close" />
              </button>
            </div>

            <ul className="flex flex-col gap-16 py-28 px-24">
              <li className="text-left text-2xl m-0 p-0 text-black uppercase">{home}</li>
              <li className="text-left text-2xl m-0 p-0 text-black uppercase">{service}</li>
              <li className="text-left text-2xl m-0 p-0 text-black uppercase">{about}</li>
              <li className="text-left text-2xl m-0 p-0 text-black uppercase">{tools}</li>
              <li className="text-left text-2xl m-0 p-0 text-black uppercase">{partners}</li>
              <li className="text-left text-2xl m-0 p-0 text-black uppercase"><ButtonWrapper label={button} /></li>
              <li className="text-left text-2xl m-0 p-0 text-black uppercase"><Language /></li>
            </ul>
          </nav>
        )
      }
    </>
  );
}