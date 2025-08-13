import { useState } from "react";
import { Menu } from "lucide-react";
import SideNav from "./SideBar";

const pages = [
  {nome:'Sobre',link:'#sobre'},
  {nome:'Imersão',link:'#imersao'},
  {nome:'Facilitadores',link:'#facilitadores'},
  {nome:'Local',link:'#local'},
  {nome:'Alimentação',link:'#alimentacao'},
  {nome:'Investimento',link:'#investimento'},
  {nome:'Contato',link:'#contato'},
]

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen((v) => !v);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <header className="flex justify-between items-center mx-8 mt-6 mb-4 font-bold">
        <span>Logo</span>
        <button
          type="button"
          aria-label="Abrir menu"
          onClick={toggleMenu}
          className="p-2 rounded hover:bg-amber-50/20 transition"
        >
          <Menu />
        </button>
      </header>

      <SideNav isOpen={isOpen} onClose={closeMenu}>
        {pages.map(page => <a className="text-white hover:text-amber-200 transition-colors" href={page.link}>{page.nome}</a>)}
        
      </SideNav>
    </>
  );
}