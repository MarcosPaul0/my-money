import { Summary } from "../Summary";
import { TransactionsTable } from "../TransactionTable";
import { Container } from "./style";
import { ToastContainer } from 'react-toastify'

export function Dashboard() {
  return (
    <Container>
      <Summary />
      <TransactionsTable />
      <ToastContainer />
    </Container>
  )
}