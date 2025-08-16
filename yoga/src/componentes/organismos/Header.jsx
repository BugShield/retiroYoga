import { useState } from "react";
import { Menu } from "lucide-react";
import SideNav from "./SideBar";
import logo7 from "/assets/logo7.png"

const pages = [
  {nome:'Sobre',link:'#hero'},
  {nome:'Retiro',link:'#sobre'},
  {nome:'Local',link:'#local'},
  {nome:'Alimentação',link:'#alimentacao'},
  {nome:'Facilitadores',link:'#facilitadores'},
  {nome:'Imersão',link:'#imersao'},
  {nome:'Investimento',link:'#investimento'},
  {nome:'Contato',link:'#contato'},
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <div className="fixed top-0 left-0 right-0 z-50  ">
      <header className="flex justify-between items-center mx-8 mb-4 font-bold">
        <img className="w-15 mt-5" src={logo7} alt="Logo 7étimo céu" />
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={toggleMenu}
          className="p-2 mt-5 rounded hover:bg-amber-50/20 transition"
        >
          <Menu  />
        </button>
      </header>

      <SideNav isOpen={isOpen} onClose={closeMenu}>
        {pages.map(page => <a className="text-white hover:text-amber-200 transition-colors" href={page.link}>{page.nome}</a>)}
        
      </SideNav>
    </div>
  );
}