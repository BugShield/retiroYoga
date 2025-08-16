import { alimentacao } from "../../conteudo/alimentacao";
import SectionInfo from "../moleculas/SectionInfo";

export default function Alimentacao() {
  return (
    <div id="alimentacao" >
      <SectionInfo
        titulo={alimentacao.titulo}
        descricao={alimentacao.descricao}
        imagens={alimentacao.imagens}
      />
    </div>
  );
}
