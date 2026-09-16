"use client";

import { useState } from "react";
import ProcessPdf from "./ProcessPdf";

const MODES = [
  {
    id: "unify",
    label: "Unificar etiqueta + DANFE",
    desc: "Une etiqueta de envio e DANFE em uma única página.",
  },
  {
    id: "convert",
    label: "Converter PDF para etiqueta 10x15",
    desc: "Converte qualquer página do PDF em etiqueta térmica 10x15.",
  },
] as const;

type Mode = (typeof MODES)[number]["id"];

export default function ModeSelector() {
  const [mode, setMode] = useState<Mode>("unify");

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">
        {mode === "unify" ? "Processar PDF" : "Converter para etiqueta 10x15"}
      </h1>
      <p className="text-sm text-[#71717a] mb-6">
        {mode === "unify"
          ? "Envie o PDF da etiqueta do e-commerce e receba o DANFE + etiqueta em uma única página."
          : "Envie qualquer PDF e cada página será convertida para etiqueta térmica 10x15."}
      </p>

      <div className="grid gap-3 md:grid-cols-2 mb-8">
        {MODES.map((m) => (
          <button
            key={m.id}
            onClick={() => setMode(m.id)}
            className={`rounded-2xl border p-4 text-left transition-all ${
              mode === m.id
                ? "border-[#22c55e] bg-[#22c55e]/5"
                : "border-[#e4e4e7] bg-[#ffffff] hover:border-[#b0b0b5]"
            }`}
          >
            <p
              className={`font-semibold ${
                mode === m.id ? "text-[#22c55e]" : "text-[#18181b]"
              }`}
            >
              {m.label}
            </p>
            <p className="text-xs text-[#71717a] mt-1">{m.desc}</p>
          </button>
        ))}
      </div>

      <ProcessPdf key={mode} mode={mode} />
    </div>
  );
}