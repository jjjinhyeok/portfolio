import styled from 'styled-components';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion'; // image gallery
import { FaPaperclip, FaCheck } from 'react-icons/fa';
import { GrPrevious, GrNext } from 'react-icons/gr';

const ProjectsDiv = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.la};
  display: flex;
  justify-content: center;
  align-items: center;

  .section {
    .wrap-title {
    }
    .wrap-article {
      .items {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 3rem;
        flex-direction: column;
        .item {
          background: ${props => props.theme.colors.ls};
          padding: 30px 40px;
          @media only screen and (max-width: 600px) {
            padding: 28px 13px;
          }
          border-radius: 30px;
          box-shadow: 1rem 1rem 1rem 0 rgba(68,68,68,.2);
          .wrap-title {
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            .title {
              font-size: 2.7rem;
              font-weight: bold;
              color: ${props => props.theme.colors.black};
            }
            .sub {
              font-size: 1rem;
              color: ${props => props.theme.colors.main};
              font-family: nanumGothic, sans-serif;
              font-weight: bold;
            }
          }
          .wrap-desc {
            display: flex;
            justify-content: center;
            align-items: flex-start;
            gap: 40px;
            @media only screen and (max-width: 600px) {
              flex-direction: column;
            }
            .wrap-gall {
              display: flex;
              justify-content: center;
              align-items: center;
              flex: 1 1 40%;
              position: relative;
              .wrap-img {
                width: 100%;
                height: 500px;
                img {
                  width: 100%;
                  height: 100%;
                  object-fit: cover;
                }
              }
              .btn {
                position: absolute;
                filter: drop-shadow(1px 2px 1px rgb(0 0 0 / 0.4));
                background: white;
                border-radius: 30px;
                width: 40px;
                height: 40px;
                display: flex;
                justify-content: center;
                align-items: center;
              }
              .prev {
                left: 0;
                margin-left: 10px;
              }
              .next {
                right: 0;
                margin-right: 10px;
              }
            }
            .desc {
              display: flex;
              flex: 1 1 40%;
              justify-content: center;
              align-items: flex-start;;
              flex-direction: column;
              font-size: 1rem;
              font-family: nanumGothic, sans-serif;
              color: ${props => props.theme.colors.black};
              .text {
                padding-bottom: 1rem;
                border-bottom: 1px solid ${props => props.theme.colors.main};
                white-space: pre-line;
                text-align: left;
              }
              .points {
                display: flex;
                flex-direction: column;
                margin-top: 1rem;
                gap: 0.7rem;
                .point {
                  display: flex;
                  .head {
                    display: flex;
                    width: 100px;
                    font-weight: 900;
                    margin-left: 10px;
                  }
                  .para {
                    display: flex;
                    flex: 1 1 30%;
                    text-align: left;
                  }
                  .link {
                    cursor: pointer;
                  }
                  .link:hover {
                    text-decoration: underline;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`;

function Gallery({ imgs }) {
  const [cursor, setCursor] = useState(0);
  const nextImage = () => {
    if(cursor === imgs.length-1) {
      setCursor(0);
    } else {
      setCursor(cursor+1);
    }
  };
  const prevImage = () => {
    if(cursor === 0) {
      setCursor(imgs.length-1);
    } else {
      setCursor(cursor-1);
    }
  };
  return (
    <>
      <motion.div className="prev btn" onClick={prevImage} 
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GrPrevious size="20px" color="red"/>
      </motion.div>
      <motion.div className="next btn" onClick={nextImage}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <GrNext size="20px" />
      </motion.div>
      <div className="wrap-img">
        <img src={imgs[cursor]} alt={imgs[cursor]} />
      </div>
    </>
  );
}

function Projects() {
  const setLink = link => {
    return () => {
      window.open(link);
    };
  };
  const cutUrl = url => {
    return url.slice(url.indexOf('/')+2);
  };
  const articles = [
    {
      title: '타임라인 형식의 SNS',
      sub: '2021.07 ~ 2021.09 / 개인 프로젝트',
      imgs: [
        process.env.PUBLIC_URL+'/screenshots/1001.png',
        process.env.PUBLIC_URL+'/screenshots/1002.png',
        process.env.PUBLIC_URL+'/screenshots/1003.png',
        process.env.PUBLIC_URL+'/screenshots/1004.png',
        process.env.PUBLIC_URL+'/screenshots/1005.png',
      ],
      text: '페이스북, 트위터와 같이 타임라인을 메인으로 노출하는 형식의 SNS 입니다. 일반적인 게시판처럼 데이터의 CRUD를 포함하되, 실시간 채팅과 같은 서비스를 구현하고 싶어서 계획한 프로젝트입니다. \n\n실시간 채팅과 알림을 구현하며, 웹소켓에 대한 개념과 Socket.IO 라이브러리을 이용한 구현까지 익힐 수 있었습니다. 또 구글 API의 소셜 로그인과, JWT를 이용한 세션 관리까지 해보았습니다. \n\n백엔드에서, 어떻게 엔드포인트를 REST API 원칙에 입각하여 네이밍할지에 대해서도 고민해볼 수 있는 기회였습니다. ',
      points: [
        {
          head: '주요 기능',
          para: '좋아요 및 댓글, 실시간 채팅, 채팅 및 게시글 알림, 게시글 검색, 구글을 통한 소셜 로그인, 다크 모드 지원'
        },
        {
          head: 'GitHub',
          para: 'https://github.com/devjinhyeok/sns-using-react-nodejs',
        },
        {
          head: '도메인',
          para: 'http://surn.o-r.kr',
        },
        {
          head: 'Front-end',
          para: 'React',
        },
        {
          head: 'Back-end',
          para: 'Node.js, Express, MongoDB',
        },
        {
          head: 'Deployment',
          para: 'GCP(Linux VM)',
        },
      ], 
    },
    {
      title: '중고차 매매 사이트',
      sub: '2020.10 ~ 2020.11 / 4인 팀 프로젝트',
      imgs: [
        process.env.PUBLIC_URL+'/screenshots/2001.png',
        process.env.PUBLIC_URL+'/screenshots/2002.png',
        process.env.PUBLIC_URL+'/screenshots/2003.png',
        process.env.PUBLIC_URL+'/screenshots/2004.png',
        process.env.PUBLIC_URL+'/screenshots/2005.png',
      ],
      text: '학원에서 수료한 Java 강의의 최종 프로젝트로 진행한 중고차 매매 웹사이트입니다. 단순한 게시판이 아닌 차량, 회원, 거래 정보 등의 여러 DB 테이블을 요구했기에 선정한 주제였고 그에 맞게 테이블 간의 관계를 위한 참조키, 외래키를 사용해 볼 수 있었습니다. \n\n4인 협업 프로젝트였고 개발할 분량이 적지 않았기에 나름대로의 체계적인 프로세스를 진행하기 위해 노력하였습니다. 큰 틀을 잡기 위한 IA(Information Architecture)을 작성하고, UI를 직접 구현하기 전 Uxpin을 이용한 목업도 그렸습니다. Github를 통한 소스 공유와 분업으로 협업의 기본을 배울 수 있는 기회였습니다. ',
      points: [
        {
          head: '주요 기능',
          para: '차량 중고 매물 조회 및 예약, 사이트 관리자 메뉴, 커뮤니티 게시판'
        },
        {
          head: 'GitHub',
          para: 'https://github.com/devjinhyeok/kpark'
        },
        {
          head: 'Front-end',
          para: 'JSP',
        },
        {
          head: 'Back-end',
          para: 'Spring, Oracle',
        },
        {
          head: 'Deployment',
          para: 'AWS(EC2(Windows), RDS)',
        },
      ], 
    },
    {
      title: '포트폴리오 페이지',
      sub: '2021.09 ~ 2021.10 / 개인 프로젝트',
      imgs: [
        process.env.PUBLIC_URL+'/screenshots/3001.png',
        process.env.PUBLIC_URL+'/screenshots/3002.png',
        process.env.PUBLIC_URL+'/screenshots/3003.png',
      ],
      text: ' 포트폴리오 용도로 제작한 React 기반의 웹사이트입니다. 서버가 필요 없는 정보 표현을 위한 정적 페이지 였기에 GitHub Pages에 호스팅 했습니다. 또 CSS를 이용한 반응형 웹 디자인에 집중할 수 있는 기회였습니다. framer-motion 라이브러리를 이용한 애니메이션을 버튼과 메인 이미지 스크롤 인터랙션에 적용했습니다. ',
      points: [
        {
          head: '주요 기능',
          para: '반응형 웹 디자인, 스크롤 인터랙션'
        },
        {
          head: 'GitHub',
          para: 'https://github.com/devjinhyeok/portfolio',
        },
        {
          head: '도메인',
          para: 'https://devjinhyeok.github.io/portfolio',
        },
        {
          head: 'Front-end',
          para: 'React',
        },
        {
          head: 'Deployment',
          para: 'GitHub Pages',
        },
      ], 
    },
  ];
  return (
    <ProjectsDiv>
      <div className="section">
        <div className="wrap-title">
          <div className="wrap-icon" id="projects">
            <FaPaperclip size="2.5rem" />
          </div>
          <div className="wrap-text light">
            PROJECTS
          </div>
        </div>
        <div className="wrap-article">
          <div className="items">
            {articles.map(((item, idx) => (
              <div className="item" key={idx}>
                <div className="wrap-title">
                  <div className="title">{item.title}</div>
                  <div className="sub">{item.sub}</div>
                </div>
                <div className="wrap-desc">
                  <div className="wrap-gall">
                    <Gallery imgs={item.imgs} />
                  </div>
                  <div className="desc">
                    <div className="text">{item.text}</div>
                    <div className="points">
                      {item.points.map((point, idx) => (
                        point.head !== 'GitHub' && point.head !== '도메인' ?
                        <div className="point" key={idx}>
                          <FaCheck />
                          <div className="head">{point.head}</div>
                          <div className="para">{point.para}</div>
                        </div>:
                        <div className="point" key={idx}>
                          <FaCheck />
                          <div className="head">{point.head}</div>
                          <div className="para link"
                            onClick={setLink(point.para)}
                          >{cutUrl(point.para)}</div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )))}
          </div>
        </div>
      </div>
    </ProjectsDiv>
  );
}

export default Projects;
