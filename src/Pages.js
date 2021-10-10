import styled from 'styled-components';

import Topbar from './Topbar';
import Cover from './Cover';
import AboutMe from './AboutMe';
import Skills from './Skills';
import Footer from './Footer';

const PagesDiv = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  // title 공통 스타일
  .section {
    .wrap-title {
      height: 5rem;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 10px;
      .wrap-icon {
        color: ${props => props.theme.colors.main};
      }
      .wrap-text {
        color: ${props => props.theme.colors.black};
        font-size: 2.8rem;
      }
    }
  }
`;

function Pages() {
  return (
    <PagesDiv>
      <Topbar />
      <Cover />
      <AboutMe />
      <Skills />
      <Footer />
    </PagesDiv>
  );
};

export default Pages;
