import { Routes, Route, Navigate } from 'react-router-dom'
import Navbar from './components/Navbar'
import DashboardPage from './pages/Dashboard'
import ReportsPage from './pages/Reports'
import SettingsPage from './pages/Settings'
import { ExpenseProvider } from './context/ExpenseContext'
import { ThemeProvider } from './context/ThemeContext'

function App() {
  return (
    <ThemeProvider>
      <ExpenseProvider>
        <div className="min-h-screen bg-slate-50 text-slate-900 transition-colors dark:bg-slate-950 dark:text-white">
          <Navbar />
          <main className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-10">
            <Routes>
              <Route path="/" element={<DashboardPage />} />
              <Route path="/reports" element={<ReportsPage />} />
              <Route path="/settings" element={<SettingsPage />} />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </ExpenseProvider>
    </ThemeProvider>
  )
}

export default App
