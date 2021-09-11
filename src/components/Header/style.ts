import styled from "styled-components"

export const Container = styled.header`
  background-color: var(--blue)
`;

export const Content = styled.div`
  max-width: 1120px;
  margin: 0 auto;

  padding: 2rem 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: space-between;

  button {
    outline: 0;
    padding: 1rem 2rem;
    border: 0;
    border-radius: 0.5rem;
    background: var(--blue-light);
    color: #fff;
    transition: filter 0.2s;

    :hover {
      filter: brightness(0.9)
    }
  }
`