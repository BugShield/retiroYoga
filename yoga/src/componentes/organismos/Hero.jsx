import logo7 from "/assets/logo7.png";
import rodrigoPalestra from "/assets/imersao/rodrigoPalestra.JPG";

const facilitadores = [
  {
    nome: "Dani Bertolo",
    foto: rodrigoPalestra,
    cargo: "Professora de Hatha Yoga",
  },
  {
    nome: "Rodrigo Volponi",
    foto: rodrigoPalestra,
    cargo: "Terapeuta de Alma",
  },
];

export default function Hero() {
  return (
    <div className="h-dvh px-4 lg:px-20 xl:px-40" id="hero">
      <div className="w-full flex flex-col items-center justify-center">
        <div className="mt-10 my-4 lg:mt-20 lg:mb-10">
          <div className="bg-white w-full mx-auto h-0.5 mt-12"></div>
          <p className="text-center text-sm sm:text-base lg:text-lg">
            7, 8 E 9 DE NOVEMBRO
          </p>
          <div className="bg-white w-full mx-auto h-0.5"></div>
        </div>
        <h1
          className="text-center text-4xl lg:text-5xl w-full sm:w-1/2 mt-8 mb-2 font-[tan]"
        >
          Retiro <br /> Yoga & <br /> Magia <br /> Natural
        </h1>
        <h4 className="text-base sm:text-lg lg:text-xl">Versão 3.0</h4>
        <p className="text-lg sm:text-2xl lg:text-3xl font-semibold w-full sm:w-2/3 lg:w-1/2 text-center my-4 font-[tan] sm:my-6">
          A reconexão com <br /> o amor verdadeiro
        </p>
        <div className="w-full sm:w-9/10 lg:w-3/4 flex justify-center">
          {facilitadores.map((facilitador) => (
            <div className="flex flex-col items-center justify-center mb-4 sm:mb-0 lg:mx-4">
              <img
                className="w-20 h-20 sm:w-25 sm:h-25 lg:w-32 lg:h-32 object-cover rounded-full"
                src={facilitador.foto}
                alt={facilitador.nome}
              />
              <h3 className="text-base sm:text-lg lg:text-xl font-semibold">
                {facilitador.nome}
              </h3>
              <p className="text-xs sm:text-sm lg:text-base w-4/5 sm:w-2/3 lg:w-1/2 text-center">
                {facilitador.cargo}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 sm:mt-20 lg:mt-32">
          <img
            className="w-20 sm:w-25 lg:w-32 object-cover"
            src={logo7}
            alt="Logo 7etimoceu"
          />
        </div>
      </div>
    </div>
  );
}
