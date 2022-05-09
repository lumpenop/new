import { useState } from 'react';

import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import { Section } from './styled/style';
import styles from './Input.module.scss';
import {cx} from '../styles';

const Input = () =>{ 


    const [isOk, setIsOk] = useState(false);
    const [isVisible, setIsVisible] = useState(false);

    const eyesClick = () =>{
        setIsVisible(prev=>!prev);
    };
    
    const emailCheck = (e) =>{
        const mail = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
        mail.test(e.target.value) ? setIsOk(true) : setIsOk(false);
    };
    return(
      <div>
        <Section>
          <h1>Input</h1>
          <div className={styles.inputContainer}>
            <div className={styles.textBox}>E-mail</div>
            <div className={styles.inputBox}>
              <input 
                className={styles.email}
                type='text' 
                placeholder='E-mail' 
                onChange={emailCheck} 
              />
              <FontAwesomeIcon        
                  className={cx('checkIcon', {[styles.ok]: isOk})} 
                  icon={faCheck} 
                />
            </div>
            <div className={styles.textBox}>Password</div>
            <div className={styles.inputBox}>
              <input 
                  placeholder="Password"
                  className={styles.email}
                  type={isVisible?'text':'password'} 
              />
              <FontAwesomeIcon 
                  onClick={eyesClick}
                  icon={faEyeSlash} 
              />
            </div>
          </div>
        </Section>
      </div>
    );
};


export default Input;
