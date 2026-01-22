import { Wallet, TrendingDown, PieChart } from 'lucide-react'
import { useExpenses } from '../context/ExpenseContext'
import { formatCurrency } from '../utils/formatCurrency'

const cards = [
  {
    key: 'totalSpent',
    label: 'Total Pengeluaran',
    icon: Wallet,
    gradient: 'from-indigo-500 via-purple-500 to-pink-500'
  },
  {
    key: 'monthlySpent',
    label: 'Pengeluaran Bulan Ini',
    icon: TrendingDown,
    gradient: 'from-emerald-500 via-teal-500 to-cyan-500'
  }
]

export default function StatsGrid() {
  const { stats } = useExpenses()

  return (
    <div className="grid gap-6 md:grid-cols-2">
      {cards.map(({ key, label, icon: Icon, gradient }) => (
        <div
          key={key}
          className="relative overflow-hidden rounded-3xl border border-white/5 bg-white/5 p-6 text-white shadow-2xl"
        >
          <div className={`absolute inset-0 opacity-60 bg-gradient-to-br ${gradient}`} />
          <div className="relative flex items-center justify-between">
            <div>
              <p className="text-sm uppercase tracking-widest text-white/80">{label}</p>
              <p className="mt-4 text-4xl font-bold drop-shadow-lg">
                {formatCurrency(stats[key])}
              </p>
            </div>
            <span className="rounded-2xl bg-black/20 p-4">
              <Icon size={32} />
            </span>
          </div>
        </div>
      ))}

      <div className="rounded-3xl border border-white/5 bg-gradient-to-br from-slate-900 to-slate-800 p-6 text-white shadow-2xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm uppercase tracking-widest text-white/60">Kategori Teratas</p>
            <h3 className="mt-4 text-2xl font-semibold">Distribusi Kategori</h3>
          </div>
          <span className="rounded-2xl bg-white/5 p-4">
            <PieChart size={32} />
          </span>
        </div>
        <CategoryBreakdown />
      </div>
    </div>
  )
}

function CategoryBreakdown() {
  const { stats } = useExpenses()
  const total = Object.values(stats.categories).reduce((sum, value) => sum + value, 0)

  if (!total) {
    return <p className="mt-6 text-sm text-white/60">Belum ada data kategori.</p>
  }

  return (
    <div className="mt-6 space-y-4">
      {Object.entries(stats.categories).map(([category, value]) => {
        const percentage = Math.round((value / total) * 100)
        return (
          <div key={category}>
            <div className="flex justify-between text-sm text-white/80">
              <span>{category}</span>
              <span>{percentage}%</span>
            </div>
            <div className="mt-2 h-2 rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400"
                style={{ width: `${percentage}%` }}
              />
            </div>
          </div>
        )
      })}
    </div>
  )
}
