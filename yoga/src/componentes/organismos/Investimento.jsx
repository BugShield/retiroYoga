import CardsPreco from "../moleculas/CardsPreco";
import {cards} from "../../conteudo/cardsPreco"

export default function Investimento() {
  return (
    <div className="h-dvh">
      <div className="max-w-5xl mx-auto px-4">
        <header className="mt-20 mb-8">
          <h1 className="text-2xl font-bold ">
            Opções de Hospedagem
          </h1>
          <p className=" mt-1">
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
