import styled from 'styled-components'

export const Container= styled.div`
  margin-top: -6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  color: var(--gray-dark);
  
  div {
    padding: 1.5rem 2rem;
    border-radius: 0.5rem;
    
    header {
      display: flex;
      font-size: 1.1rem;
      align-items: center;
      justify-content: space-between;
      margin-bottom: 1rem;
      
      img {
        height: 30px;
      }
    }

    strong {
      font-size: 2rem;
      font-weight: 500;
    }
  }
`

export const ValueContainer = styled.div`
  background: var(--gray-light);
`

interface TotalContainerProps {
  status: 'positive' | 'negative'
}

export const TotalContainer = styled.div<TotalContainerProps>`
  background: ${(props) => props.status === 'positive' ? 
    '#00c250' : '#e60026'
  };
  color: #fff;
`