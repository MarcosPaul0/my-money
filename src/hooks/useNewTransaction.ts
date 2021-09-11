import { useState, FormEvent } from 'react';
import { v4 as uuidv4 } from 'uuid'
import { useTransactions } from './useTransactions';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export function useNewTransaction(onRequestClose: () => void) {
  const [title, setTitle] = useState('')
  const [value, setValue] = useState(0)
  const [category, setCategory] = useState('')
  const [type, setType] = useState<'deposit' | 'withdraw'>('deposit')

  const { createNewTransaction } = useTransactions()

  const notify = (msg: string) => toast.success(msg, {
    position: "bottom-center",
    autoClose: 3000,
    theme: 'colored',
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
  

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
    
    notify('Transação cadastrada!')
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