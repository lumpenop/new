import Dropdown from './Dropdown';
import Input from './Input';
import Slider from './Slider';
import Tap from './Tap';
import Toggle from './Toggle';
import { useState } from 'react';

const App = () => {
  const [isClicked, setIsClicked] = useState(false);
  const sliderMouseUp =()=>{
    setIsClicked(false);
  };

  return (
    <div>
      { /* eslint-disable-next-line jsx-a11y/no-static-element-interactions */ }
      <div onMouseUp={event => sliderMouseUp(event)} >
        <Dropdown />
        <Input />
        <Slider 
          setIsClicked={setIsClicked}
          isClicked={isClicked}
        />
        <Tap />
        <Toggle />
      </div>
    </div>
  );
};

export default App;
