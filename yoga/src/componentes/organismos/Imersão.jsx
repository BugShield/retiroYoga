const atividades = [
  "Limpeza Energética com Ervas",
  "Sankalpa",
  "Prática de Hatha Yoga do Amor",
  "Meditação do Amor Próprio",
  " Ritual Cachoeira Chakra Coronário",
  "Oferendas Elementos Naturais",
  " Oficina de Magias do Amor",
  "Ativação Chakra Cardíaco",
  "Ritual da Lua Cheia na Fogueira",
  "Quadro do Amor",
  "Ritual com Ervas das Deusas do Amor",
];

export default function Imersao() {
  return (
    <div id="imersao" className="h-dvh">
      <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto">
        <h2 className="font-bold text-[22px] ml-1 my-4">Imersão</h2>
        <div className="flex flex-col ">
          <p>
            Neste retiro, convidamos você a mergulhar em uma jornada de
            reconexão profunda consigo mesmo(a) e com as energias sutis que nos
            cercam. Através de práticas ancestrais, rituais sagrados e
            experiências imersivas, cada atividade foi cuidadosamente pensada
            para abrir o coração, equilibrar os chakras e despertar o amor em
            todas as suas formas — o amor-próprio, o amor pelo outro e o amor
            pela vida.
          </p>
          <ul className="my-4 text-center">
            {atividades.map((atividade) => (
              <li className="my-2">{atividade}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
