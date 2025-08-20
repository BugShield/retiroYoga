import { useState } from "react";
import { X } from "lucide-react";

export default function ModalLead({ onClose }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pagamento, setPagamento] = useState("");

  // Coloque aqui o número destino no formato internacional (sem +, espaços ou traços)
  // Exemplo: Brasil (55) + DDD (11) + número (912345678) => "5511912345678"
  const phone = "5511912879966";

  function handleSubmit(e) {
    e.preventDefault();

    if (!nome.trim()) {
      alert("Por favor, informe seu nome.");
      return;
    }
    if (!email.trim()) {
      alert("Por favor, informe seu e-mail.");
      return;
    }

    const lead = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      pagamento,
      origem: "Site - Retiro 7º Céu",
      data: new Date().toISOString(),
    };

    // Mensagem personalizada
    const mensagem = [
      `Olá! Meu nome é ${lead.nome}.`,
      "Tenho interesse no retiro e gostaria de mais informações.",
      "",
      "Meus dados:",
      `• Nome: ${lead.nome}`,
      `• E-mail: ${lead.email}`,
      `• Telefone: ${lead.telefone}`,
      `• Forma de Pagamento: ${formataPagamento(pagamento)}`,
      `• Origem: ${lead.origem}`,
    ].join("\n");

    // Monta a URL do WhatsApp
    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;

    // Abre em nova aba
    window.open(url, "_blank");
  }

  function formataPagamento(p) {
    switch (p) {
      case "pixVista":
        return "PIX à vista";
      case "pixParcelado":
        return "PIX parcelado";
      case "cartaoCredito":
        return "Cartão de crédito";
      default:
        return "Erro"
    }
  }

  return (
    <div
      className="fixed inset-0 bg-black/50 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white text-black p-6 rounded-lg shadow-lg w-11/12 sm:w-2/3 md:w-1/2 lg:w-2/5"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between">
          <h2 className="text-xl font-bold mb-4 text-center underline">Pagamento</h2>
          <X onClick={onClose} className="text-red-600" />
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-1 text-sm font-medium">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="Seu nome"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="seu@email.com"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              Telefone
            </label>
            <input
              type="phone"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
              placeholder="1199999999"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="pagamento" className="mb-2 text-sm font-medium">
              Forma de Pagamento
            </label>
            <select
              name="select"
              id="pagamento"
              value={pagamento}
              onChange={(e) => setPagamento(e.target.value)}
              className="-ml-1"
            >
              <option value="pixVista" selected>
                PIX à vista
              </option>
              <option value="pixParcelado">PIX parcelado</option>
              <option value="cartaoCredito">Cartão de crédito</option>
            </select>
          </div>

          <button
            type="submit"
            className="border bg-green-600 rounded-xl text-white px-4 py-2 mt-2 hover:bg-green-700 transition disabled:opacity-60"
            disabled={!nome.trim() || !email.trim()}
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}
