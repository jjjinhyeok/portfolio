import './App.css';
import Pages from './Pages';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css2?family=Do+Hyeon&family=Nanum+Gothic:wght@400;800&display=swap');
  @import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');

  body {
    // font-family: 'Do Hyeon', sans-serif;
    font-family: 'Nanum Gothic', sans-serif;
    // font-family: 'Poppins', sans-serif;
    cursor: default;
  }
  .btn {
    cursor: pointer;
  }
  a {
    text-decoration: none; outline: none
  }
`;

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Pages />
    </div>
  );
}

export default App;
