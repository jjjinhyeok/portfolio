import styled from 'styled-components';

const SkillsDiv = styled.div`
  height: 100%;
  width: 100%;
  background: ${props => props.theme.colors.ds};
  display: none;
  justify-content: center;
  align-items: center;
`;

function Skills() {
  return (
    <SkillsDiv>
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
    </SkillsDiv>
  );
}

export default Skills;
