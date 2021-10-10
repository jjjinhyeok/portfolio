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
