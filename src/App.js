import './App.css';
import Pages from './Pages';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

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
  const theme = {
    colors: {
      ls: '#f6f6eb',
      lsD: '#ddddb3',
      la: '#d68d4c',
      main: '#8ea3a6',
      da: '#957c6b',
      ds: '#563e38',
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Pages />
      </ThemeProvider>
    </div>
  );
}

export default App;
