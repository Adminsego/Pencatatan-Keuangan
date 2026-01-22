import { Link, NavLink } from 'react-router-dom'
import { Menu, Plus, Wallet, X } from 'lucide-react'
import { useState } from 'react'

const navItems = [
  { to: '/', label: 'Dashboard' },
  { to: '/reports', label: 'Laporan' },
  { to: '/settings', label: 'Pengaturan' }
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  const goToExpenseForm = () => {
    const formSection = document.querySelector('#expense-form')
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
    setIsOpen(false)
  }

  const renderLinks = (className = '') => (
    navItems.map(({ to, label }) => (
      <NavLink
        key={to}
        to={to}
        className={({ isActive }) =>
          `${className} ${
            isActive
              ? 'text-indigo-600 dark:text-white font-semibold'
              : 'text-slate-500 hover:text-indigo-600 dark:text-slate-200 dark:hover:text-white'
          }`
        }
        onClick={() => setIsOpen(false)}
      >
        {label}
      </NavLink>
    ))
  )

  return (
    <nav className="border-b border-slate-200/80 bg-white/80 backdrop-blur dark:border-white/5 dark:bg-gradient-to-r dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <Link to="/" className="flex items-center gap-3">
            <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-100 text-indigo-600 dark:bg-indigo-500/20 dark:text-indigo-300">
              <Wallet size={24} />
            </span>
            <div>
              <p className="text-xl font-bold text-slate-900 dark:text-white">Dompet Pintar</p>
              <p className="text-sm text-slate-500 dark:text-slate-400">Pencatat pengeluaran modern</p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-10 text-sm uppercase tracking-wide">
            {renderLinks('transition-colors')}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              onClick={goToExpenseForm}
              className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <Plus size={16} /> Tambah Pengeluaran
            </button>
          </div>

          <button
            className="md:hidden inline-flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-white"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label="Toggle Menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white/95 backdrop-blur dark:border-white/5 dark:bg-slate-900/80">
          <div className="px-6 py-6 space-y-4 text-base">
            {renderLinks('block')}
            <button
              type="button"
              onClick={goToExpenseForm}
              className="w-full inline-flex items-center justify-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              <Plus size={16} /> Tambah Pengeluaran
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}
