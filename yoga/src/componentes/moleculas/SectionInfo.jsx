import  CarroselFotos  from "./CarroselFotos";
 
export default function SectionInfo({titulo, descricao, imagens}) {
  return (
    <div>
      <div className="h-dvh mt-20 w-full xl:mt-30">
        <h2 className="font-bold text-[22px] ml-5 my-4 font-[tan] xl:mx-auto xl:text-2xl xl:text-center">{titulo}</h2>
        <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto xl:text-center xl:text-[18px] xl:gap-2 xl:w-1/2">
            {descricao.map((paragrafo) => (
              <p>{paragrafo}</p>
            ))}
        </div>
        <CarroselFotos images={imagens} />
      </div>
    </div>
  );
}
