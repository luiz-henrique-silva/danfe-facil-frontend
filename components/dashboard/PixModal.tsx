"use client";

import { useState } from "react";

interface PixModalProps {
  open: boolean;
  planName: string;
  qrBase64: string | null;
  qrCode: string | null;
  paymentId: string | null;
  error: string;
  loading: boolean;
  onClose: () => void;
}

export default function PixModal({
  open,
  planName,
  qrBase64,
  qrCode,
  paymentId,
  error,
  loading,
  onClose,
}: PixModalProps) {
  const [copied, setCopied] = useState(false);

  if (!open) return null;

  async function copyCode() {
    if (!qrCode) return;
    try {
      await navigator.clipboard.writeText(qrCode);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // clipboard indisponível
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4">
      <div className="w-full max-w-md rounded-2xl bg-[#ffffff] p-6 shadow-2xl">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-bold">Pagar com PIX</h2>
          <button
            onClick={onClose}
            className="text-[#7d7d85] hover:text-black text-xl leading-none"
            aria-label="Fechar"
          >
            ×
          </button>
        </div>

        <p className="text-sm text-[#71717a] mb-4">
          Plano <strong>{planName}</strong> — escaneie o QR code no app do seu
          banco para pagar. A assinatura é ativada automaticamente após a
          confirmação.
        </p>

        {error && (
          <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-500 mb-4">
            {error}
          </div>
        )}

        {loading && (
          <div className="py-10 text-center text-sm text-[#71717a]">
            Gerando QR code...
          </div>
        )}

        {!loading && qrBase64 && (
          <div className="space-y-4">
            <div className="mx-auto w-fit rounded-xl border border-[#e4e4e7] p-3">
              <img
                src={`data:image/png;base64,${qrBase64}`}
                alt="QR Code PIX"
                className="w-52 h-52"
              />
            </div>
            {qrCode && (
              <div className="rounded-xl bg-[#f5f5f6] border border-[#e4e4e7] p-3">
                <div className="flex items-center justify-between gap-2">
                  <p className="text-xs text-[#7d7d85]">PIX copia e cola</p>
                  <button
                    onClick={copyCode}
                    className="text-xs font-semibold text-[#22c55e] hover:underline"
                  >
                    {copied ? "Copiado!" : "Copiar"}
                  </button>
                </div>
                <p className="mt-1 font-mono text-[10px] leading-relaxed break-all text-[#52525b]">
                  {qrCode}
                </p>
              </div>
            )}
            {paymentId && (
              <p className="text-xs text-center text-[#7d7d85]">
                Pagamento em aberto. Esta página será atualizada
                automaticamente após a confirmação.
              </p>
            )}
          </div>
        )}

        <button
          onClick={onClose}
          className="mt-6 w-full rounded-xl border border-[#e4e4e7] py-3 text-sm font-semibold text-[#52525b] hover:bg-[#f5f5f6] transition-colors"
        >
          Fechar
        </button>
      </div>
    </div>
  );
}