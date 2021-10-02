import React, { useRef, useEffect } from 'react';
import Pageable from 'pageable';
import styled from 'styled-components';

const Topbar = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  
`;

function Pages() {
  useEffect(() => {
    new Pageable('#container', {
    });
  });
  return (
    <>
      <Topbar>
        <div className="home">김진혁</div>
        <div className="btns">
          
        </div>
      </Topbar>
      <div id="container">
        <div data-anchor="Page 1">1</div>
        <div data-anchor="Page 2">2</div>
        <div data-anchor="Page 3">3</div>
      </div>
    </>
  );
};

export default Pages;
