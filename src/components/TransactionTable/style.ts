import styled from 'styled-components'

interface TdProps {
  transactionType: string
}

export const Container = styled.div`
  margin-top: 3rem;

  table {
    width: 100%;
    border-spacing: 0 0.8rem;

    th {
      text-align: left;
      padding: 0.5rem 2rem;
      line-height: 1.5rem;
    }
  }

  td {
    padding: 1rem 2rem;
    background-color: var(--gray-light);
    
    &:first-child {
      border-top-left-radius: 0.25rem;
      border-bottom-left-radius: 0.25rem;
      font-weight: 600;
    }
    
    &:last-child {
      border-top-right-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
    }
  }
`
export const Td = styled.td<TdProps>`
  color: ${(props) => 
    props.transactionType === 'deposit' ?
    '#00c250' : '#e60026'
  };
`