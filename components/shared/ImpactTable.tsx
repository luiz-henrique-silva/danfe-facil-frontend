const ROWS = [
  {
    profile: "Iniciante",
    shipmentsPerDay: "15 / dia",
    without: "900 un.",
    with: "450 un.",
    savedEtiquetas: "5.400",
    savedMoney: "R$ 378,00",
    plan: "Básico",
    planPrice: "R$ 29,90",
  },
  {
    profile: "Bronze",
    shipmentsPerDay: "30 / dia",
    without: "1.800 un.",
    with: "900 un.",
    savedEtiquetas: "10.800",
    savedMoney: "R$ 756,00",
    plan: "Pro",
    planPrice: "R$ 49,90",
  },
  {
    profile: "Prata",
    shipmentsPerDay: "60 / dia",
    without: "3.600 un.",
    with: "1.800 un.",
    savedEtiquetas: "21.600",
    savedMoney: "R$ 1.512,00",
    plan: "Business",
    planPrice: "R$ 79,90",
  },
  {
    profile: "Ouro",
    shipmentsPerDay: "120 / dia",
    without: "7.200 un.",
    with: "3.600 un.",
    savedEtiquetas: "43.200",
    savedMoney: "R$ 3.024,00",
    plan: "Business",
    planPrice: "R$ 79,90",
  },
  {
    profile: "Platinum",
    shipmentsPerDay: "300 / dia",
    without: "18.000 un.",
    with: "9.000 un.",
    savedEtiquetas: "108.000",
    savedMoney: "R$ 7.560,00",
    plan: "Business",
    planPrice: "R$ 79,90",
  },
];

export default function ImpactTable() {
  return (
    <section className="px-4 md:px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-[#22c55e]">
            Economia real
          </span>
          <h2 className="mt-2 text-3xl md:text-4xl font-bold">
            Quanto você economiza unificando etiqueta + DANFE?
          </h2>
          <p className="mt-3 text-[#71717a]">
            Sem o UniDANFE, cada envio gera duas etiquetas (transporte + DANFE).
            Com o UniDANFE, um só. Veja a economia anual estimada.
          </p>
        </div>

        <div className="mt-12 overflow-x-auto rounded-2xl border border-[#e4e4e7]">
          <table className="w-full min-w-[760px] text-sm">
            <thead>
              <tr className="border-b border-[#e4e4e7] bg-[#fafafa] text-left text-xs uppercase tracking-wider text-[#7d7d85]">
                <th className="px-5 py-3 font-medium">Perfil</th>
                <th className="px-5 py-3 font-medium">Envios / dia</th>
                <th className="px-5 py-3 font-medium">Sem unificador (mês)</th>
                <th className="px-5 py-3 font-medium">Com unificador (mês)</th>
                <th className="px-5 py-3 font-medium">Economia de etiquetas (ano)</th>
                <th className="px-5 py-3 font-medium">Economia financeira (ano)*</th>
                <th className="px-5 py-3 font-medium">Plano ideal</th>
              </tr>
            </thead>
            <tbody>
              {ROWS.map((r) => (
                <tr
                  key={r.profile}
                  className="border-b border-[#e4e4e7] last:border-0 hover:bg-[#fafafa] transition-colors"
                >
<td className="px-5 py-4 font-medium whitespace-nowrap">{r.profile}</td>
                  <td className="px-5 py-4 text-[#71717a] whitespace-nowrap">
                    {r.shipmentsPerDay}
                  </td>
                  <td className="px-5 py-4 text-[#71717a] whitespace-nowrap">
                    {r.without}
                  </td>
                  <td className="px-5 py-4 text-[#22c55e] font-medium whitespace-nowrap">
                    {r.with}
                  </td>
                  <td className="px-5 py-4 text-[#71717a] whitespace-nowrap">
                    {r.savedEtiquetas}
                  </td>
                  <td className="px-5 py-4 font-bold text-[#22c55e] whitespace-nowrap">
                    {r.savedMoney}
                  </td>
                  <td className="px-5 py-4 whitespace-nowrap">
                    <span className="inline-flex items-center gap-1 rounded-full border border-[#22c55e]/30 bg-[#22c55e]/10 px-2.5 py-0.5 text-xs font-semibold text-[#22c55e]">
                      {r.plan} · {r.planPrice}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="mt-4 text-xs text-[#7d7d85]">
          * Economia estimada com etiquetas térmicas 100x150mm a ~R$ 0,07 por
          unidade, considerando 30 dias/mês e a impressão separada de etiqueta
          de transporte + DANFE. Valores aproximados.
        </p>
      </div>
    </section>
  );
}
