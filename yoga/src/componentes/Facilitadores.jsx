const facilitadores = [
  {
    nome: "Rodrigo Volponi",
    foto: "https://media.istockphoto.com/id/1450094329/pt/foto/colorful-sunset-viewed-from-the-pink-sea-beach-with-soft-waves.jpg?s=612x612&w=0&k=20&c=FEUPlxDXLzfgcOrglLz_YFY0KnOnQ_wfgi8sS08ROcs=",
    paragrafos: [
      "Rodrigo é o fundador e Terapeuta de Alma do 7étimo Céu. Desenvolveu uma metodologia de terapias integrativas focadas no auxilio a casos de depressão, ansiedade e desequilíbrio ehergético- Seu propósito é guiar buscadores no caminho da reconexão espiritual, utilizando conhecimento adquiri9 em sua jornada em angeologia, numerologia, benzimentos e na manipulação das energias de ervas, cristais e velas",
      "Com mais de 17 anos de experiência como médium, Rodrigo coordenou o Curso de Desenvolvimento Mediúnico no Templo de Umbanda Ogum Beira Mar e formou-se em rituais e benzimentos com diversos mestres e escolas. É Reikiano Nível 3 pelo sistema Usui Tibetano, iniciado na Magia Divina e professor de Yoga, unindo saberes espirituais e terapêuticos em sua jornada.",
    ],
  },
  {
    nome: "Dani Bertolo",
    foto: "https://media.istockphoto.com/id/1450094329/pt/foto/colorful-sunset-viewed-from-the-pink-sea-beach-with-soft-waves.jpg?s=612x612&w=0&k=20&c=FEUPlxDXLzfgcOrglLz_YFY0KnOnQ_wfgi8sS08ROcs=",
    paragrafos: [
      "Terapeuta de Àyurveda e Professora de Yoga, a Dani Bertolo também é uma das anfitriãs e co-fundadora da Prema - Casa da Montanha. Foi pelo seu interesse no Ayurveda e na forma que essa rnedicina olha o mundo que fez uma grande transição de carreira, passou meses na índia e se formou também em Yoga. Nesse grande caminho que a Prema se estruturou e hoje vive mais alinhada com a natureza e o sentir do seu corpo e ciclos dentro e fora. Facilita retiros e cursos de Yoga e Ayurveda, oferece massagens abhyanga e cuida para que a experiência na Prema, seja alinhada com os convites da natureza.",
    ],
  },
];

export default function Facilitadores() {
  return (
    <div id="facilitadores">
      <div >
        {facilitadores.map((facilitador) => (
          <div className="h-dvh my-4 flex flex-col items-center">
            <h2 className="font-bold text-[22px] my-8">Facilitador</h2>
            <img className="w-[150px] h-[150px] rounded-full object-cover" src={facilitador.foto} alt={facilitador.nome} />
            <h4 className="my-4">{facilitador.nome}</h4>
            <div className="mt-10 flex flex-col gap-4">
                {facilitador.paragrafos.map((paragrafo) => (
                  <p className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto">{paragrafo}</p>
                ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
