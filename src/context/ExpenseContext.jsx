import { createContext, useContext, useMemo, useState } from 'react'

const ExpenseContext = createContext()

const initialExpenses = [
  {
    id: 'exp-1',
    title: 'Groceries',
    amount: 350000,
    category: 'Kebutuhan Rumah',
    date: '2026-01-10',
    paymentMethod: 'Debit',
    note: 'Supermarket Bulanan'
  },
  {
    id: 'exp-2',
    title: 'Transportasi Online',
    amount: 85000,
    category: 'Transportasi',
    date: '2026-01-12',
    paymentMethod: 'E-Wallet',
    note: 'Meeting klien'
  },
  {
    id: 'exp-3',
    title: 'Langganan SaaS',
    amount: 150000,
    category: 'Produktivitas',
    date: '2026-01-05',
    paymentMethod: 'Kartu Kredit',
    note: 'Figma + Notion'
  },
  {
    id: 'exp-4',
    title: 'Makan Siang Tim',
    amount: 275000,
    category: 'Makan & Minum',
    date: '2026-01-15',
    paymentMethod: 'Debit',
    note: 'Rapat strategi'
  }
]

export function ExpenseProvider({ children }) {
  const [expenses, setExpenses] = useState(initialExpenses)

  const addExpense = (expense) => {
    setExpenses((prev) => [
      {
        id: crypto.randomUUID?.() ?? `exp-${Date.now()}`,
        ...expense
      },
      ...prev
    ])
  }

  const removeExpense = (id) => {
    setExpenses((prev) => prev.filter((expense) => expense.id !== id))
  }

  const stats = useMemo(() => {
    const totalSpent = expenses.reduce((sum, expense) => sum + expense.amount, 0)

    const thisMonth = new Date().getMonth()
    const currentYear = new Date().getFullYear()
    const monthlySpent = expenses
      .filter((expense) => {
        const date = new Date(expense.date)
        return date.getMonth() === thisMonth && date.getFullYear() === currentYear
      })
      .reduce((sum, expense) => sum + expense.amount, 0)

    const categories = expenses.reduce((acc, expense) => {
      acc[expense.category] = (acc[expense.category] ?? 0) + expense.amount
      return acc
    }, {})

    return { totalSpent, monthlySpent, categories }
  }, [expenses])

  const value = useMemo(
    () => ({
      expenses,
      addExpense,
      removeExpense,
      stats
    }),
    [expenses, stats]
  )

  return <ExpenseContext.Provider value={value}>{children}</ExpenseContext.Provider>
}

export function useExpenses() {
  const context = useContext(ExpenseContext)
  if (!context) {
    throw new Error('useExpenses must be used within an ExpenseProvider')
  }
  return context
}
