import { useState, useRef } from 'react';
import propTypes from 'prop-types';
import styled from 'styled-components';

import { Section } from './styled/style';
import styles from './Slider.module.scss';
import {cx} from '../styles';

const arrPer = [
    1, 25, 50, 75, 100
];

const Slider = ({isClicked, setIsClicked}) =>{

    const [barWidth, setBarWidth] = useState(1);
    const barRef = useRef();


    const forResult =(result)=>{
        if(result<1){
            return 1;
        // eslint-disable-next-line no-else-return
        }else if(result>100){
            return 100;
        }else{
            return result;
        }
    };
    
    const sliderMoving =(e)=>{

        const sliderWidth = barRef.current.offsetWidth;
        const sliderLeft = barRef.current.getBoundingClientRect().left;
        const mouseX = e.nativeEvent.pageX;
        const mouse = mouseX - (window.outerWidth/2 - (window.outerWidth/2 - sliderLeft));
        const sliderBarPer = parseInt(Math.round(mouse/sliderWidth*100), 10);
        const result = forResult(sliderBarPer);
    
        setBarWidth(result);
    };
    const sliderMouseMove =(e)=>{
        if(isClicked){
            sliderMoving(e);
        }
    };

    const sliderMouseDown =(e)=>{
        sliderMoving(e);
        setIsClicked(true);
      };
      

    return(
      <div>
        <Section>
          <h1>slider</h1>
          <div
            className={styles.container}
            onMouseMove={e=>sliderMouseMove(e)}
          >
            <div 
              className={styles.sliderContainer}
              ref={barRef}
            >
              <div className={styles.stateBox} >
                <div className={styles.stateInput} />
                {barWidth} %
              </div>
              <div className={styles.sliderBox}>
                { /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */ }
                <div
                  className={styles.sliderBarBase}
                  onMouseDown={sliderMouseDown}
                >
                  {arrPer.map((el, i)=>{
                    return <SliderBaseCircle 
                            per={el}
                            key={`${el+i}`}     
                                        
                            className={cx({'skyblue':barWidth >= el})}
                        />;
                  })}
                  <SliderBar barWidth={barWidth}>
                    <div className={styles.sliderSwitch}>
                      <div className={styles.sliderCircle} />
                    </div>
                  </SliderBar>   
                </div>
                {arrPer.map((el, i)=>{
                  return <Button 
                          className={styles.button}
                          per={el} 
                          key={`${el+i}`}
                          value={`${el}%`}
                          data-per={el}
                          onClick={()=>setBarWidth(el)}
                        />;
                })}
              </div>
            </div>
          </div>
        </Section>
      </div>
    );
};

Slider.propTypes = {
  isClicked: propTypes.bool,
  setIsClicked: propTypes.func
};

const SliderBar = styled.div`
  position: absolute;
  width: ${props => props.barWidth}%;
  height: 5px;
  background-color: skyblue;
`;

const SliderBaseCircle = styled.div`
  position: absolute;
  top: 50%;
  left: ${props=>props.per}%;
  width: 15px;
  height: 15px;
  background-color: #ececec;
  border-radius: 15px;
  outline: none;
  transform: translate(-50%, -50%);

  &.skyblue {
    background-color: skyblue;
  }
`;

const Button = styled.input.attrs({
  type: 'button',
})` 
  position: absolute;
  bottom: 0;
  left: ${props=>props.per}%;
  width: 40px;
  padding: 0;
  border: none;
  border-radius: 15px;
  transform: translate(-50%, -60%);
`;

export default Slider;
