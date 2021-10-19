import { useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { IoIosArrowDown } from 'react-icons/io';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

const blink = keyframes`
  50% {
    opacity: 0;
  }
`;

const CoverDiv = styled.div`
  height: 101vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  background-color: ${props => props.theme.colors.ds};
  overflow: hidden;
  
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
      font-size: 5rem;
    }
    .line {
      width: 90%;
      height: 5px;
      background-color: ${props => props.theme.colors.da};
    }
    h2 {
      font-size: 2rem;
    }
    h3 {
      font-size: 1.5rem;
    }
  }

  .wrap-img {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // filter: brightness(0.5);
    z-index: 2;

    img {
      width: 110%;
      height: 110%;
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
  // scroll interaction to bg image
  const { scrollYProgress } = useViewportScroll();
  const input = [0, 1];
  const output = [0, 3000];
  const y = useTransform(scrollYProgress, input, output);

  return (
    <CoverDiv>
      <div className="text-box">
        <h1>Kim Jinhyeok</h1>
        <div className="line"></div>
        <h2>web devloper portfolio</h2>
        <h3>안녕하세요. 저는 코딩과 배우는 것이 즐겁고 생산성에 관심이 많습니다.</h3>
      </div>
      <div className="wrap-img">
        <motion.img src={process.env.PUBLIC_URL + '/macbook.jpg'} alt="macbook" style= {{ y }} />
      </div>
      <div className="scroll-box">
        Scroll
        <IoIosArrowDown></IoIosArrowDown>
      </div>
    </CoverDiv>
  );
}

export default Cover;
