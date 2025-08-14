import bgHeart from "/assets/bgHearts.png";
import logo7 from "/assets/logo7.png"
import rodrigoPalestra from "/assets/imersao/rodrigoPalestra.JPG"

const facilitadores = [
  { nome: "Dani Bertolo", foto: rodrigoPalestra, cargo: "Professora de Hatha Yoga" },
  { nome: "Rodrigo Volponi", foto: rodrigoPalestra, cargo: "Terapeuta de Alma" },
];

export default function Hero() {
  return (
    <div className="h-dvh">
      <div
        className="w-full flex flex-col items-center justify-center"
      >
        <p className="text-center mb-8">7, 8 E 9 DE NOVEMBRO</p>
        <h1 className="text-center text-4xl w-1/2 mb-1">
          Retiro <br /> Yoga e Magia <br /> Natural
        </h1>
        <h4 className="text-lg">Versão 3.0</h4>
        <p className="text-2xl font-semibold w-2/3 text-center my-6">A reconexão com o amor verdadeiro</p>
        <div className="w-9/10 mx-2 flex justify-around">
          {facilitadores.map((facilitador) => (
            <div className="flex flex-col items-center justify-center">
              <img
                className="w-25 h-25 object-cover rounded-full"
                src={facilitador.foto}
                alt={facilitador.nome}
              />
              <h3 className="text-lg font-semibold">{facilitador.nome}</h3>
              <p className="text-sm w-2/3 text-center">{facilitador.cargo}</p>
            </div>
          ))}
        </div>

        <div className="mt-20">
          <img className="w-25 object-cover" src={logo7} alt='Logo 7etimoceu' />
        </div>
      </div>
    </div>
  );
}
