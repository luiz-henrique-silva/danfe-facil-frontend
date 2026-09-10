"use client";

import { useEffect, useState } from "react";

interface HistoryItem {
  id: string;
  filename: string;
  status: string;
  error_message: string | null;
  result_size: number | null;
  created_at: string;
}

function formatDate(iso: string) {
  if (!iso) return "";
  try {
    return new Date(iso).toLocaleString("pt-BR", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  } catch {
    return iso;
  }
}

function formatSize(bytes: number | null) {
  if (!bytes) return "—";
  if (bytes < 1024) return `${bytes} B`;
  return `${(bytes / 1024).toFixed(1)} KB`;
}

export default function Historico() {
  const [items, setItems] = useState<HistoryItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function load() {
      try {
        const res = await fetch("/api/pdf/history", { cache: "no-store" });
        if (res.ok) setItems(await res.json());
      } catch {
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-1">Histórico</h1>
      <p className="text-sm text-[#a1a1a1] mb-6">
        Seus últimos 50 processamentos.
      </p>

      {loading ? (
        <div className="space-y-3">
          {[0, 1, 2, 3].map((i) => (
            <div key={i} className="h-16 rounded-xl bg-[#1a1a1a] animate-pulse" />
          ))}
        </div>
      ) : items.length === 0 ? (
        <div className="rounded-2xl border border-dashed border-[#333333] p-12 text-center">
          <div className="text-3xl mb-3">🗂️</div>
          <p className="font-medium">Nenhum processamento ainda</p>
          <p className="mt-1 text-sm text-[#666666]">
            Processe seu primeiro PDF na página inicial do dashboard.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto rounded-2xl border border-[#2a2a2a]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[#2a2a2a] text-left text-xs uppercase tracking-wider text-[#666666]">
                <th className="px-5 py-3 font-medium">Arquivo</th>
                <th className="px-5 py-3 font-medium">Status</th>
                <th className="px-5 py-3 font-medium">Tamanho</th>
                <th className="px-5 py-3 font-medium">Data</th>
              </tr>
            </thead>
            <tbody>
              {items.map((item) => (
                <tr key={item.id} className="border-b border-[#1f1f1f] last:border-0">
                  <td className="px-5 py-3 max-w-[280px] truncate">
                    <span className="inline-flex items-center gap-2">
                      <span>📄</span>
                      <span className="truncate">{item.filename}</span>
                    </span>
                  </td>
                  <td className="px-5 py-3">
                    {item.status === "success" ? (
                      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#22c55e]/10 border border-[#22c55e]/30 px-2.5 py-0.5 text-xs text-[#22c55e]">
                        ✓ Sucesso
                      </span>
                    ) : (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-full bg-red-500/10 border border-red-500/30 px-2.5 py-0.5 text-xs text-red-400"
                        title={item.error_message || ""}
                      >
                        ✕ Erro
                      </span>
                    )}
                  </td>
                  <td className="px-5 py-3 text-[#a1a1a1]">
                    {formatSize(item.result_size)}
                  </td>
                  <td className="px-5 py-3 text-[#a1a1a1]">
                    {formatDate(item.created_at)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}