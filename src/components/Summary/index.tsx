import { Container, TotalContainer, ValueContainer } from "./style";

import inputImg from '../../images/input.svg'
import outputImg from '../../images/output.svg'
import moneyImg from '../../images/money.svg'
import { useTransactions } from "../../hooks/useTransactions";

interface SummaryAccumulatorInterface {
  deposit: number
  withdraw: number
  total: number
}

export function Summary() {
  const { transactions } = useTransactions()

  const summary = transactions.reduce((acc: SummaryAccumulatorInterface, transaction) => {
    if (transaction.type === 'deposit') {
      acc.deposit += transaction.value
      acc.total += transaction.value
    } else {
      acc.withdraw += transaction.value
      acc.total -= transaction.value
    }

    return acc
  }, {
    deposit: 0,
    withdraw: 0,
    total: 0
  })

  return (
    <Container>
      <ValueContainer>
        <header>
          <span>Entrada</span>
          <img src={inputImg} alt="Entrada" />
        </header>
        <strong>{ 
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.deposit)
        }</strong>
      </ValueContainer>
      <ValueContainer>
        <header>
          <span>Saída</span>
          <img src={outputImg} alt="Saída" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.withdraw)
        }</strong>
      </ValueContainer>
      <TotalContainer status={summary.total >= 0 ? 'positive' : 'negative'}>
        <header>
          <span>Total</span>
          <img src={moneyImg} alt="Total" />
        </header>
        <strong>{
          new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(summary.total)
        }</strong>
      </TotalContainer>
    </Container>
  )
}