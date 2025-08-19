import CardsPreco from "../moleculas/CardsPreco";
import { cards } from "../../conteudo/cardsPreco";

const textosInvestimento = {
  titulo: 'Opções de Hospedagem',
  paragrafo: 'Escolha a melhor opção para sua estadia. Valores por pessoa.',
  cta: 'Desconto de 8% para pagamento à vista via PIX.'
}

export default function Investimento() {
  return (
    <div id="investimento" className="pt-8">
      <div className="h-dvh max-w-5xl mx-auto px-4 md:text-center">
        <header className="mt-20 mb-8">
          <h1 className="text-2xl font-bold text-white ml-2 xl:text-2xl ">{textosInvestimento.titulo}</h1>
          <p className="mt-1 ml-2 text-white">
            {textosInvestimento.paragrafo}
          </p>
          <p className="mt-1 ml-2 text-white italic font-semibold underline">{textosInvestimento.cta}</p>
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
