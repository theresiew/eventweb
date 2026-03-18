function formatValue(value, fallback = 'Not provided') {
  if (value === undefined || value === null || value === '') {
    return fallback
  }

  return value
}

function DetailList({ items }) {
  return (
    <div className="space-y-3">
      {items.map(item => (
        <div
          key={item.label}
          className="flex flex-col gap-1 rounded-2xl border border-white/8 bg-slate-900/45 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
        >
          <span className="text-sm uppercase tracking-[0.2em] text-slate-400">
            {item.label}
          </span>
          <span className={`text-base font-semibold ${item.valueClassName || 'text-white'}`}>
            {formatValue(item.value, item.fallback)}
          </span>
        </div>
      ))}
    </div>
  )
}

export default DetailList
