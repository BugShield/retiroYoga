import logoBranco from "/assets/logoBranco.png"
import { Sparkles } from 'lucide-react';

const textos = {
  cta: "RECONECTE-SE COM A SUA ESSÊNCIA",
  texto:
    "Uma jornada de 3 dias para você se limpar, equilibrar e reconectar com a energia do amor verdadeiro, por meio de práticas do Hatha Yoga e da Magia com as forças da natureza.",
};

export default function Sobre() {
  return (
    <div id="sobre" className="h-dvh flex flex-col justify-center items-center">
      <div className="mt-20 flex flex-col items-start gap-4 text-center">
        <h2 className="font-bold text-[22px] w-2/3 mx-auto font-[tan] text-white md:text=[24px]">{textos.cta}</h2>
        <div className="mt-4 flex flex-col gap-4 text-[16px] w-9/10 mx-auto text-white md:w-1/2 lg:text-[18px]">
          <p>{textos.texto}</p>
        </div>
        <Sparkles className="size-15 mx-auto mt-6 text-white" />
        <div className="mt-40 mx-auto">
          <img className="w-25 object-cover" src={logoBranco} alt="Logo 7etimoceu" />
        </div>
      </div>
    </div>
  );
}
