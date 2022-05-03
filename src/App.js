import styled from 'styled-components';
import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";
import React from 'react';

import { useDispatch} from 'react-redux'
import { setIsClicked } from './actions/index';

function App() {
  const dispatch = useDispatch();
  const sliderMouseUp =()=>{
    dispatch(setIsClicked(false));

}
  
  
  return (
    <>
      <div onMouseUp={e=>sliderMouseUp()}>
        <Section>
            <h3>Toggle</h3>
            <Toggle />
        </Section>
        <Section>
          <h3>Tab</h3>
          <Tab />
        </Section>
        <Section>
          <h3>Input</h3>
          <Input />
        </Section>
        <Section id='dropdown'>
          <h3>Dropdown</h3>
          <Dropdown />
        </Section>
        <Section>
          <h3>Slider</h3>
          <Slider />
        </Section>
      </div>
    </>
  );
}

const Section = styled.section`
  display: block;
  width: 60%;
  margin: 0 auto;
  height: 200px;
  border: 0.5px solid #acacac;
  margin-bottom: 10px;

  &#dropdown{
    height: 310px;
  }
`

export default App;
