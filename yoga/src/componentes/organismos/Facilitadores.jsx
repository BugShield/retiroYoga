import { facilitadores } from "../../conteudo/facilitadores";
import bgHeart from "/assets/bgHearts.png"

export default function Facilitadores() {
  return (
    <div id="facilitadores" >
      <div className="relative bg-no-repeat bg-center bg-cover pt-4" style={{ backgroundImage: `url(${bgHeart})` }} >
        {facilitadores.map((facilitador) => (
          <div className="h-dvh mt-4 flex flex-col items-center" >
            <h2 className="font-bold text-[22px] my-8 font-[tan]">Facilitador</h2>
            <img className="w-[150px] h-[150px] rounded-full object-cover" src={facilitador.foto} alt={facilitador.nome} />
            <h4 className="my-4 font-bold text-lg">{facilitador.nome}</h4>
            <div className="mt-4 flex flex-col gap-4">
                {facilitador.paragrafos.map((paragrafo) => (
                  <p className="flex flex-col gap-4 text-[16px] w-8/10 mx-auto">{paragrafo}</p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
