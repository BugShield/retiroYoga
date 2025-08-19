import { useState } from "react";
import { Menu } from "lucide-react";
import SideNav from "./SideBar";
import logoCinza from "/assets/logoCinza.png";

const pages = [
  { nome: "Sobre", link: "#hero" },
  { nome: "Retiro", link: "#sobre" },
  { nome: "Local", link: "#local" },
  { nome: "Alimentação", link: "#alimentacao" },
  { nome: "Facilitadores", link: "#facilitadores" },
  { nome: "Imersão", link: "#imersao" },
  { nome: "Investimento", link: "#investimento" },
  { nome: "Como Chegar", link: "#chegar" },
  { nome: "Contato", link: "#contato" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-[#f4efef] shadow-sm mb-20">
      <header className="flex justify-between  items-center mx-8 font-bold">
        <img className="w-18 my-4" src={logoCinza} alt="Logo 7étimo céu" />
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={toggleMenu}
          className="p-2 my-4 rounded hover:bg-amber-50/20 transition"
        >
          <Menu className="text-[#4d4d4d] size-8 " />
        </button>
      </header>

       <SideNav isOpen={isOpen} onClose={closeMenu}>
        {pages.map(page => <a className="text-white hover:text-amber-200 transition-colors lg:text-xl xl:text-2xl" href={page.link} onClick={closeMenu}>{page.nome}  </a>)}
      </SideNav>
    </div>
  );
}
