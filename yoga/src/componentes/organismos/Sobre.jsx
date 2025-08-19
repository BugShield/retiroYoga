import logo7 from "/assets/logo7.png"

const textos = {
  cta: "RECONECTE-SE COM A SUA ESSÊNCIA",
  texto:
    "Uma jornada de 3 dias para você se limpar, equilibrar e reconectar com a energia do amor verdadeiro, por meio de práticas do Hatha Yoga e da Magia com as forças da natureza.",
};

export default function Sobre() {
  return (
    <div id="sobre" className="h-dvh flex flex-col justify-center items-center">
      <div className="mt-20 flex flex-col items-start gap-4 text-center">
        <h2 className="font-bold text-[22px] w-2/3 mx-auto font-[tan]">{textos.cta}</h2>
        <div className="flex flex-col gap-4 text-[16px] w-9/10 mx-auto">
          <p>{textos.texto}</p>
        </div>
        <div className="mt-60 mx-auto">
          <img className="w-25 object-cover" src={logo7} alt="Logo 7etimoceu" />
        </div>
      </div>
    </div>
  );
}
