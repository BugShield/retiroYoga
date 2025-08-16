import { Instagram  } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-red-900 text-white py-6">
      <div className="container mx-auto px-4 flex flex-col items-center">
        <p className="mb-4">
          Contato:{" "}
          <a
            href="mailto:rodrigo@7etimoceu.com.br"
            className="underline"
          >
            rodrigo@7etimoceu.com.br
          </a>
        </p>
        <div className="flex items-center gap-4 mb-4">
          <a
            href="https://www.instagram.com/7etimoceu"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2"
          >
            <Instagram className="w-6 h-6" />
            <span>@7etimoceu</span>
          </a>
        </div>
        <a
          href="https://7etimoceu.com.br/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/assets/logo7.png"
            alt="Logo 7etimoceu"
            className="w-16"
          />
        </a>
      </div>
    </footer>
  );
}