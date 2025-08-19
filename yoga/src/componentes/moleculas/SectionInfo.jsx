import  CarroselFotos  from "./CarroselFotos";
 
export default function SectionInfo({titulo, descricao, imagens}) {
  return (
    <div>
      <div className="h-dvh mt-20 w-full xl:mt-30">
        <h2 className="font-bold text-[22px] ml-5 my-4 font-[tan] text-white md:mx-auto md:text-2xl md:text-center">{titulo}</h2>
        <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto text-white md:text-center md:text-[18px] md:gap-2 xl:w-1/2">
            {descricao.map((paragrafo) => (
              <p>{paragrafo}</p>
            ))}
        </div>
        <CarroselFotos images={imagens} />
      </div>
    </div>
  );
}
