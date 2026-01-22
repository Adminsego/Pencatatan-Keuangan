import { useMemo } from 'react'
import { BarChart3, CreditCard, PieChart, Target } from 'lucide-react'
import { useExpenses } from '../context/ExpenseContext'
import { formatCurrency } from '../utils/formatCurrency'

export default function ReportsPage() {
  const { expenses, stats } = useExpenses()

  const paymentBreakdown = useMemo(() => {
    const summary = expenses.reduce((acc, expense) => {
      acc[expense.paymentMethod] = (acc[expense.paymentMethod] ?? 0) + expense.amount
      return acc
    }, {})
    const total = Object.values(summary).reduce((sum, value) => sum + value, 0)
    return { summary, total }
  }, [expenses])

  const biggestSpending = useMemo(() => {
    if (!expenses.length) return null
    return [...expenses].sort((a, b) => b.amount - a.amount)[0]
  }, [expenses])

  return (
    <div className="space-y-8 text-white">
      <header className="rounded-3xl border border-white/5 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-blue-500/20 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">Laporan Finansial</p>
        <h1 className="mt-4 text-4xl font-bold">Insight pengeluaran secara detail</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Analisis performa pengeluaran berdasarkan kategori, metode pembayaran, dan transaksi terbesar
          untuk membantu keputusan finansial yang lebih akurat.
        </p>
      </header>

      <div className="grid gap-6 md:grid-cols-2">
        <ReportCard icon={PieChart} title="Distribusi Kategori">
          <div className="space-y-4">
            {Object.entries(stats.categories).map(([category, value]) => (
              <div key={category}>
                <div className="flex justify-between text-sm text-white/80">
                  <span>{category}</span>
                  <span>{formatCurrency(value)}</span>
                </div>
                <div className="mt-2 h-2 rounded-full bg-white/10">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                    style={{ width: `${(value / stats.totalSpent) * 100 || 0}%` }}
                  />
                </div>
              </div>
            ))}
            {!expenses.length && (
              <p className="text-sm text-white/60">Belum ada data pengeluaran.</p>
            )}
          </div>
        </ReportCard>

        <ReportCard icon={CreditCard} title="Metode Pembayaran Terbanyak">
          <div className="space-y-4">
            {Object.entries(paymentBreakdown.summary).map(([method, value]) => (
              <div key={method} className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
                <span className="text-white/80">{method}</span>
                <span className="font-semibold">{formatCurrency(value)}</span>
              </div>
            ))}
            {!paymentBreakdown.total && (
              <p className="text-sm text-white/60">Catat pengeluaran untuk melihat ringkasan metode pembayaran.</p>
            )}
          </div>
        </ReportCard>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <ReportCard icon={Target} title="Target Pengeluaran Disarankan">
          <p className="text-sm text-white/70">
            Rekomendasi ini dapat dijadikan patokan menjaga cash flow sehat: maksimal 50% kebutuhan pokok,
            30% gaya hidup, dan 20% tabungan/investasi.
          </p>
          <ul className="mt-6 space-y-3 text-sm">
            <li className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
              <span>Kebutuhan pokok (50%)</span>
              <span className="font-semibold">{formatCurrency(stats.totalSpent * 0.5)}</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
              <span>Gaya hidup (30%)</span>
              <span className="font-semibold">{formatCurrency(stats.totalSpent * 0.3)}</span>
            </li>
            <li className="flex items-center justify-between rounded-2xl border border-white/5 bg-white/5 px-4 py-3">
              <span>Tabungan & investasi (20%)</span>
              <span className="font-semibold">{formatCurrency(stats.totalSpent * 0.2)}</span>
            </li>
          </ul>
        </ReportCard>

        <ReportCard icon={BarChart3} title="Transaksi Terbesar">
          {biggestSpending ? (
            <div className="rounded-3xl border border-white/5 bg-white/5 p-6">
              <p className="text-sm uppercase tracking-wide text-white/60">{biggestSpending.category}</p>
              <p className="mt-2 text-3xl font-bold">{formatCurrency(biggestSpending.amount)}</p>
              <p className="mt-2 text-white/80">{biggestSpending.title}</p>
              <p className="text-sm text-white/60">
                {Intl.DateTimeFormat('id-ID', { dateStyle: 'full' }).format(new Date(biggestSpending.date))}
              </p>
              {biggestSpending.note && (
                <p className="mt-4 text-sm text-white/70">Catatan: {biggestSpending.note}</p>
              )}
            </div>
          ) : (
            <p className="text-sm text-white/60">Belum ada transaksi untuk dianalisis.</p>
          )}
        </ReportCard>
      </div>
    </div>
  )
}

function ReportCard({ title, icon: Icon, children }) {
  return (
    <section className="rounded-3xl border border-white/5 bg-white/5 p-6 shadow-xl">
      <div className="flex items-center gap-4">
        <span className="rounded-2xl bg-white/10 p-3 text-white">
          <Icon size={24} />
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-white/60">Insight</p>
          <h2 className="text-2xl font-semibold">{title}</h2>
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  )
}
