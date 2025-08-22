import { facilitadores } from "../../conteudo/facilitadores";
import bgHeart from "/assets/bgHearts.png";

export default function Facilitadores() {
  return (
    <div id="facilitadores" className="scroll-mt-24">
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-4"
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <h2 className="font-bold text-[22px] mt-4 font-[tan] text-center xl:mt-4 xl:text-[26px]">
          Facilitadores
        </h2>
        <div className="xl:h-dvh xl:flex xl:justify-center xl:gap-x-6 xl:max-w-5xl xl:mx-auto 2xl:gap-x-12 2xl:pt-8 ">
          {facilitadores.map((facilitador) => (
            <div className="mt-4 flex flex-col items-center xl:w-[45%] xl:h-auto">
              <img
                className="w-[150px] h-[150px] rounded-full object-cover xl:w-[170px] xl:h-[170px] 2xl:w-[250px] 2xl:h-[250px]"
                src={facilitador.foto}
                alt={facilitador.nome}
              />
              <h4 className="my-4 font-bold text-lg text-white xl:my-0">{facilitador.nome}</h4>
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
