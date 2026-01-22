import { useState } from 'react'
import { PlusCircle } from 'lucide-react'
import { useExpenses } from '../context/ExpenseContext'

const categoryOptions = [
  'Kebutuhan Rumah',
  'Transportasi',
  'Produktivitas',
  'Makan & Minum',
  'Hiburan',
  'Kesehatan'
]

const paymentMethods = ['Debit', 'Kartu Kredit', 'E-Wallet', 'Tunai']

const INITIAL_FORM = {
  title: '',
  amount: '',
  category: 'Kebutuhan Rumah',
  date: new Date().toISOString().slice(0, 10),
  paymentMethod: 'Debit',
  note: ''
}

export default function ExpenseForm() {
  const [form, setForm] = useState(INITIAL_FORM)
  const [errors, setErrors] = useState({})
  const { addExpense } = useExpenses()

  const validate = () => {
    const nextErrors = {}
    if (!form.title.trim()) nextErrors.title = 'Nama pengeluaran wajib diisi'
    if (!form.amount || Number(form.amount) <= 0) nextErrors.amount = 'Masukkan nominal yang valid'
    if (!form.date) nextErrors.date = 'Tanggal wajib diisi'
    setErrors(nextErrors)
    return Object.keys(nextErrors).length === 0
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!validate()) return

    addExpense({
      ...form,
      amount: Number(form.amount)
    })
    setForm(INITIAL_FORM)
  }

  const handleChange = (event) => {
    const { name, value } = event.target
    setForm((prev) => ({ ...prev, [name]: value }))
  }

  return (
    <section
      id="expense-form"
      className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 text-slate-900 shadow-glass backdrop-blur dark:border-white/5 dark:bg-white/5 dark:text-white"
    >
      <div className="flex items-center gap-3">
        <span className="rounded-2xl bg-indigo-500/20 p-3 text-indigo-300">
          <PlusCircle size={24} />
        </span>
        <div>
          <p className="text-sm uppercase tracking-widest text-indigo-200">Tambah Transaksi</p>
          <h2 className="text-2xl font-semibold">Catat pengeluaran terbaru</h2>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="mt-8 grid gap-6 md:grid-cols-2">
        <div className="space-y-2">
          <label className="text-sm text-slate-500 dark:text-white/70" htmlFor="title">Nama Pengeluaran</label>
          <input
            id="title"
            name="title"
            type="text"
            value={form.title}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 focus:border-indigo-400 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white"
            placeholder="Contoh: Belanja Bulanan"
          />
          {errors.title && <p className="text-sm text-rose-300">{errors.title}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-500 dark:text-white/70" htmlFor="amount">Nominal</label>
          <input
            id="amount"
            name="amount"
            type="number"
            min="0"
            value={form.amount}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 focus:border-indigo-400 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white"
            placeholder="350000"
          />
          {errors.amount && <p className="text-sm text-rose-300">{errors.amount}</p>}
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-500 dark:text-white/70" htmlFor="category">Kategori</label>
          <select
            id="category"
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 focus:border-indigo-400 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white"
          >
            {categoryOptions.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-500 dark:text-white/70" htmlFor="paymentMethod">Metode Pembayaran</label>
          <select
            id="paymentMethod"
            name="paymentMethod"
            value={form.paymentMethod}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 focus:border-indigo-400 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white"
          >
            {paymentMethods.map((method) => (
              <option key={method} value={method}>
                {method}
              </option>
            ))}
          </select>
        </div>

        <div className="space-y-2">
          <label className="text-sm text-slate-500 dark:text-white/70" htmlFor="date">Tanggal</label>
          <input
            id="date"
            name="date"
            type="date"
            value={form.date}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 focus:border-indigo-400 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white"
          />
          {errors.date && <p className="text-sm text-rose-300">{errors.date}</p>}
        </div>

        <div className="space-y-2 md:col-span-2">
          <label className="text-sm text-slate-500 dark:text-white/70" htmlFor="note">Catatan</label>
          <textarea
            id="note"
            name="note"
            rows={3}
            value={form.note}
            onChange={handleChange}
            className="w-full rounded-2xl border border-slate-200 bg-white/80 px-4 py-3 text-slate-900 focus:border-indigo-400 focus:outline-none dark:border-white/10 dark:bg-slate-900/60 dark:text-white"
            placeholder="Catatan tambahan"
          />
        </div>

        <div className="md:col-span-2">
          <button
            type="submit"
            className="inline-flex w-full items-center justify-center gap-2 rounded-2xl bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-6 py-4 text-lg font-semibold text-white shadow-lg shadow-indigo-500/30 transition hover:opacity-95"
          >
            <PlusCircle size={20} /> Simpan Pengeluaran
          </button>
        </div>
      </form>
    </section>
  )
}
