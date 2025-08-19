import CardsPreco from "../moleculas/CardsPreco";
import { cards } from "../../conteudo/cardsPreco";

export default function Investimento() {
  return (
    <div className="h-dvh pt-10">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mt-8 mb-8">
          <h1 className="text-2xl font-bold ml-2 ">Opções de Hospedagem</h1>
          <p className="mt-1 ml-2">
            Escolha a melhor opção para sua estadia. Valores por pessoa.
          </p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {cards.map((c, i) => (
            <CardsPreco key={i} {...c} />
          ))}
        </div>
      </div>
    </div>
  );
}
