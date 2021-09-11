import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #E5E7EB;
    --gray: #9CA3AF;
    --gray-light: #fafbfc;
    --gray-dark: #1F2937;
    --blue: #5c5ff6;
    --blue-light: #8baafa;
    --green: #00c250;
    --red: #e60026;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body { 
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  button {
    cursor: pointer;
    font-size: 1.1rem;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background: rgba(0, 0, 0, 0.5);

    display: flex;
    align-items: center;
    justify-content: center;
  }

  .react-modal-content {
    width: 100%;
    max-width: 576px;
    padding: 3rem;
    position: relative;
    background: var(--gray-light);
    border-radius: 0.5rem;
  }

  .react-modal-close {
    background: none;
    border: none;
    position: absolute;
    top: 0.8rem;
    right: 1rem;
    transition: filter 0.2s;
    
    img { 
      height: 1.5rem;
    }
    
    :hover {
      filter: brightness(0.8);
    }
    
  }
`