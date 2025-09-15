import { X } from "lucide-react";

export default function ModalTextoLegal({ onClose, onConfirm }) {
  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-1/3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold underline">Texto Legal</h2>
          <X onClick={onClose} className="text-red-600 cursor-pointer" />
        </div>

        <p className="text-sm text-gray-700 leading-relaxed">
          O participante tem o direito de cancelar a compra do ingresso até 7 dias 
          após a data da compra, desde que o cancelamento ocorra com pelo menos 
          30 dias de antecedência da data do evento. Após esse período, não serão 
          aceitos pedidos de reembolso. Em caso de não comparecimento ou 
          desistência, não haverá reembolso do valor pago.
        </p>

        <div className="flex justify-end gap-3 mt-6">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded-lg hover:bg-gray-400 transition"
          >
            Fechar
          </button>
          <button
            onClick={onConfirm}
            className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
          >
            Li e concordo
          </button>
        </div>
      </div>
    </div>
  );
}
