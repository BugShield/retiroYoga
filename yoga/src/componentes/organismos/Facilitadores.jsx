import { facilitadores } from "../../conteudo/facilitadores";
import bgHeart from "/assets/bgHearts.png";

export default function Facilitadores() {
  return (
    <div id="facilitadores" className="scroll-mt-24">
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-4 xl:h-dvh "
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <h2 className="font-bold text-[22px] mt-4 font-[tan] text-center xl:mt-20 xl:text-[26px]">
          Facilitadores
        </h2>
        <div className="xl:h-dvh xl:flex xl:justify-center xl:gap-x-12 2xl:pt-8 xl:max-w-5xl xl:mx-auto">
          {facilitadores.map((facilitador) => (
            <div className="mt-4 flex flex-col items-center xl:w-[45%] xl:h-auto">
              <img
                className="w-[150px] h-[150px] rounded-full object-cover xl:w-[250px] xl:h-[250px]"
                src={facilitador.foto}
                alt={facilitador.nome}
              />
              <h4 className="my-4 font-bold text-lg text-white">{facilitador.nome}</h4>
              <div className="mt-4 flex flex-col gap-4 text-white">
                {facilitador.paragrafos.map((paragrafo) => (
                  <p className="flex flex-col gap-4 text-[16px] w-10/11 mx-auto xl:w-full">
                    {paragrafo}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
