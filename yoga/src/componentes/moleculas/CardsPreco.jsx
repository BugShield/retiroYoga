import { useState } from "react";
import ModalLead from "./ModalLead";
import ModalTextoLegal from "./ModalTextoLegal";

export default function CardsPreco({
  title,
  subtitle,
  priceLine,
  installmentLine,
  imgSrc,
  imgAlt,
}) {
  const [isLegalOpen, setIsLegalOpen] = useState(false);
  const [isLeadOpen, setIsLeadOpen] = useState(false);

  const handleClick = () => {
    setIsLegalOpen(true); // Abre primeiro o texto legal
  };

  const handleLegalConfirm = () => {
    setIsLegalOpen(false);
    setIsLeadOpen(true); // Só abre o Lead se concordar
  };

  const closeLegal = () => setIsLegalOpen(false);
  const closeLead = () => setIsLeadOpen(false);

  return (
    <div className="">
      <div
        className="bg-white rounded-2xl shadow-md overflow-hidden border flex flex-col h-auto cursor-pointer"
        onClick={handleClick}
      >
        <img src={imgSrc} alt={imgAlt} className="w-full h-40 object-cover" />
        <div className="p-4 flex-1 flex flex-col">
          <h3 className="text-lg font-semibold text-gray-900 tracking-tight">
            {title}
          </h3>
          <p className="mt-1 text-sm text-gray-600">{subtitle}</p>
          <div className="mt-4">
            <p className="text-xl font-bold text-emerald-700">{priceLine}</p>
            <p className="text-sm text-gray-600 mt-1">{installmentLine}</p>
          </div>
        </div>
      </div>

      {isLegalOpen && (
        <ModalTextoLegal onClose={closeLegal} onConfirm={handleLegalConfirm} />
      )}
      {isLeadOpen && <ModalLead onClose={closeLead} />}
    </div>
  );
}
