import StatsGrid from '../components/StatsGrid'
import ExpenseForm from '../components/ExpenseForm'
import ExpenseTable from '../components/ExpenseTable'

export default function DashboardPage() {
  return (
    <div className="space-y-8 text-white">
      <header className="rounded-3xl border border-white/5 bg-gradient-to-r from-indigo-600/20 via-purple-600/20 to-pink-600/20 p-8">
        <p className="text-sm uppercase tracking-[0.3em] text-white/70">Dompet Pintar</p>
        <h1 className="mt-4 text-4xl font-bold">Pantau pengeluaran, capai tujuan finansial</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/70">
          Dashboard interaktif untuk mencatat transaksi harian, memantau kategori pengeluaran,
          dan menjaga kesehatan cash flow bisnis maupun personal.
        </p>
      </header>

      <StatsGrid />
      <ExpenseForm />
      <ExpenseTable />
    </div>
  )
}
