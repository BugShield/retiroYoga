import bgHeart from "/assets/bgHearts.png";
import { local } from "../../conteudo/local";
import IframeMaps from "../moleculas/IframeMaps";
import { Tractor, CalendarFold } from "lucide-react";

const avisos = [
  "O sítio fica em Monteiro Lobato, na zona rural.",
  "Na semana da data de hospedagem, encaminharemos um link do endereço que te levará diretamente até a porteira - ele vai abrir o app Google Maps.",
];

export default function ComoChegar() {
  return (
    <div id="chegar" className="">
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-4 h-dvh"
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <h2 className="font-bold text-[22px] mt-30 mb-8 font-[tan] text-center">
          Como Chegar?
        </h2>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col items-center">
            <p className="font-bold underline">Endereço</p>
            <p className=" mt-2 w-4/5 text-center">{local.end}</p>
          </div>
        </div>
        <div className="my-10 w-9/10 mx-auto xl:mb-0">
          <IframeMaps />
        </div>
        <div className="flex flex-col gap-4 w-8/10 mx-auto mt-8 font-semibold lg:hidden lg:mt-0">
          <div className="flex gap-2 items-center">
            <Tractor />
            <p className="leading-[1]">{avisos[0]}</p>
          </div>
          <div className="flex gap-2 items-center">
            <CalendarFold className="w-18" />
            <p className="leading-[1]">{avisos[1]}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
