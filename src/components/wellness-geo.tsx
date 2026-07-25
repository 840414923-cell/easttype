export function DefinitionBox({ term, termCn, text }: { term: string; termCn?: string; text: string }) {
  return (
    <section className="mb-10">
      <div className="rounded-xl border border-[rgba(140,45,42,0.15)] bg-[var(--color-card-bg)] p-5">
        <p className="text-xs font-semibold text-accent uppercase tracking-wider mb-2">Key Concept</p>
        <h3 className="font-[family-name=var(--font-display)] text-lg text-text mb-2">
          {term}
          {termCn && <span className="text-text2/60 text-sm ml-2">({termCn})</span>}
        </h3>
        <p className="text-text2 leading-relaxed">{text}</p>
      </div>
    </section>
  )
}

export function ConditionalBranchesTable({ title, intro, branches }: {
  title?: string
  intro?: string
  branches: { signal: string; meaning: string; approach: string }[]
}) {
  return (
    <section className="mb-10">
      <h2 className="font-[family-name=var(--font-display)] text-xl text-text mb-2">
        {title || "Which Pattern Sounds Like You?"}
      </h2>
      {intro && <p className="text-text2 text-sm mb-5">{intro}</p>}
      <div className="overflow-x-auto">
        <table className="w-full text-sm border-collapse">
          <thead>
            <tr className="border-b-2 border-[rgba(140,45,42,0.25)]">
              <th className="text-left py-3 px-4 font-semibold text-text">If This Sounds Like You</th>
              <th className="text-left py-3 px-4 font-semibold text-text">The Signal</th>
              <th className="text-left py-3 px-4 font-semibold text-text">Start Here</th>
            </tr>
          </thead>
          <tbody>
            {branches.map((b, i) => (
              <tr key={i} className="border-b border-[rgba(140,45,42,0.1)]">
                <td className="py-3 px-4 font-medium text-text whitespace-nowrap">{b.signal}</td>
                <td className="py-3 px-4 text-text2">{b.meaning}</td>
                <td className="py-3 px-4 text-text2">{b.approach}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
