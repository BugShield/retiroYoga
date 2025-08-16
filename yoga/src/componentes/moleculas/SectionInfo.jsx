import  CarroselFotos  from "./CarroselFotos";
 
export default function SectionInfo({titulo, descricao, imagens}) {
  return (
    <div>
      <div className="h-dvh mt-20">
        <h2 className="font-bold text-[22px] ml-5 my-4 font-[tan]">{titulo}</h2>
        <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto">
            {descricao.map((paragrafo) => (
              <p>{paragrafo}</p>
            ))}
        </div>
        <CarroselFotos images={imagens} />
      </div>
    </div>
  );
}
