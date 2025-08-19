import { Instagram, MessageCircle } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#f4efef] text-gray-700 py-6 flex flex-col items-center gap-4">
      <div className="container mx-auto px-4 flex flex-col items-center text-center">
        <p className="mb-4">
          Contato:{" "}
          <a href="mailto:rodrigo@7etimoceu.com.br" className="underline">
            rodrigo@7etimoceu.com.br
          </a>
        </p>

        <div className="flex gap-3 mb-4 sm:flex-row sm:gap-6 sm:items-center">
          <a
            href="https://www.instagram.com/7etimoceu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <Instagram className="w-6 h-6" />
            <span>@7etimoceu</span>
          </a>

          <a
            href="https://wa.me/5511993928432"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2"
          >
            <MessageCircle className="w-6 h-6" />
            <span>WhatsApp</span>
          </a>
        </div>

        <p className="text-sm text-gray-600">
          © 2025 - 7étimo Céu Comunicação Ltda. - CNPJ: 07.253.808.0001-20
        </p>
      </div>
    </footer>
  );
}
