import React, { useEffect, useState } from 'react';
import Pageable from 'pageable';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { IoCall } from 'react-icons/io5';
import { BsFillPersonFill, BsCalendarFill, BsGeoAlt, BsEnvelopeFill, BsServer } from 'react-icons/bs';

const colors = {
  ls: '#f6f6eb',
  lsD: '#ddddb3',
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
  width: calc(100% - 100px);
  justify-content: space-between;
  padding: 0 50px;
  background: rgba(0, 0, 0, 0.5);

  font-family: 'Poppins', sans-serif;
  font-size: 24px;
  font-weight: bold;
  color: ${colors.ls};
  z-index: 10;

  @media only screen and (max-width: 600px) {
    padding: 0;
    justify-content: center;
    width: 100%;
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
  background-color: ${colors.ds};
  
  &>* {
    position: absolute;
  }

  .text-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 3;
    color: ${colors.ls};
    gap: 50px;
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
    z-index: 2;

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      overflow: none;
    }
  }

  .scroll-box {
    font-size: 24px;
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

const gradient = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const Page2Div = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${colors.ls};
  display: flex;
  justify-content: center;
  align-items: center;

  .wrap-page2 {
    height: 100%;
    width: 1200px;
    display: flex;
    justify-content: center;
    align-items: center;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      width: 100%;
    }
    &>* {
      z-index: 3;
    }
    .wrap-wrap-photo {
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      padding-left: 100px;
      padding-right: 100px;
      @media only screen and (max-width: 600px) {
        height: 30%;
      }
      .wrap-photo {
        width: 300px;
        height: 300px;
        border-radius: 200px;
        overflow: hidden;
        border: 5px solid ${colors.ds};
        @media only screen and (max-width: 600px) {
          width: 180px;
          height: 180px;
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
      }
    }
    .line {
      width: 5px;
      height: 80%;
      background: ${colors.da};
      @media only screen and (max-width: 600px) {
        display: none; 
      }
    }
    .items {
      display: flex;
      flex-wrap: wrap;
      gap: 50px;
      padding-left: 100px;
      @media only screen and (max-width: 600px) {
        flex-direction: column;
        gap: 10px;
        padding-left: 0;
      }
      .item {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        flex: 1 1 40%;
        @media only screen and (max-width: 600px) {
          flex: 1 1 10%;
        }
        svg {
          color: ${colors.main};
        }
        .wrap-text {
          color: ${colors.ds};
          display: flex;
          justify-content: flex-start;
          align-items: start;
          flex-direction: column;
          margin-left: 10px;
          gap: 5px;
          .title {
            font-size: 20px;
            font-weight: bold;

          }
          .desc {
            text-align: left;
            font-size: 18px;
          }
          a {
            color: ${colors.ds};
          }
          a:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
`;

const Page3Div = styled.div`
  height: 100%;
  width: 100%;
  background: ${colors.ds};
  display: flex;
  justify-content: center;
  align-items: center;

  .wrap-page3 {
    height: 100%;
    width: 1200px;

  }
`;

function Pages() {
  useEffect(() => {
    new Pageable('#container', {
      animation: 800,
      events: {
        wheel: false,
      },
    });
  });
  const [toggle, setToggle] = useState(false);
  const handleWheel = (e) => {
    if(toggle) return;
    setToggle(true);
    const up = new KeyboardEvent('keydown', { key: 'ArrowUp' });
    const down = new KeyboardEvent('keydown', { key: 'ArrowDown' });
    if(e.nativeEvent.wheelDelta > 0) {
      document.dispatchEvent(up);
    } else {
      document.dispatchEvent(down);
    }
    console.log('here');
    setTimeout(() => {setToggle(false)}, 1500);
  };
  return (
    <>
      <Topbar>
      
        <div className="home btn">Kim Jinhyeok</div>
        <div className="btns">
          <div className="btn-me btn">About Me</div>
          <div className="btn-skills btn">Skills</div>
          <div className="btn-projects btn">Projects</div>
        </div>
      </Topbar>
      <div id="container"  onWheel={handleWheel}>
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
          </Page1Div>
        </div>
        <div data-anchor="Page 2">
          <Page2Div>
            <div className="wrap-page2">
              <div className="wrap-wrap-photo">
                <div className="wrap-photo">
                  <img src={process.env.PUBLIC_URL + '/me.jpg'} alt="me" />
                </div>
              </div>
              <div className="line"></div>
              <div className="items">
                <div className="name item">
                  <BsFillPersonFill size="50px" />
                  <div className="wrap-text">
                    <div className="title">이름</div>
                    <div className="desc">김진혁</div>
                  </div>
                </div>
                <div className="birth item">
                  <BsCalendarFill size="50px" />
                  <div className="wrap-text">
                    <div className="title">생년월일</div>
                    <div className="desc">1993.11.02</div>
                  </div>
                </div>
                <div className="address item">
                  <BsGeoAlt size="50px" />
                  <div className="wrap-text">
                    <div className="title">주소지</div>
                    <div className="desc">인천광역시 미추홀구</div>
                  </div>
                </div>
                <div className="phone item">
                  <IoCall size="50px" />
                  <div className="wrap-text">
                    <div className="title">연락처</div>
                    <div className="desc">010-9389-7831</div>
                  </div>
                </div>
                <div className="email item">
                  <BsEnvelopeFill size="50px" />
                  <div className="wrap-text">
                    <div className="title">이메일</div>
                    <div className="desc">snare909@gmail.com</div>
                  </div>
                </div>
                <div className="archiving item">
                  <BsServer size="50px" />
                  <div className="wrap-text">
                    <div className="title">아카이빙</div>
                    <div className="desc">
                      <a href="https://github.com/devjinhyeok">github.com/devjinhyeok</a><br/>
                      <a href="https://velog.io/@909snare">velog.io/@909snare</a><br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Page2Div>
        </div>
        <div data-anchor="Page 3">
          <Page3Div>
            <div className="items">
              <div className="frontend item">
                <div className="title">
                  Front-end
                </div>
                <div className="wrap-img">
                  <img src={process.env.PUBLIC_URL + '/frontend.png'} alt="frontend" />
                </div>
              </div>
            </div>
            <h1>asdfdasfasdfasdf</h1>
          </Page3Div>
        </div>
      </div>
    </>
  );
};

export default Pages;
