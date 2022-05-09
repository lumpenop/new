import { useState } from 'react';
import styled from 'styled-components';

import { Section } from './styled/style';
import {cx} from '../styles';

const Toggle = () =>{
  const [clicked, setClicked] = useState(false);

  const toggleHandler = () =>{
     setClicked(prev => !prev);
  };
  return(
    <div>
      <Section>
        <h1>Toggle</h1>
        <ToggleContainer 
              onClick={toggleHandler}
          >
          <ToggleSwitchBox>
            <ToggleSwitch 
              className={cx({'toggle--checked': clicked})}
            />
            <ToggleTextBox>
                  
              <ToggleText
                      className={cx({'toggle--checked': clicked})}
                  >기본</ToggleText>
              <ToggleText
                      className={cx({'toggle--checked': !clicked})}
                  >상세</ToggleText>
            </ToggleTextBox>
          </ToggleSwitchBox>
        </ToggleContainer>
      </Section>
    </div>
  );
};

const ToggleTextBox = styled.ul`
  text-align: center;
  position: absolute;
  top: 0;
  width: 100%;
  height: 30px;
  display: flex;
  margin: 0;
  padding: 0;
  justify-content: space-around; 
`;
const ToggleText = styled.li`
  list-style: none;
  line-height: 30px;
  cursor: pointer;
  user-select: none;
  &.toggle--checked{
      opacity: 0.4;
  }

`;

const ToggleContainer = styled.div`
  margin: 0 auto;
  width: 180px;
  height: 30px;
  background-color: #eee;
  border-radius: 15px;
  cursor: pointer;
`;
const ToggleSwitchBox = styled.div`
  width: 180px;
  height: 30px;
  padding: 0 2%;
  position: relative;
  box-sizing: border-box;
`;
const ToggleSwitch = styled.div`
  position: relative;
  top: 50%;
  transform: translateY(-50%);
  left: 0;
  width: 50%;
  height: 80%;
  background-color: white;
  border-radius: 15px;
  transition: 0.5s;
 
  &.toggle--checked{
      left: 50%;
      transition: 0.3s;
  }
`;

export default Toggle;
