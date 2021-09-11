import styled from 'styled-components'
import { darken, transparentize } from 'polished'

export const Content = styled.form`
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.5rem;
  gap: 0.8rem;
  
  input {
    padding: 1rem;
    background: var(--background);
    border-radius: 0.25rem;
    border: 1px solid var(--gray);
    font-size: 1rem;
    font-weight: 400;
    outline: none;

    :focus {
      background: var(--gray-light);
    }
  }

  button[type="submit"] {
    padding: 1rem;
    outline: none;
    border: none;
    background: var(--green);
    border-radius: 0.25rem;
    color: var(--gray-light);
    transition: filter 0.2s;
    font-weight: 600;
    
    :hover {
      filter: brightness(0.8);
    }
  }
`

export const TransactionTypesContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 0.8rem;
`

interface ButtonProps {
  isActive: boolean
  activeColor: 'green' | 'red'  
}

const colors = {
  red: '#e60026',
  green: '#00c250'
}

export const Button = styled.button<ButtonProps>`
  width: 100%;
  padding: 1rem 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border-radius: 0.25rem;
  border: 1px solid var(--gray);

  background: ${(props) => props.isActive ?
    transparentize(0.9, colors[props.activeColor]) :
    '#fafbfc'
  };

  :hover {
    border-color: ${darken(0.1, '#9CA3AF')};
  }
`