import Modal from 'react-modal';
import { Button, Content, TransactionTypesContainer } from './style';
import { useNewTransaction } from '../../hooks/useNewTransaction';

import closeImg from '../../images/close.svg'
import inputImg from '../../images/input.svg'
import outputImg from '../../images/output.svg'

Modal.setAppElement('#root')

interface NewTransactionModalProps {
  isOpen: boolean
  onRequestClose: () => void
}

export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps) {
  const {
    title, setTitle,
    value, setValue,
    category, setCategory,
    type, setType,
    handleSubmitNewTransaction
  } = useNewTransaction(onRequestClose)
  
  return (
    <Modal 
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >
      <Content onSubmit={handleSubmitNewTransaction}>
        <button className="react-modal-close"
          onClick={onRequestClose}
        >
          <img src={closeImg} alt="fechar" />
        </button>

        <h2>Cadastrar transação</h2>

        <input 
          placeholder="Título"
          value = {title}
          onChange={e => setTitle(e.target.value)}
        />

        <input 
          type="number"
          placeholder="Valor"
          value = {value}
          onChange={e => setValue(+e.target.value)}
        />

        <input
          placeholder="Categoria"
          value = {category}
          onChange={e => setCategory(e.target.value)}
        />

        <TransactionTypesContainer>
          <Button 
            type="button"
            activeColor="green"
            isActive={type === 'deposit'}
            onClick={() => { setType('deposit') }}
          >
            <img src={inputImg} alt="entrada" />
            <strong>Entrada</strong>
          </Button>
          <Button 
            type="button"
            activeColor="red"
            isActive={type === 'withdraw'}
            onClick={() => { setType('withdraw') }}
          >
            <img src={outputImg} alt="saída" />
            <strong>Saída</strong>
          </Button>
        </TransactionTypesContainer>

        <button type="submit" >
          Cadastrar
        </button>
      </Content>
    </Modal>
  )
}