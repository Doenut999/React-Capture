import {createGlobalStyle} from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
     }
    
    body {
      background-color: #1b1b1b;
    }
    
    button {
      font-weight: bold;
      cursor: pointer;
      font-size: 1.1rem;
      padding: 1rem 2rem;
      border: 1px solid #23d997;
      background-color: transparent;
      color: white;
      transition: all 0.9s ease;
      &:hover {
        background-color: #23d997;
        color: black;
      }
      
    }
    
    h2{
      font-weight: lighter;
      font-size: 4rem;
    }
    h3 {
      color: white;
    }

    p {
      padding: 3rem 0;
      color: #ccc;
      font-size: 1.4rem;
      line-height: 150%;
    }
    
    h4 {
      font-weight: bold;
    }
    
    span {
      font-weight: bold;
      color: #23d997;
    }
    
    a {
      font-size: 1.1rem;
    }
`

export default GlobalStyle