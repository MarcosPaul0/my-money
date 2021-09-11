import { Container, Content } from './style'
import logoImg from '../../images/logo.svg'

interface HeaderProps {
  onRequestClose: () => void
}

export function Header({ onRequestClose }: HeaderProps) {

  return (
    <Container>
      <Content>
        <img src={logoImg} alt="My Money" />
        <button type="button" onClick={onRequestClose}>
          Nova transação
        </button>
      </Content>
    </Container>
  )
}