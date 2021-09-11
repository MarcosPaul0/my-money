import { createContext, ReactNode, useContext, useEffect, useState } from 'react'
import { api } from '../service/api'

export interface Transaction {
  id: string
  title: string
  value: number
  category: string
  createdAt: Date
  type: 'deposit' | 'withdraw'
}

interface TransactionsProviderProps {
  children: ReactNode
}

interface TransactionContextInterface {
  transactions: Transaction[]
  createNewTransaction: (data: Transaction) => Promise<void>
}

const TransactionsContext = createContext({} as TransactionContextInterface)

export function TransactionsProvider({ children }: TransactionsProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  useEffect(() => {
    api.get('transactions')
      .then(response => setTransactions(response.data.transactions))
  }, [])

  async function createNewTransaction(data: Transaction) {
    await api.post('transactions', data)

    setTransactions([
      ...transactions,
      data
    ])
  }

  return (
    <TransactionsContext.Provider value={{
      transactions,
      createNewTransaction
    }}>
      {children}
    </TransactionsContext.Provider>
  )
}

export function useTransactions() {
  const context = useContext(TransactionsContext)

  return context
}