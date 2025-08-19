import CardsPreco from "../moleculas/CardsPreco";
import { cards } from "../../conteudo/cardsPreco";

export default function Investimento() {
  return (
    <div className="pt-8">
      <div className="max-w-5xl mx-auto px-4 xl:text-center">
        <header className="mt-8 mb-8">
          <h1 className="text-2xl font-bold text-white ml-2 xl:text-2xl ">Opções de Hospedagem</h1>
          <p className="mt-1 ml-2 text-white">
            Escolha a melhor opção para sua estadia. Valores por pessoa.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:pb-20">
          {cards.map((c, i) => (
            <CardsPreco key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
