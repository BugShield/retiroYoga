import SectionInfo from "../moleculas/SectionInfo";
import {local} from "../../conteudo/local"
 
export default function Local() {
  return (
    <div id="local">
      <SectionInfo titulo={local.titulo} descricao={local.descricao} imagens={local.imagens} />
    </div>
  );
}
