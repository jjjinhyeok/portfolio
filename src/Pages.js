import { useEffect } from 'react';
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
    padding: 50px 0;
    width: 1200px;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    .wrap-title {
      margin-bottom: 30px;
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
        font-family: BlackHans, sans-serif;
        border-bottom: 1px solid ${props => props.theme.colors.main};
      }
    }
  }
`;

function Pages() {
  // hash anchor position control
  useEffect(() => { // todo: 요수정
    window.addEventListener('hashchange', () => {
      console.log('hash change');
      window.scrollTo(window.scrollX, window.scrollY - 80);
    });
  }, []);
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
