import { imersao } from "../../conteudo/imersao";
import CarroselFotos from "../moleculas/CarroselFotos";

export default function Imersao() {
  return (
    <div id="imersao">
      <div className="h-dvh">
        <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto">
          <h2 className="font-bold text-[22px] ml-1 mb-0 mt-20 font-[tan]">
            {imersao.titulo}
          </h2>
          <div className="flex flex-col gap-4 ">
            {imersao.descricao.map((paragrafo) => (
              <p>{paragrafo}</p>
            ))}
          </div>
        </div>
        <CarroselFotos images={imersao.imagens} />
      </div>
      <div className="flex-col w-2/3 mx-auto">
        <h3 className="text-[19px] font-bold mb-8 underline font-[tan]">
          {imersao.cta}
        </h3>
        <ul className="mx-auto font-semibold text-start">
          {imersao.atividades.map((atividade) => (
            <li className="my-2 list-disc">{atividade}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
