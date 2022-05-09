import { useState } from 'react';
import styled from 'styled-components';

import { Section } from './styled/style';
import styles from './Tap.module.scss';
import {cx} from '../styles';

const food = ['감자', '고구마', '카레라이스'];

const Tab = () =>{
    const [liIndex, setLiIndex] = useState(0);

    const Clicked =(index)=>{
        setLiIndex(index);
    };
    return(
      <div>
        <Section>
          <h1>Tap</h1>
          <TabUl>
            <div className={styles.tapContainer}>
              {food.map((el, i)=>{
                return <TabLi key={`${el+i}`}
                    onClick={()=>Clicked(i)}
                              
                    className={cx({'focused': i===liIndex})} 
                >{el}</TabLi>;
              })}
            </div> 
            <div className={styles.SliderBox}>
              <Slider index={liIndex} />
            </div>
          </TabUl>
        </Section>
      </div>
    );
};

const Slider = styled.div`
  position: relative;
  bottom: 1.5px;
  left: ${props=> props.index *  33}%;
  width: 33%;
  height: 3px;
  background-color: skyblue;
  transition: 0.4s;
`;

const TabLi = styled.li`
  width: 33%;
  height: 40px;
  line-height: 40px;
  text-align: center;
  list-style: none;
  cursor: pointer;
  box-sizing: border-box;
  border-width: 0;
  user-select: none;
`;

const TabUl = styled.ul`
  position: relative;
  width: 100%;
  height: 40px;
  box-sizing: border-box;
  border-bottom: 1px solid #bcbcbc;
  padding: 0;
`;


export default Tab;
