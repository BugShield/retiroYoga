import { CarouselDefault } from "./moleculas/CarroselFotos";

const local = {
  descricao: [
    "ESPAÇO PREMA, Casa da Montanha localizada na Serra da Mantiqueira, entre Monteiro Lobato e São Francisco Xavier (130 km de São Paulo), num sítio com muita água, vista e natureza abundante.",
    "Nascer do sol deslumbrante, chalés comfortáveis,lago natural, cachoeiras, biodiversidade e muita energia regeneradora em um lugar realmente mágico.",
  ],
  imagens: [
    { src: "", alt: "Imagem cachoeira" },
    { src: "", alt: "Imagem Espaço" },
    { src: "", alt: "Imagem Natureza" },
  ],
  end: "Estrada do Rio Manso, 455 - Monteiro Lobato - São Paulo",
  cep: "12250-000",
};

export default function Local() {
  return (
    <div>
      <div className="h-dvh mt-25">
        <h2 className="font-bold text-[22px] ml-5 my-4">O Local</h2>
        <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto">
            {local.descricao.map((paragrafo) => (
              <p>{paragrafo}</p>
            ))}
        </div>
        <CarouselDefault/>
      </div>
    </div>
  );
}
