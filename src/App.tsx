import { TransactionsProvider } from './hooks/useTransactions'

import { Dashboard } from "./components/Dashboard";
import { Header } from "./components/Header";
import { NewTransactionModal } from "./components/NewTransactionModal";
import { GlobalStyle } from "./styles/global";
import { useState } from 'react';

export function App() {
  const [transactionModal, setTransactionModal] = useState(false)

  function handleOpenTransactionModal() {
    setTransactionModal(true)
  }

  function handleCloseTransactionModal() {
    setTransactionModal(false)
  }

  return (
    <TransactionsProvider>
      <Header 
        onRequestClose={handleOpenTransactionModal}
      />
      <Dashboard />
      <NewTransactionModal 
        isOpen={transactionModal}
        onRequestClose={handleCloseTransactionModal}
      />
      <GlobalStyle />
    </TransactionsProvider>
  );
}