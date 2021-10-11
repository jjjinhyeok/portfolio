import styled from 'styled-components';
import { IoCall } from 'react-icons/io5';
import { BsFillPersonFill, BsCalendarFill, BsGeoAlt, BsEnvelopeFill, BsServer } from 'react-icons/bs';
import { FaPaperclip } from 'react-icons/fa';

const AboutMeDiv = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${props => props.theme.colors.ls};
  display: flex;
  justify-content: center;
  align-items: center;

  .section {
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      width: 100%;
    }
    .wrap-article {
      display: flex;
      justify-content: center;
      align-items: center;
      .wrap-wrap-photo {
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        padding-left: 50px;
        padding-right: 80px;
        @media only screen and (max-width: 600px) {
          height: 30%;
          padding-left: 100px;
        }
        .wrap-photo {
          width: 300px;
          height: 300px;
          border-radius: 200px;
          overflow: hidden;
          border: 5px solid ${props => props.theme.colors.ds};
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
      // .line {
      //   width: 5px;
      //   height: 80%;
      //   background: ${props => props.theme.colors.da};
      //   @media only screen and (max-width: 600px) {
      //     display: none;
      //   }
      // }
      .items {
        display: flex;
        flex-wrap: wrap;
        gap: 50px;
        padding-left: 80px;
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
            color: ${props => props.theme.colors.main};
          }
          .wrap-text {
            font-family: NanumGothic, sans-serif;
            color: ${props => props.theme.colors.ds};
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
            .link {
              color: ${props => props.theme.colors.ds};
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
`;

function AboutMe() {
  const githubClick = () => {
    window.open('https://github.com/devjinhyeok');
  };
  const velogClick = () => {
    window.open('https://velog.io/@909snare');
  };
  return (
    <AboutMeDiv>
      <div className="section">
        <div className="wrap-title">
          <div className="wrap-icon" id="aboutme">
            <FaPaperclip size="2.5rem" />
          </div>
          <div className="wrap-text">
            ABOUT ME
          </div>
        </div>
        <div className="wrap-article">
          <div className="wrap-wrap-photo" >
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
                <div className="desc">인천광역시</div>
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
                <div className="desc" style={{ cursor: 'text' }}>snare909@gmail.com</div>
              </div>
            </div>
            <div className="archiving item">
              <BsServer size="50px" />
              <div className="wrap-text">
                <div className="title">아카이빙</div>
                <div className="desc">
                  <span className="link" onClick={githubClick}>github.com/devjinhyeok</span>
                  <br />
                  <span className="link" onClick={velogClick}>velog.io/@909snare</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AboutMeDiv>
  );
}

export default AboutMe;
