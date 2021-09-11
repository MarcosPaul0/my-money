import { useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useTransactions } from './useTransactions';

interface NewTransactionInterface {
  onRequestClose: () => void
}

export function useNewTransaction({ onRequestClose }: NewTransactionInterface) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')

  const { createNewTransaction } = useTransactions()

  async function handleSubmitNewTransaction(event: FormEvent) {
    event.preventDefault();

    await createNewTransaction({
      id: uuidv4(),
      title,
      value,
      category,
      createdAt: new Date(),
      type
    })

    setTitle('')
    setValue(0)
    setCategory('')
    setType('deposit')

    onRequestClose()
  }

  return {
    title, 
    setTitle,
    value, 
    setValue,
    category, 
    setCategory,
    type,
    setType,
    handleSubmitNewTransaction
  }
}