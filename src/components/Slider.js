import React, {useState, useRef} from 'react';
import styled from 'styled-components';

const Slider = () =>{

    const [barWidth, setBarWidth] = useState(30);
    const widthRef = useRef();

    const sliderClick =(e)=>{
        console.log(e.target);
        const mouseX = e.nativeEvent.offsetX;
        const sliderWidth = widthRef.current.offsetWidth;
        const sliderBarPer = parseInt(Math.round(mouseX/sliderWidth*100));
        console.log(sliderBarPer);
        setBarWidth(sliderBarPer);
    }

    return(
        <>
            <SliderContainer ref={widthRef}>
                <StateBox>
                    <StateInput value={barWidth} /> %
                </StateBox>
                <SliderBox>
                    <SliderBarBase 
                        onMouseDown={e=>sliderClick(e)}
                    >
                        <SliderBar barWidth={barWidth}>
                            <SliderSwitch>
                                <SliderCircle />
                            </SliderSwitch>
                        </SliderBar>
                    </SliderBarBase>
                </SliderBox>
            </SliderContainer>
        </>
    )
}

const SliderContainer = styled.div`
    width: 50%;
    margin: 0 auto;
`

const StateInput = styled.input.attrs({
    readOnly: true,
})`
    display: inline-block;
    width: 80%;
    height: 30px;
    border: none;
    outline: none;
    background-color: #fafafa;
    text-align: right;
`

const StateBox = styled.div`
    width: 100%;
    height: 50px;
    background-color: #fafafa;
    border: 1px solid #aaa;
    border-radius: 4px;
    line-height: 50px;
`

const SliderBox = styled.div`
    display: block;
    width: 100%;
    height: 60px;
    line-height: 60px;
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


export default Slider;