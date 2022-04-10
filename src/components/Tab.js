import React, {useState} from 'react';
import styled from 'styled-components';


const food = ['감자', '고구마', '카레라이스'];

const Tab = () =>{
    const [liIndex, setLiIndex] = useState(0);

    const Clicked =(index)=>{
        setLiIndex(index);
    }
    return(
        <>
            <TabUl>
                <TabContainer>
                {food.map((e, i)=>{
                    return <TabLi key={i}
                        onClick={()=>Clicked(i)}
                        className={`${i===liIndex ? "focused" : ""}`} 
                    >{e}</TabLi>
                })}
                </TabContainer> 
                <SliderBox>
                    <Slider index={liIndex} />
                </SliderBox>
            </TabUl>
        </>
    )
}

const SliderBox = styled.div`
    display: block;
    width: 100%;
`
const Slider = styled.div`
    position: relative;
    height: 3px;
    width: 33%;
    background-color: skyblue;
    bottom: 1.5px;
    left: ${props=> props.index *  33}%;
    transition: 0.4s;
`
const TabContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
`

const TabLi = styled.li`
    width: 33%;
    height: 40px;
    line-height: 40px;
    list-style: none;
    cursor: pointer;
    text-align: center;
    box-sizing: border-box;
    border-width: 0;
`

const TabUl = styled.ul`
    position: relative;
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #bcbcbc;
    box-sizing: border-box;
    padding: 0;
`


export default Tab;