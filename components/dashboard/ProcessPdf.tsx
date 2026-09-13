"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface Usage {
  plan: string;
  processed_month: number;
  limit: number | null;
  unlimited?: boolean;
}

const PAGE_SIZES = [
  { value: "100x150", label: "Térmica 100x150mm", detail: "Página fixa 10x15 cm — conteúdo estica até as paredes laterais" },
  { value: "auto", label: "Altura exata", detail: "100% da largura + altura exata do conteúdo (rolo contínuo)" },
  { value: "a4", label: "A4", detail: "Página A4 — conteúdo estica para preencher a folha" },
];

const PLAN_NAMES: Record<string, string> = {
  free: "Grátis",
  pro: "Pro",
  business: "Business",
};

export default function ProcessPdf() {
  const [usage, setUsage] = useState<Usage | null>(null);
  const [dragging, setDragging] = useState(false);
  const [file, setFile] = useState<File | null>(null);
  const [pageSize, setPageSize] = useState("100x150");
  const [processing, setProcessing] = useState(false);
  const [result, setResult] = useState<{
    url: string;
    filename: string;
    warnings: string[];
    pagesUsed: number;
    pagesGenerated: number;
    scale: number;
  } | null>(null);
  const [error, setError] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const fetchUsage = useCallback(async () => {
    try {
      const res = await fetch("/api/pdf/usage", { cache: "no-store" });
      if (res.ok) setUsage(await res.json());
    } catch {}
  }, []);

  useEffect(() => {
    fetchUsage();
  }, [fetchUsage]);

  function handleFile(f: File) {
    if (!f.name.toLowerCase().endsWith(".pdf")) {
      setError("Somente arquivos PDF são aceitos.");
      return;
    }
    setError("");
    setFile(f);
    setResult(null);
  }

  async function handleSubmit() {
    if (!file) {
      setError("Selecione um arquivo PDF primeiro.");
      return;
    }
    setProcessing(true);
    setError("");
    setResult(null);
    try {
      const form = new FormData();
      form.append("file", file);
      const res = await fetch(`/api/pdf/process?page_size=${pageSize}`, {
        method: "POST",
        body: form,
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        setError(data?.detail || "Não foi possível processar o arquivo.");
        return;
      }

      const blob = await res.blob();
      const url = URL.createObjectURL(blob);

      const disposition = res.headers.get("content-disposition") || "";
      const match = disposition.match(/filename="([^"]+)"/);
      const filename = match ? match[1] : "processado_DANFE.pdf";

      const rawWarnings = res.headers.get("x-warnings") || "";
      const warnings = rawWarnings ? rawWarnings.split("|").filter(Boolean) : [];

      setResult({
        url,
        filename,
        warnings,
        pagesUsed: Number(res.headers.get("x-pages-used")) || 0,
        pagesGenerated: Number(res.headers.get("x-pages-generated")) || 0,
        scale: Number(res.headers.get("x-scale")) || 1,
      });

      fetchUsage();
    } catch {
      setError("Erro de conexão. Tente novamente.");
    } finally {
      setProcessing(false);
    }
  }

  const usedPercent = usage?.limit
    ? Math.round((usage.processed_month / usage.limit) * 100)
    : 0;
  const isUnlimited = usage?.unlimited || (usage?.limit && usage.limit >= 100000);

  return (
    <div className="max-w-3xl mx-auto space-y-6">
      {/* Usage bar */}
      {usage && (
        <div className="rounded-2xl border border-[#e4e4e7] bg-[#ffffff] p-5">
          <div className="flex items-center justify-between mb-3">
            <div>
              <p className="text-sm font-medium">
                Plano{" "}
                <span className="text-[#22c55e] font-semibold">
                  {PLAN_NAMES[usage.plan] || usage.plan}
                </span>
              </p>
              <p className="text-xs text-[#7d7d85] mt-0.5">
                {isUnlimited
                  ? "Páginas ilimitadas neste mês"
                  : `${usage.processed_month} de ${usage.limit} páginas geradas neste mês`}
              </p>
              <p className="text-[11px] text-[#22c55e] mt-1">
                Erros de processamento não contam na cota.
              </p>
            </div>
            {usage.plan === "free" && (
              <a
                href="/dashboard/assinatura"
                className="text-xs font-semibold text-[#22c55e] hover:underline"
              >
                Fazer upgrade →
              </a>
            )}
          </div>
          {!isUnlimited && (
            <div className="h-2 rounded-full bg-[#e4e4e7] overflow-hidden">
              <div
                className={`h-full rounded-full transition-all ${
                  usedPercent > 80 ? "bg-red-500" : "bg-[#22c55e]"
                }`}
                style={{ width: `${Math.min(usedPercent, 100)}%` }}
              />
            </div>
          )}
        </div>
      )}

      {/* Dropzone */}
      <div
        className={`rounded-2xl border-2 border-dashed p-10 text-center transition-colors cursor-pointer ${
          dragging
            ? "border-[#22c55e] bg-[#22c55e]/5"
            : "border-[#d4d4d8] bg-[#ffffff] hover:border-[#b0b0b5]"
        }`}
        onDragOver={(e) => {
          e.preventDefault();
          setDragging(true);
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault();
          setDragging(false);
          const f = e.dataTransfer.files?.[0];
          if (f) handleFile(f);
        }}
        onClick={() => inputRef.current?.click()}
      >
        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          className="hidden"
          onChange={(e) => {
            const f = e.target.files?.[0];
            if (f) handleFile(f);
            e.target.value = "";
          }}
        />
        <div className="mx-auto w-14 h-14 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/40 flex items-center justify-center">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
            <polyline points="14 2 14 8 20 8" />
          </svg>
        </div>
        <p className="mt-4 font-medium">
          {file ? file.name : "Arraste seu PDF aqui"}
        </p>
        <p className="mt-1 text-sm text-[#7d7d85]">
          {file
            ? `${(file.size / 1024).toFixed(0)} KB — clique para trocar`
            : "ou clique para selecionar o arquivo"}
        </p>
        {file && !file.name.toLowerCase().endsWith(".pdf") && (
          <p className="mt-2 text-sm text-red-400">Arquivo inválido. Selecione um PDF.</p>
        )}
      </div>

      {/* Page size selector */}
      <div className="rounded-2xl border border-[#e4e4e7] bg-[#ffffff] p-5">
        <p className="text-sm font-medium mb-3">Tamanho da página</p>
        <div className="grid gap-3">
          {PAGE_SIZES.map((s) => (
            <label
              key={s.value}
              className={`flex items-start gap-3 rounded-xl border p-4 cursor-pointer transition-all ${
                pageSize === s.value
                  ? "border-[#22c55e] bg-[#22c55e]/5"
                  : "border-[#d4d4d8] hover:border-[#b0b0b5]"
              }`}
            >
              <input
                type="radio"
                name="pageSize"
                value={s.value}
                checked={pageSize === s.value}
                onChange={() => setPageSize(s.value)}
                className="mt-1 accent-[#22c55e]"
              />
              <div>
                <p className="text-sm font-medium">{s.label}</p>
                <p className="text-xs text-[#7d7d85] mt-0.5">{s.detail}</p>
              </div>
            </label>
          ))}
        </div>
      </div>

      {error && (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-5 py-4 text-sm text-red-400">
          {error}
        </div>
      )}

      {/* Result */}
      {result && (
        <div className="rounded-2xl border border-[#22c55e]/40 bg-[#22c55e]/5 p-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#22c55e] flex items-center justify-center text-black">
              ✓
            </div>
            <div>
              <p className="font-semibold">Processado com sucesso!</p>
              <p className="text-xs text-[#71717a]">
                {result.pagesGenerated} páginas geradas a partir de{" "}
                {result.pagesUsed} páginas · escala {(result.scale * 100).toFixed(0)}%
              </p>
            </div>
          </div>

          {result.warnings.length > 0 && (
            <div className="mt-4 rounded-xl border border-yellow-500/30 bg-yellow-500/10 px-4 py-3 space-y-1">
              <p className="text-xs font-semibold text-yellow-400">Avisos:</p>
              {result.warnings.map((w, i) => (
                <p key={i} className="text-xs text-yellow-300/80">
                  • {w}
                </p>
              ))}
            </div>
          )}

          <a
            href={result.url}
            download={result.filename}
            className="mt-5 inline-flex items-center gap-2 rounded-xl bg-[#22c55e] px-6 py-3 text-sm font-semibold text-black hover:bg-[#16a34a] transition-colors"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="7 10 12 15 17 10" />
              <line x1="12" y1="15" x2="12" y2="3" />
            </svg>
            Baixar {result.filename}
          </a>
        </div>
      )}

      {/* Submit */}
      <button
        onClick={handleSubmit}
        disabled={!file || processing}
        className="w-full rounded-xl bg-[#22c55e] py-4 text-base font-semibold text-black hover:bg-[#16a34a] disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
      >
        {processing ? "Processando..." : file ? "Processar PDF" : "Selecione um PDF para começar"}
      </button>
    </div>
  );
}