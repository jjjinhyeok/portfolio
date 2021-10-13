import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaPaperclip } from 'react-icons/fa';

const SkillsDiv = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.ds};
  display: flex;
  justify-content: center;
  align-items: center;
  .section {
    .wrap-title {
      .wrap-text.light {
        color: ${props => props.theme.colors.ls};
      }
    }
    .wrap-article {
      .items {
        display: flex;
        justify-content: center;
        align-items: flex-start;
        flex-wrap: wrap;
        gap: 20px;
        .item {
          background: white;
          padding: 15px 18px;
          border-radius: 15px;
          box-shadow:
            0 2.8px 2.2px rgba(0, 0, 0, 0.134),
            0 6.7px 5.3px rgba(0, 0, 0, 0.148),
            0 12.5px 10px rgba(0, 0, 0, 0.16),
            0 22.3px 17.9px rgba(0, 0, 0, 0.172),
            0 41.8px 33.4px rgba(0, 0, 0, 0.186),
            0 100px 80px rgba(0, 0, 0, 0.12);
          .title {
            font-size: 1.5rem;
            text-align: left;
            color: ${props => props.theme.colors.black};
            border-bottom: 1px solid ${props => props.theme.colors.main};
            margin-bottom: 15px;
          }
          .wrap-img {
            width: 230px;
            img {
              width: 100%;
              height: 100%;
            }
          }
        }
      }
    }
  }

`;

const itemList = { // tood: 이를 이용한 리팩토링
  title: 'frontend',
};

function Skills() {
  const hoverStyle = {
    y: +10,
  };
  return (
    <SkillsDiv>
      <div className="section">
        <div className="wrap-title">
          <div className="wrap-icon" id="skills">
            <FaPaperclip size="2.5rem" />
          </div>
          <div className="wrap-text light">
            SKILLS
          </div>
        </div>
        <div className="wrap-article">
          <div className="items">
            <motion.div className="frontend item"
              whileHover={hoverStyle}>
              <div className="title">
                Front-end
              </div>
              <div className="wrap-img">
                <img src={process.env.PUBLIC_URL + '/frontend.png'} alt="frontend" />
              </div>
            </motion.div>
            <motion.div className="backend item"
              whileHover={hoverStyle}>
              <div className="title">
                Back-end
              </div>
              <div className="wrap-img">
                <img src={process.env.PUBLIC_URL + '/backend.png'} alt="backend" />
              </div>
            </motion.div>
            <motion.div className="deployment item"
              whileHover={hoverStyle}>
              <div className="title">
                Deployment
              </div>
              <div className="wrap-img">
                <img src={process.env.PUBLIC_URL + '/deploy.png'} alt="deployment" />
              </div>
            </motion.div>
            <motion.div className="version item"
              whileHover={hoverStyle}>
              <div className="title">
                Version control
              </div>
              <div className="wrap-img">
                <img src={process.env.PUBLIC_URL + '/version.png'} alt="version" />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </SkillsDiv>
  );
}

export default Skills;
