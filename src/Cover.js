import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const CoverDiv = styled.div`
  height: 100vh;
  width: 100%;
  font-family: 'Poppins', sans-serif;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${props => props.theme.colors.ds};
  
  &>* {
    position: absolute;
  }

  .text-box {
    display: flex;
    justify-content: center;
    flex-direction: column;
    z-index: 3;
    color: ${props => props.theme.colors.ls};
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
      background-color: ${props => props.theme.colors.da};
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

function Cover() {
  return (
    <CoverDiv>
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
    </CoverDiv>
  );
}

export default Cover;
