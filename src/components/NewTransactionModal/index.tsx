import Modal from 'react-modal'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import closeImg from '../../assets/close.svg'

import * as S from './styles'

interface NewTransactionModalProps {
  isOpen: boolean;
  onRequestClose: () => void;
}

export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      overlayClassName="react-modal-overlay"
      className="react-modal-content"
    >

      <button
        type="button"
        className="react-modal-close"
        onClick={onRequestClose}>
        <img src={closeImg} alt="Fechar modal" />
      </button>

      <S.Container>
        <h2>Cadastrar transação</h2>

        <input placeholder='Título' />

        <input type="number" placeholder='Valor' />

        <S.TransactionTypeContainer>
          <button
            type="button"
          >
          <img src={incomeImg} alt="Entrada" />
          <span>Entrada</span>
          </button>

          <button
            type="button"
          >
          <img src={outcomeImg} alt="Saída" />
          <span>Saída</span>
          </button>
        </S.TransactionTypeContainer>

        <input placeholder='Categoria' />

        <button type="submit">
          Cadastrar
        </button>
      </S.Container>

    </Modal>
  )
}