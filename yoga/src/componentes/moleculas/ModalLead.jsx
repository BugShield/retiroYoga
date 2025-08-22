import { useState } from "react";
import { X } from "lucide-react";

export default function ModalLead({ onClose }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [pagamento, setPagamento] = useState("pixVista");

  const [errors, setErrors] = useState({
    nome: "",
    email: "",
    telefone: "",
  });

  // Máscara de telefone (11) 99999-9999
  function formatarTelefone(value) {
    const numeros = value.replace(/\D/g, "");
    if (!numeros) return "";
    if (numeros.length <= 2) return `(${numeros}`;
    if (numeros.length <= 7)
      return `(${numeros.slice(0, 2)}) ${numeros.slice(2)}`;
    return `(${numeros.slice(0, 2)}) ${numeros.slice(2, 7)}-${numeros.slice(7, 11)}`;
  }

  // Validação de e-mail (regra simples solicitada)
  function validarEmail(value) {
    return value.includes("@") && value.includes(".com");
  }

  function setFieldError(field, message) {
    setErrors((prev) => ({ ...prev, [field]: message }));
  }

  // Handlers de blur para mostrar erro ao sair do campo
  function handleBlurNome() {
    if (!nome.trim()) setFieldError("nome", "Informe seu nome.");
    else setFieldError("nome", "");
  }

  function handleBlurEmail() {
    if (!email.trim()) setFieldError("email", "Informe seu e-mail.");
    else if (!validarEmail(email)) setFieldError("email", "E-mail inválido (precisa ter @ e .com).");
    else setFieldError("email", "");
  }

  function handleBlurTelefone() {
    const apenasNumeros = telefone.replace(/\D/g, "");
    if (!apenasNumeros) setFieldError("telefone", "Informe seu telefone.");
    else if (apenasNumeros.length < 10)
      setFieldError("telefone", "Telefone incompleto.");
    else setFieldError("telefone", "");
  }

  // Número destino no formato internacional (sem +, espaços ou traços)
  const phone = "5511912879966";

  function handleSubmit(e) {
    e.preventDefault();

    // Rodar validações
    handleBlurNome();
    handleBlurEmail();
    handleBlurTelefone();

    // Se houver qualquer erro, não prosseguir
    const checksNow = {
      nome: !nome.trim() ? "Informe seu nome." : "",
      email: !email.trim()
        ? "Informe seu e-mail."
        : !validarEmail(email)
        ? "E-mail inválido."
        : "",
      telefone:
        telefone.replace(/\D/g, "").length < 10
          ? "Telefone incompleto."
          : "",
    };
    const finalErrors = {
      nome: checksNow.nome || errors.nome,
      email: checksNow.email || errors.email,
      telefone: checksNow.telefone || errors.telefone,
    };
    setErrors(finalErrors);

    if (finalErrors.nome || finalErrors.email || finalErrors.telefone) return;

    const lead = {
      nome: nome.trim(),
      email: email.trim(),
      telefone: telefone.trim(),
      pagamento,
      origem: "Site - Retiro 7º Céu",
      data: new Date().toISOString(),
    };

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

    const url = `https://wa.me/${phone}?text=${encodeURIComponent(mensagem)}`;
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
        return "Erro";
    }
  }

  const isDisabled =
    !nome.trim() ||
    !email.trim() ||
    !validarEmail(email) ||
    telefone.replace(/\D/g, "").length < 10;

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
          <X onClick={onClose} className="text-red-600 cursor-pointer" />
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Nome */}
          <div className="flex flex-col">
            <label htmlFor="nome" className="mb-1 text-sm font-medium">
              Nome Completo
            </label>
            <input
              type="text"
              id="nome"
              value={nome}
              onChange={(e) => setNome(e.target.value)}
              onBlur={handleBlurNome}
              className={`border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.nome ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Seu nome"
            />
            {errors.nome && (
              <p className="text-red-600 text-xs mt-1">{errors.nome}</p>
            )}
          </div>

          {/* Email */}
          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 text-sm font-medium">
              E-mail
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onBlur={handleBlurEmail}
              className={`border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.email ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="seu@email.com"
            />
            {errors.email && (
              <p className="text-red-600 text-xs mt-1">{errors.email}</p>
            )}
          </div>

          {/* Telefone */}
          <div className="flex flex-col">
            <label htmlFor="telefone" className="mb-1 text-sm font-medium">
              Telefone
            </label>
            <input
              type="tel"
              id="telefone"
              value={telefone}
              onChange={(e) => setTelefone(formatarTelefone(e.target.value))}
              onBlur={handleBlurTelefone}
              className={`border rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 ${
                errors.telefone ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="(11) 91234-5678"
              inputMode="numeric"
            />
            {errors.telefone && (
              <p className="text-red-600 text-xs mt-1">{errors.telefone}</p>
            )}
          </div>

          {/* Pagamento */}
          <div className="flex flex-col">
            <label htmlFor="pagamento" className="mb-2 text-sm font-medium">
              Forma de Pagamento
            </label>
            <select
              id="pagamento"
              value={pagamento}
              onChange={(e) => setPagamento(e.target.value)}
              className="border border-gray-300 rounded-lg px-3 py-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option value="pixVista">PIX à vista</option>
              <option value="pixParcelado">PIX parcelado</option>
              <option value="cartaoCredito">Cartão de crédito</option>
            </select>
          </div>

          <button
            type="submit"
            className="border bg-green-600 rounded-xl text-white px-4 py-2 mt-2 hover:bg-green-700 transition disabled:opacity-60"
            disabled={isDisabled}
          >
            Enviar pelo WhatsApp
          </button>
        </form>
      </div>
    </div>
  );
}