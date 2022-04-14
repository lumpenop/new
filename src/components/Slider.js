import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const arrPer = [
    1, 25, 50, 75, 100
]

const Slider = ({isClicked, setIsClicked}) =>{

    const [barWidth, setBarWidth] = useState(30);
    const widthRef = useRef();


    const forResult =(result)=>{
        if(result<1){
            return 1;
        }else if(result>100){
            return 100;
        }else{
            return result;
        }
    }
    const sliderMoving =(e)=>{
        const sliderWidth = widthRef.current.offsetWidth;
        const mouseX = e.nativeEvent.pageX;
        const mouse = mouseX - (window.outerWidth/2 - sliderWidth/2) + 7;
        const sliderBarPer = parseInt(Math.round(mouse/sliderWidth*100));
        const result = forResult(sliderBarPer);
        
        setBarWidth(result);
    }
    const sliderMouseMove =(e)=>{
        if(isClicked){
            sliderMoving(e);
        }
    }

    const sliderMouseDown =(e)=>{
        sliderMoving(e);
        setIsClicked(true);
      }
      

    return(
        <>
            <Container 
                onMouseMove={e=>sliderMouseMove(e)}
            >
                <SliderContainer ref={widthRef}>
                    <StateBox>
                        <StateInput />{barWidth} %
                    </StateBox>
                    <SliderBox>
                        <SliderBarBase
                            onMouseDown={sliderMouseDown}
                        >
                            {arrPer.map(e=>{
                                return <SliderBaseCircle 
                                        per={e}
                                        className={`${ e<=barWidth ?'skyblue':''}`}
                                    />
                            })}
                            <SliderBar barWidth={barWidth}>
                                <SliderSwitch>
                                    <SliderCircle />
                                </SliderSwitch>
                            </SliderBar>
                            
                        </SliderBarBase>
                      
                        {arrPer.map(el=>{
                            return <Button 
                                    per={el} 
                                    value={`${el}%`}
                                    onClick={()=>setBarWidth(el)}
                                />
                        })}
                      
                    </SliderBox>
                </SliderContainer>
            </Container>
        </>
    )
}

const Container = styled.div`
    width: 100%;
`


const SliderContainer = styled.div`
    width: 50%;
    margin: 0 auto;
`

const StateInput = styled.div`
    display: inline-block;
    width: 78%;
    height: 30px;
    border: none;
    outline: none;
    background-color: #fafafa;
    text-align: right;
    user-select: none;
`

const StateBox = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fafafa;
    border: 1px solid #aaa;
    border-radius: 4px;
    line-height: 50px;
    user-select: none;
`

const SliderBox = styled.div`
    display: block;
    position: relative;
    width: 100%;
    height: 90px;
    line-height: 90px;
`

const SliderBarBase = styled.div`
    position: relative;
    display: inline-block;
    width: 100%;
    height: 5px;
    background-color: #ececec;
    padding: 2px 0;
`

const SliderBar = styled.div`
    position: absolute;
    width: ${props => props.barWidth}%;
    height:5px;
    background-color: skyblue;

`

const SliderSwitch = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(50%, -8.5px);
    width: 20px;
    height: 20px;
    border-radius: 15px;
    background-color: #fafafa;
    box-shadow: 1px 2px 4px #dadada;
    pointer-events: none; 
`

const SliderCircle = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 15px;
    height: 15px;
    border-radius: 15px;
    background-color: skyblue;
`

const SliderBaseCircle = styled.div`
    background-color: #ececec;
    width: 15px;
    height: 15px;
    border-radius: 15px;
    left: ${props=>props.per}%;
    top: 50%;
    transform: translate(-50%, -50%);
    position: absolute;
    outline: none;

    &.skyblue{
        background-color: skyblue;
    }
`

const Button = styled.input.attrs({
    type: 'button',
})` 
    position: absolute;
    padding:0;
    width: 40px;
    border-radius: 15px;
    border: none;
    bottom: 0;
    left: ${props=>props.per}%;
    transform: translate(-50%, -60%);
`


export default Slider;