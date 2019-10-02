import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.min.css'
import 'react-perfect-scrollbar/dist/css/styles.css'

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Be+Vietnam:400,600&display=swap');
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0
  }

  html, body, #root {
    height: 100%;
    background: #f1f1f1;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    width: 100%;
    font: 14px 'Be Vietnam', sans-serif
  }
  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }
  `
