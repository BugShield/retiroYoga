const textos = {
  cta: 'RECONECTE-SE COM A SUA ESSÊNCIA',
  texto:  'Uma jornada de 3 dias para você se limpar, equilibrar e reconectar com a energia do amor verdadeiro, por meio de práticomo do Hatha Yoga e da magia com s forças da natureza'
}

export default function Sobre() {
  return (
    <div id="sobre" className="h-dvh flex flex-col justify-center">
      <div className="my-4 flex flex-col items-start gap-4 text-center">
        <h2 className="font-bold text-[22px] w-1/2 mx-auto">
            {textos.cta}
        </h2>
        <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto">
          <p>
            {textos.texto}
          </p>
          
        </div>
      </div>
    </div>
  );
}
