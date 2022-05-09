import { useState } from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

import { Section } from './styled/style';

import {cx} from '../styles';

const dropMenus = [
  'All Symbols',
  'BTCUSD.PERP',
  'ETHUSD.PERP',
  'BCHUSD.PERP',
  'LTCUSD.PERP',
  'XRPUSD.PERP'
];




const Dropdown = () => {

  const [checked, setChecked] = useState(0);
  const [isOn, setIsOn] = useState(false);
  const [menuList, setMenuList] = useState(dropMenus);

  const clickSelect = () => {
    setIsOn(prev => !prev);
  };

  const clickMenu = (idx) => {
    setChecked(idx);
    setIsOn(false);
  };

  const autocomplete = (text) => {
    if (text === '') {
      setMenuList(dropMenus);
    } else {
      const AllSymbols = menuList[0];
      const anotherMenu = menuList.slice(1);

      const newList = anotherMenu.filter(e => {
        return e.includes(text.toUpperCase());
      });

      setMenuList([AllSymbols, ...newList]);
    }
  };


  return (
    <div>
      <Section>
        <h1>Dropdown</h1>
        <SelectBox>
          <Select 
              onClick={clickSelect}
              value={dropMenus[checked]} 
          />
          <FontAwesomeIcon className='caretDown' icon={faCaretDown} />
          <OptionBox 
                          
              className={cx({'on': isOn})}
          >
            <Option>
              <Serch onChange={e=>autocomplete(e.currentTarget.value)} /> 
            </Option>
            {menuList.map((el,i)=>{
              return <Option
                          onClick={()=>{
                              clickMenu(i);
                          }} 
                          key={`${el+i}`}>{el}
              </Option>;
              })}
          </OptionBox>
        </SelectBox>   
      </Section>
    </div>
  );
};

const SelectBox = styled.div`
  position: relative;
  width: 40%;
  margin: 0 auto;

  > .caretDown {
    position: absolute;
    top: 50%;
    right: 5%;
    z-index: 1;
    transform: translateY(-50%);
  }
`;
const Select = styled.input.attrs({
  readOnly: true,
})`
  box-sizing: border-box;
  width: 100%;
  height: 30px;
  padding: 5px;
  cursor: pointer;
  border: 1px solid black;
  border-radius: 2px;
  outline: none;

  &:read-only {
    border: 1px solid black;
  }
`;
const OptionBox = styled.ul`
  position: absolute;
  display: none;
  width: 100%;
  height: 0;
  padding: 0;
  border: 1px solid #cccccc;

  > :first-child {
    border-bottom: 1px solid #cccccc;
  }

  &.on {
    display: block;
    height: 210px;
  }
`;
const Option = styled.li`
  padding: 5px;
  list-style: none;
  cursor: pointer;
  background-color: #ffffff;
`;

const Serch = styled.input.attrs({
  placeholder: 'Search Symbol',
})`
  width: 100%;
  border: none;
  outline: none;
`;
export default Dropdown;
