import styled from 'styled-components';

import Dropdown from "./components/Dropdown";
import Input from "./components/Input";
import Slider from "./components/Slider";
import Tab from "./components/Tab";
import Toggle from "./components/Toggle";


function App() {
  return (
    <>
      <Section>
          <h3>Toggle</h3>
          <Toggle />
      </Section>
    </>
  );
}

const Section = styled.section`
  display: block;
  width: 60%;
  margin: 0 auto;
  height: 200px;
  border: 0.5px solid #acacac;
  
`

export default App;
