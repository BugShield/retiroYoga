import  CarroselFotos  from "./CarroselFotos";
 
export default function SectionInfo({titulo, descricao, imagens}) {
  return (
    <div>
      <div className=" mt-20 w-full xl:mt-10 2xl:mt-15">
        <h2 className="font-bold text-[22px] ml-5 my-4 font-[tan] text-white md:mx-auto md:text-2xl md:text-center">{titulo}</h2>
        <div className="flex flex-col gap-4 text-[16px] mx-auto text-white md:text-center md:text-[16x] md:gap-2 xl:w-2/3 2xl:w-3/7 2xl:text-start 2xl:text-[18px]">
            {descricao.map((paragrafo) => (
              <p>{paragrafo}</p>
            ))}
        </div>
        <CarroselFotos images={imagens} />
      </div>
    </div>
  );
}
