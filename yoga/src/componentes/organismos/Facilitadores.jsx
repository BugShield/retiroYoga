import { facilitadores } from "../../conteudo/facilitadores";
import bgHeart from "/assets/bgHearts.png";

export default function Facilitadores() {
  return (
    <div id="facilitadores">
      <div
        className="relative bg-no-repeat bg-center bg-cover pt-4 xl:h-dvh xl:flex xl:items-center xl:justify-center 2xl:pt-8"
        style={{ backgroundImage: `url(${bgHeart})` }}
      >
        <h2 className="font-bold text-[22px] my-8 font-[tan] text-center xl:text-[26px]">
          Facilitador
        </h2>
        {facilitadores.map((facilitador) => (
          <div className="h-dvh mt-4 flex flex-col items-center xl:h-auto xl:max-w-4xl 2xl:max-w-6xl xl:mx-auto">
            <img
              className="w-[150px] h-[150px] rounded-full object-cover xl:w-[250px] xl:h-[250px]"
              src={facilitador.foto}
              alt={facilitador.nome}
            />
            <h4 className="my-4 font-bold text-lg text-white">{facilitador.nome}</h4>
            <div className="mt-4 flex flex-col gap-4 text-white">
              {facilitador.paragrafos.map((paragrafo) => (
                <p className="flex flex-col gap-4 text-[16px] w-8/10 mx-auto xl:w-1/2">
                  {paragrafo}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
