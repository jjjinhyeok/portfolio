import styled from 'styled-components';
import { VscGithub } from 'react-icons/vsc';

const FooterDiv = styled.div`
  background: ${props => props.theme.colors.black};
  color: ${props => props.theme.colors.ls};
  height: 180px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 10px;

  .wrap-button {
    cursor: pointer;
    text-decoration: underline;
    color: ${props => props.theme.colors.ls};
    a:active {
      color: #000;
    }
  }

  .wrap-text {
  }
`;

function Footer() {
  const githubClick = () => {
    window.open('https://github.com/devjinhyeok');
  };
  return (
    <FooterDiv>
      <div className="wrap-button" onClick={githubClick}>
        <VscGithub size="70px"/>
      </div>
      <div className="wrap-text">
        © 2021. Kim Jinhyeok. All rights reserved.
      </div>
    </FooterDiv>
  );
}

export default Footer;
