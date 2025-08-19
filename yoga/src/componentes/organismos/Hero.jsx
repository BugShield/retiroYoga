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
      <div className="w-full flex flex-col items-center justify-center mt-10 md:mt-8 xl:mt-10">
        <div className="mt-10 my-4 xl:mt-35">
          <div className="bg-white w-full mx-auto h-0.5"></div>
          <p className="text-center text-sm sm:text-base lg:text-lg xl:text-2xl">
            7, 8 E 9 DE NOVEMBRO
          </p>
          <div className="bg-white w-full mx-auto h-0.5"></div>
        </div>
        <h1 className="text-center text-4xl w-full mt-8 mb-2 font-[tan] sm:w-1/2 lg:text-5xl xl:text-[60px]">
          Retiro <br /> Yoga & <br /> Magia <br /> Natural
        </h1>
        <h4 className="text-base sm:text-lg lg:text-xl xl:text-2xl">Versão 3.0</h4>
        <p className="text-lg font-semibold w-full text-center my-4 font-[tan] sm:text-2xl sm:w-2/3 sm:my-6 lg:text-2xl xl:text-3xl ">
          A reconexão com <br /> o amor verdadeiro
        </p>
        <div className="w-full sm:w-9/10 lg:w-3/4 flex justify-center">
          {facilitadores.map((facilitador) => (
            <div className="flex flex-col items-center justify-center mb-4 sm:mb-0 lg:mx-4">
              <img
                className="w-25 h-25 sm:w-25 sm:h-25 lg:w-32 lg:h-32 object-cover rounded-full xl:w-50 xl:h-50"
                src={facilitador.foto}
                alt={facilitador.nome}
              />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                {facilitador.nome}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base w-4/5 sm:w-2/3 md:w-full text-center">
                {facilitador.cargo}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-25 sm:mt-20 lg:mt-32">
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
