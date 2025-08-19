import { imersao } from "../../conteudo/imersao";
import CarroselFotos from "../moleculas/CarroselFotos";

export default function Imersao() {
  return (
    <div id="imersao" className="pb-10">
      <div className="">
        <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto text-white xl:mx-auto  xl:text-center">
          <h2 className="font-bold text-[22px] ml-1 mb-0 mt-20 font-[tan]  xl:text-2xl">
            {imersao.titulo}
          </h2>
          <div className="flex flex-col gap-4 xl:text-[20px] ">
            {imersao.descricao.map((paragrafo) => (
              <p>{paragrafo}</p>
            ))}
          </div>
        </div>
        <CarroselFotos images={imersao.imagens} />
      </div>
      <div className="flex-col w-2/3 mx-auto mt-10 md:flex md:flex-col md:items-center">
        <h3 className="text-[19px] font-bold mb-8 underline font-[tan] xl:text-2xl">
          {imersao.cta}
        </h3>
        <ul className="mx-auto font-semibold text-start">
          {imersao.atividades.map((atividade) => (
            <li className="list-disc xl:text-[19px]">{atividade}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
