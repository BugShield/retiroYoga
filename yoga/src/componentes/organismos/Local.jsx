import SectionInfo from "../moleculas/SectionInfo";
import {local} from "../../conteudo/local"
 
export default function Local() {
  return (
    <div id="local" className="scroll-mt-24 h-dvh">
      <SectionInfo titulo={local.titulo} descricao={local.descricao} imagens={local.imagens} />
    </div>
  );
}
