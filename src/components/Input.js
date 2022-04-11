import React, {useState} from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEyeSlash } from "@fortawesome/free-solid-svg-icons";


const Input = () =>{ 


    const [isOk, setIsOk] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const eyesClick = () =>{
        isVisible?setIsVisible(false):setIsVisible(true);
    }
    
    const emailCheck = (e) =>{
        const mail = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/;
        mail.test(e.target.value)?setIsOk(true):setIsOk(false);
    }
    return(
        <>
        <InputContainer>
            <TextBox>E-mail</TextBox>
            <InputBox>
                <Email onChange={emailCheck} />
                <FontAwesomeIcon 
                    className={`${isOk?'checkIcon ok':'checkIcon'}`} 
                    icon={faCheck} 
                />
            </InputBox>
            <TextBox>Password</TextBox>
            <InputBox>
                <input 
                    placeholder="Password"
                    className="password"
                    type={`${isVisible?'text':'password'}`} 
                />
                <FontAwesomeIcon 
                    onClick={eyesClick}
                    icon={faEyeSlash} 
                />
            </InputBox>
        </InputContainer>
        </>
    )
}



const Email = styled.input.attrs({
    type: 'text',
    placeholder: 'E-mail'
})`
    width: 85%;
    border: none;
    &:focus{
        outline:none;
    }
`;

const TextBox = styled.div`
    color: #ababab;
    font-size: 12px;
`

const InputContainer = styled.div`
    width: 60%;
    margin: 0 auto;
`

const InputBox = styled.div`
    border: 1px solid black;
    padding: 5px 5px;
    box-sizing: border-box;
    border-radius: 4px;
    margin-bottom: 10px;

    > .password{
        width: 84%;
        border: none;
        outline: none;
    }
  
    > .ok{
        filter :brightness(0.5) invert(1);
        background-color: yellow;
        border-radius: 30px;
    }
`

export default Input;