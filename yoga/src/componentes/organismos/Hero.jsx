import logoBranco from "/assets/logoBranco.png";
import fotoRodrigo from "/assets/facilitadores/fotoRodrigo.png";
import fotoDani from "/assets/facilitadores/fotoDani.png";

const facilitadores = [
  {
    nome: "Dani Bertolo",
    foto: fotoDani,
    cargo: "Professora de Hatha Yoga",
  },
  {
    nome: "Rodrigo Volponi",
    foto: fotoRodrigo,
    cargo: "Terapeuta de Alma",
  },
];

export default function Hero() {
  return (
    <div className="h-dvh px-4 lg:px-20" id="hero">
      <div className="w-full flex flex-col items-center justify-center mt-10 md:mt-0 2xl:mt-10">
        <div className="mt-30 my-4 md:mt-25 2xl:mt-35">
          <div className="bg-white w-full mx-auto h-0.5"></div>
          <p className="text-center text-sm text-white sm:text-base lg:text-md 2xl:text-2xl">
            7, 8 E 9 DE NOVEMBRO
          </p>
          <div className="bg-white w-full mx-auto h-0.5"></div>
        </div>
        <h1 className="text-center text-4xl w-full mt-8 mb-2 font-[tan] text-white sm:w-1/2 md:mt-2 md:text-3xl 2xl:text-[60px]">
          Retiro <br /> Yoga & <br /> Magia <br /> Natural
        </h1>
        <h4 className="text-base text-white sm:text-lg md:text-lg 2xl:text-2xl">
          Versão 3.0
        </h4>
        <p className="text-lg font-semibold w-2/3 text-center my-4 font-[tan] text-white sm:my-6 md:my-2 md:text-md 2xl:text-3xl ">
          A reconexão com o amor verdadeiro
        </p>
        <div className="w-full sm:w-9/10 lg:w-3/4 flex justify-center">
          {facilitadores.map((facilitador) => (
            <div className="flex flex-col items-center justify-center mb-4 sm:mb-0 lg:mx-4">
              <img
                className="w-25 h-25 sm:w-25 sm:h-25 lg:w-30 lg:h-30 object-cover rounded-full 2xl:w-50 2xl:h-50"
                src={facilitador.foto}
                alt={facilitador.nome}
              />
              <h3 className="text-base sm:text-lg text-white font-semibold lg:text-lg ">
                {facilitador.nome}
              </h3>
              <p className="text-xs text-white text-center sm:text-sm lg:text-md w-4/5 sm:w-2/3 md:w-full ">
                {facilitador.cargo}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-25 sm:mt-20 lg:hidden">
          <img
            className="w-26 sm:w-25 lg:w-32 object-cover"
            src={logoBranco}
            alt="Logo 7etimoceu"
          />
        </div>
      </div>
    </div>
  );
}
