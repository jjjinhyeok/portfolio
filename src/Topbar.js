import { useState, useEffect, useContext } from 'react';
import styled, { ThemeContext } from 'styled-components';

const TopbarDiv = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  height: 70px;
  width: calc(100% - 100px);
  justify-content: space-between;
  padding: 0 50px;
  // background: rgba(0, 0, 0, 0.5);

  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: ${props => props.theme.colors.ls};
  z-index: 10;

  @media only screen and (max-width: 600px) {
    display: none;
  }

  .home {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .btns {
    display: flex;
    gap: 20px;
    font-size: 18px;
    &>* {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media only screen and (max-width: 600px) {
      display: none; 
    }
  }
`;

function Topbar() {
  // control scroll
  const theme = useContext(ThemeContext);
  const [isScroll, setScroll] = useState(0);
  const updateScroll = () => {
    const scroll = document.documentElement.scrollTop || document.body.scrollTop;
    const h = document.documentElement.clientHeight;
    setScroll(scroll > h ? true : false);
  };
  useEffect(() => {
    window.addEventListener('scroll', updateScroll);
  }, []);

  return (
    <TopbarDiv style={{
      background: isScroll ? theme.colors.ls : 'none',
      borderBottom: isScroll ? `2px solid ${theme.colors.main}` : 'none',
      color: isScroll ? theme.colors.ds : theme.colors.ls,
    }}>
      <div className="home btn">Kim Jinhyeok</div>
      <div className="btns">
        <div className="btn-me btn">About Me</div>
        <div className="btn-skills btn">Skills</div>
        <div className="btn-projects btn">Projects</div>
      </div>
    </TopbarDiv>
  )
}

export default Topbar;
