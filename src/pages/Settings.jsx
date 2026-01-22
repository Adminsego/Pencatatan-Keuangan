import { Moon, ShieldCheck, Sliders, Sun } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

export default function SettingsPage() {
  const { theme, setTheme, toggleTheme } = useTheme()

  return (
    <div className="space-y-8">
      <header className="rounded-3xl border border-slate-200/80 bg-white/90 p-8 text-slate-900 shadow-glass backdrop-blur dark:border-white/5 dark:bg-gradient-to-r dark:from-amber-500/20 dark:via-orange-500/20 dark:to-rose-500/20 dark:text-white">
        <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/70">Pengaturan</p>
        <h1 className="mt-4 text-4xl font-bold">Sesuaikan pengalaman pencatatan</h1>
        <p className="mt-4 max-w-2xl text-lg text-slate-600 dark:text-white/70">
          Kelola tema tampilan, keamanan, dan integrasi agar Dompet Pintar sesuai gaya kerja Anda.
        </p>
      </header>

      <SettingsCard icon={Moon} title="Mode Gelap & Terang" description="Pilih tampilan sesuai kondisi cahaya">
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-3 rounded-2xl border border-slate-200/80 bg-white/90 px-6 py-4 text-slate-900 shadow-sm dark:border-white/10 dark:bg-white/5 dark:text-white">
            {theme === 'dark' ? <Moon size={24} /> : <Sun size={24} />}
            <div>
              <p className="text-sm uppercase tracking-widest text-slate-500 dark:text-white/60">Mode aktif</p>
              <p className="text-xl font-semibold capitalize">{theme} mode</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => setTheme('light')}
              className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition ${
                theme === 'light'
                  ? 'border-indigo-400 bg-indigo-50 text-indigo-600 dark:border-white/20 dark:bg-white/10 dark:text-white'
                  : 'border-slate-200 bg-white text-slate-600 dark:border-white/5 dark:bg-white/5 dark:text-white/70'
              }`}
            >
              Light Mode
            </button>
            <button
              type="button"
              onClick={() => setTheme('dark')}
              className={`rounded-2xl border px-5 py-3 text-sm font-semibold transition ${
                theme === 'dark'
                  ? 'border-indigo-400 bg-indigo-500/10 text-indigo-200'
                  : 'border-slate-200 bg-white text-slate-600 dark:border-white/5 dark:bg-white/5 dark:text-white/70'
              }`}
            >
              Dark Mode
            </button>
            <button
              type="button"
              onClick={toggleTheme}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:bg-white/5 dark:text-white"
            >
              Toggle Cepat
            </button>
          </div>
        </div>
      </SettingsCard>

      <SettingsCard icon={ShieldCheck} title="Keamanan">
        <div className="space-y-4 text-sm">
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-slate-900 shadow-sm dark:border-white/5 dark:bg-white/5 dark:text-white">
            <p className="font-semibold">Kunci aplikasi</p>
            <p className="text-slate-500 dark:text-white/60">Tambahkan PIN atau biometrik untuk proteksi tambahan.</p>
            <button className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-xs uppercase tracking-widest text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:text-white">
              Aktifkan
            </button>
          </div>
          <div className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-slate-900 shadow-sm dark:border-white/5 dark:bg-white/5 dark:text-white">
            <p className="font-semibold">Cadangan awan</p>
            <p className="text-slate-500 dark:text-white/60">Simpan data pengeluaran otomatis ke cloud pilihan Anda.</p>
            <button className="mt-3 inline-flex items-center gap-2 rounded-2xl border border-slate-200 px-4 py-2 text-xs uppercase tracking-widest text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:text-white">
              Hubungkan Drive
            </button>
          </div>
        </div>
      </SettingsCard>

      <SettingsCard icon={Sliders} title="Integrasi" description="Hubungkan ke aplikasi favorit Anda">
        <div className="grid gap-4 md:grid-cols-2">
          {['Google Sheets', 'Notion', 'QuickBooks', 'Jurnal.id'].map((integration) => (
            <div
              key={integration}
              className="rounded-2xl border border-slate-200/80 bg-white/90 p-4 text-slate-900 shadow-sm dark:border-white/5 dark:bg-white/5 dark:text-white"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-semibold">{integration}</p>
                  <p className="text-sm text-slate-500 dark:text-white/60">Sinkronisasi data transaksi otomatis</p>
                </div>
                <button className="rounded-full border border-slate-200 px-3 py-1 text-xs uppercase tracking-widest text-slate-700 transition hover:border-indigo-400 hover:text-indigo-600 dark:border-white/10 dark:text-white">
                  Hubungkan
                </button>
              </div>
            </div>
          ))}
        </div>
      </SettingsCard>
    </div>
  )
}

function SettingsCard({ title, description, icon: Icon, children }) {
  return (
    <section className="rounded-3xl border border-slate-200/80 bg-white/90 p-6 shadow-glass backdrop-blur dark:border-white/5 dark:bg-white/5">
      <div className="flex items-center gap-4 text-slate-900 dark:text-white">
        <span className="rounded-2xl bg-slate-100 p-3 text-slate-600 dark:bg-white/10 dark:text-white">
          <Icon size={24} />
        </span>
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-slate-500 dark:text-white/60">Preferensi</p>
          <h2 className="text-2xl font-semibold">{title}</h2>
          {description && <p className="text-sm text-slate-500 dark:text-white/60">{description}</p>}
        </div>
      </div>
      <div className="mt-6 space-y-4 text-slate-900 dark:text-white">{children}</div>
    </section>
  )
}
