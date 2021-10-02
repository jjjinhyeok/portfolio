import React, { useRef, useEffect } from 'react';
import Pageable from 'pageable';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

const colors = {
  ls: '#f6f6eb',
  la: '#d68d4c',
  main: '#8ea3a6',
  da: '#957c6b',
  ds: '#563e38',
};

const Topbar = styled.div`
  position: fixed;
  display: flex;
  top: 0;
  left: 0;
  height: 50px;
  width: calc(100% - 60px);
  justify-content: space-between;
  padding: 20px 30px;

  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.ls};
  z-index: 10;

  .btns {
    display: flex;
    gap: 20px;
    @media only screen and (max-width: 600px) {
      display: none; 
    }
  }
`;

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const Page1Div = styled.div`
  height: 100%;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  
  &>* {
    position: absolute;
  }

  .text-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 3;
    color: ${colors.ls};
    gap: 30px;
    &>* {
      margin: 0 10px;
    }
    h1 {
      font-size: 60px;
    }
    .line {
      width: 90%;
      height: 5px;
      background-color: ${colors.da};
    }
    h2 {
      font-size: 32px;
    }
    h3 {
    }
  }

  .wrap-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    filter: brightness(0.5);

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: none;
    }
  }

  .scroll-box {
    display: flex;
    flex-direction: column;
    bottom: 12px;
    z-index: 3;
    color: gray;
    font-family: 'Poppins', sans-serif;
    justify-content: center;
    align-items: center;
    animation: ${blink} 2s step-end infinite;
  }
`;

const Page2Div = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
`;

function Pages() {
  useEffect(() => {
    new Pageable('#container', {
    });
  });
  return (
    <>
      <Topbar>
        <div className="home">Kim Jinhyeok</div>
        <div className="btns">
          <div className="btn-me">About Me</div>
          <div className="btn-skills">Skills</div>
          <div className="btn-projects">Projects</div>
        </div>
      </Topbar>
      <div id="container">
        <div data-anchor="Page 1">
          <Page1Div>
            <div className="text-box">
              <h1>Kim Jinhyeok</h1>
              <div className="line"></div>
              <h2>web devloper portfolio</h2>
              <h3>안녕하세요. 저는 코딩과 배우는 것이 즐겁고 생산성에 관심이 많습니다.</h3>
            </div>
            <div className="wrap-img">
              <img src={process.env.PUBLIC_URL + '/macbook.jpg'} alt="macbook" />
            </div>
            <div className="scroll-box">
              Scroll
              <IoIosArrowDown></IoIosArrowDown>
            </div>
          <Page1Div />
        </Page1Div>
        </div>
        <div data-anchor="Page 2">
          <Page2Div>
            <div className="wrap-title">

            </div>
          </Page2Div>
        </div>
        <div data-anchor="Page 3">3</div>
      </div>
    </>
  );
};

export default Pages;
