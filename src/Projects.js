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
      text: '무한한 인생에 실로 부패뿐이다. 지혜는 그들을 목숨이 뭇 심장의 청춘에서만 대한 그리하였는가? 않는 그들에게 이상, 지혜는 무엇을 많이 얼음과 내려온 칼이다. 청춘에서만 용감하고 몸이 힘차게 설산에서 가치를 이것을 봄바람이다. 인도하겠다는 인류의 인생의 영원히 봄날의 찬미를 뿐이다. 피가 물방아 그림자는 이 그들을 있음으로써 피에 눈에 스며들어 위하여서. 뜨고, 수 일월과 있으랴? 그러므로 보이는 그것은 무엇을 원질이 없으면, 능히 끝에 구하지 때문이다. 힘차게 넣는 찾아다녀도, 수 무엇을 기관과 같이, 날카로우나 듣는다. 같은 풀이 얼마나 인생을 우리의 아니다. 가지에 목숨을 끓는 같이 소리다.이것은 그들은 주는 눈이 예가 사막이다.',
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
      text: '무한한 인생에 실로 부패뿐이다. 지혜는 그들을 목숨이 뭇 심장의 청춘에서만 대한 그리하였는가? 않는 그들에게 이상, 지혜는 무엇을 많이 얼음과 내려온 칼이다. 청춘에서만 용감하고 몸이 힘차게 설산에서 가치를 이것을 봄바람이다. 인도하겠다는 인류의 인생의 영원히 봄날의 찬미를 뿐이다. 피가 물방아 그림자는 이 그들을 있음으로써 피에 눈에 스며들어 위하여서. 뜨고, 수 일월과 있으랴? 그러므로 보이는 그것은 무엇을 원질이 없으면, 능히 끝에 구하지 때문이다. 힘차게 넣는 찾아다녀도, 수 무엇을 기관과 같이, 날카로우나 듣는다. 같은 풀이 얼마나 인생을 우리의 아니다. 가지에 목숨을 끓는 같이 소리다.이것은 그들은 주는 눈이 예가 사막이다.',
      points: [
        {
          head: '주요 기능',
          para: '좋아요 및 댓글, 실시간 채팅, 채팅 및 게시글 알림, 게시글 검색, 구글을 통한 소셜 로그인, 다크 모드 지원'
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
      text: '무한한 인생에 실로 부패뿐이다. 지혜는 그들을 목숨이 뭇 심장의 청춘에서만 대한 그리하였는가? 않는 그들에게 이상, 지혜는 무엇을 많이 얼음과 내려온 칼이다. 청춘에서만 용감하고 몸이 힘차게 설산에서 가치를 이것을 봄바람이다. 인도하겠다는 인류의 인생의 영원히 봄날의 찬미를 뿐이다. 피가 물방아 그림자는 이 그들을 있음으로써 피에 눈에 스며들어 위하여서. 뜨고, 수 일월과 있으랴? 그러므로 보이는 그것은 무엇을 원질이 없으면, 능히 끝에 구하지 때문이다. 힘차게 넣는 찾아다녀도, 수 무엇을 기관과 같이, 날카로우나 듣는다. 같은 풀이 얼마나 인생을 우리의 아니다. 가지에 목숨을 끓는 같이 소리다.이것은 그들은 주는 눈이 예가 사막이다.',
      points: [
        {
          head: '주요 기능',
          para: '좋아요 및 댓글, 실시간 채팅, 채팅 및 게시글 알림, 게시글 검색, 구글을 통한 소셜 로그인, 다크 모드 지원'
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
