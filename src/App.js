import './fonts.css';
import Pages from './Pages';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalFonts = createGlobalStyle`
`;

const GlobalStyle = createGlobalStyle`
  body {
    text-align: center;
    font-family: DoHyeon, sans-serif;
    padding: 0;
    margin: 0;
    cursor: default;
  }
  .btn {
    cursor: pointer;
  }
  a {
    text-decoration: none; 
    outline: none;
    color: inherit;
  }
  img {
    user-drag: none;
    -webkit-user-drag: none;
    user-select: none;
    -moz-user-select: none;
    -webkit-user-select: none;
    -ms-user-select: none;
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
      black: '#191919'
    }
  };
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalFonts />
        <GlobalStyle />
        <Pages />
      </ThemeProvider>
    </div>
  );
}

export default App;
