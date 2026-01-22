import { Trash2 } from 'lucide-react'
import { useExpenses } from '../context/ExpenseContext'
import { formatCurrency } from '../utils/formatCurrency'

const badgeColors = {
  'Kebutuhan Rumah': 'bg-indigo-500/20 text-indigo-200',
  Transportasi: 'bg-emerald-500/20 text-emerald-200',
  Produktivitas: 'bg-cyan-500/20 text-cyan-200',
  'Makan & Minum': 'bg-rose-500/20 text-rose-200',
  Hiburan: 'bg-purple-500/20 text-purple-200',
  Kesehatan: 'bg-orange-500/20 text-orange-200'
}

export default function ExpenseTable() {
  const { expenses, removeExpense } = useExpenses()

  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 text-slate-900 shadow-glass backdrop-blur dark:border-white/5 dark:bg-white/5 dark:text-white">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-sm uppercase tracking-widest text-slate-400 dark:text-slate-300">Riwayat Transaksi</p>
          <h2 className="text-2xl font-semibold">Pengeluaran terbaru</h2>
        </div>
        <p className="text-sm text-slate-500 dark:text-slate-300">
          Total transaksi: <span className="font-semibold text-slate-900 dark:text-white">{expenses.length}</span>
        </p>
      </div>

      <div className="mt-6 overflow-hidden rounded-2xl border border-slate-200/80 dark:border-white/5">
        <table className="min-w-full divide-y divide-slate-200 dark:divide-white/5">
          <thead className="bg-slate-100 text-xs uppercase tracking-wide text-slate-600 dark:bg-white/5 dark:text-white/70">
            <tr>
              <th className="px-4 py-3 text-left">Tanggal</th>
              <th className="px-4 py-3 text-left">Deskripsi</th>
              <th className="px-4 py-3 text-left">Kategori</th>
              <th className="px-4 py-3 text-left">Pembayaran</th>
              <th className="px-4 py-3 text-right">Nominal</th>
              <th className="px-4 py-3 text-right">Aksi</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-100 bg-white text-slate-700 dark:divide-white/5 dark:bg-slate-950/40 dark:text-white/90">
            {expenses.map((expense) => (
              <tr key={expense.id} className="text-sm">
                <td className="px-4 py-4">
                  {Intl.DateTimeFormat('id-ID', { dateStyle: 'medium' }).format(
                    new Date(expense.date)
                  )}
                </td>
                <td className="px-4 py-4">
                  <p className="font-semibold text-slate-900 dark:text-white">{expense.title}</p>
                  {expense.note && <p className="text-xs text-slate-500 dark:text-white/60">{expense.note}</p>}
                </td>
                <td className="px-4 py-4">
                  <span className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${badgeColors[expense.category] ?? 'bg-white/10 text-white'}`}>
                    {expense.category}
                  </span>
                </td>
                <td className="px-4 py-4 text-slate-600 dark:text-white/80">{expense.paymentMethod}</td>
                <td className="px-4 py-4 text-right text-lg font-semibold text-slate-900 dark:text-white">
                  {formatCurrency(expense.amount)}
                </td>
                <td className="px-4 py-4 text-right">
                  <button
                    type="button"
                    onClick={() => removeExpense(expense.id)}
                    className="inline-flex items-center rounded-2xl border border-slate-200 px-3 py-2 text-xs font-semibold text-rose-500 transition hover:border-rose-400 hover:text-rose-500 dark:border-white/10 dark:text-rose-200"
                    aria-label={`Hapus ${expense.title}`}
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
            {!expenses.length && (
              <tr>
                <td colSpan="6" className="px-4 py-10 text-center text-sm text-slate-500 dark:text-white/70">
                  Belum ada pengeluaran yang dicatat. Mulai dengan menambah transaksi di atas.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </section>
  )
}
