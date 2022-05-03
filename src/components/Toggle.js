import React, {useState} from 'react';
import styled from 'styled-components';


const Toggle = () =>{
    const [isClicked, setIsClicked] = useState(false);

    const toggleHandler = () =>{
        setIsClicked(prev=>!prev);
    }
    return(
        <>
            <ToggleContainer 
                onClick={toggleHandler}
            >
                <ToggleSwitch 
                    className={isClicked ? 'toggle--checked' : '' }
                />
                <ToggleTextBox>
                <ToggleText
                    className={isClicked ? 'toggle--checked' : ''}
                >기본</ToggleText>
                <ToggleText
                    className={!isClicked ? 'toggle--checked': ''}
                >상세</ToggleText>
                </ToggleTextBox>
            </ToggleContainer>
        </>
    )
}

const ToggleTextBox = styled.ul`
    text-align: center;
    position: absolute;
    width: 100%;
    height: 30px;
    display: flex;
    margin: 0;
    padding: 0;
    justify-content: space-around; 
`
const ToggleText = styled.li`
    list-style: none;
    line-height: 30px;
    cursor: pointer;
    user-select: none;

    &.toggle--checked{
        opacity: 0.4;
    }

`

const ToggleContainer = styled.div`
    position: relative;
    margin: 0 auto;
    width: 180px;
    height: 30px;
    background-color: #eee;
    border-radius: 15px;
    cursor: pointer;
`
const ToggleSwitch = styled.div`
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 2%;
    width: 50%;
    height: 80%;
    background-color: white;
    border-radius: 15px;
    transition: 0.5s;
   

    &.toggle--checked{
        left: 48%;
        transition: 0.5s;
    }
`

export default Toggle;