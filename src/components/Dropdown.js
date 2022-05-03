import React,{useState} from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";

const dropMenus = [
    'All Symbols',
    'BTCUSD.PERP',
    'ETHUSD.PERP',
    'BCHUSD.PERP',
    'LTCUSD.PERP',
    'XRPUSD.PERP'
]

const Dropdown = () =>{
    
    const [checked, setChecked] = useState(0);
    const [isOn, setIsOn] = useState(false);
    const [menuList, setMenuList] = useState(dropMenus);

    const clickSelect = () =>{
        setIsOn(prev => !prev);
    }

    const clickMenu = (idx) =>{
        setChecked(idx);
        setIsOn(false);
    }

    const autocomplete = (text) =>{
        if(text===''){
            setMenuList(dropMenus);
        }else{
            const AllSymbols = menuList[0];
            const anotherMenu = menuList.slice(1);

            const newList = anotherMenu.filter(e=>{
                return e.includes(text.toUpperCase());
            })
            
            setMenuList([AllSymbols, ...newList]);           
        }
    }
    
    
    return(
        <>
            <SelectBox>
                <Select 
                    onClick={clickSelect}
                    value={dropMenus[checked]} 
                />
                <FontAwesomeIcon className='caretDown' icon={faCaretDown} />
                <OptionBox 
                    className={isOn ? 'on': ''}
                >
                    <Option>
                        <Serch onChange={e=>autocomplete(e.target.value)} /> 
                    </Option>
                    {menuList.map((e,i)=>{
                        return <Option
                                    onClick={()=>{
                                        clickMenu(i);
                                    }} 
                                    key={i}>{e}
                               </Option>;
                    })}
                </OptionBox>
            </SelectBox>   
        </>
    )
}



const SelectBox = styled.div`
    margin: 0 auto;
    width: 40%;
    position: relative;

    > .caretDown{
        position: absolute;
        z-index: 1;
        top: 50%;
        right: 5%;
        transform: translateY(-50%);
    }
    
`
const Select = styled.input.attrs({
    readOnly: true,
    
})`
    padding: 5px 5px;
    box-sizing: border-box;
    width: 100%;
    height: 30px;
    outline: none;
    border: 1px solid black;
    border-radius: 2px;
    cursor: pointer;

    &:read-only{
        border: 1px solid black;
    }


`
const OptionBox = styled.ul`

    width: 100%;
    height: 0;
    display: none;
    position: absolute;
    padding: 0;
    border: 1px solid #ccc;

    > :first-child{
        border-bottom: 1px solid #ccc;  
    }
    &.on{

        display: block;
        height: 210px;
       
    }
`
const Option = styled.li`
    list-style: none;
    padding: 5px 5px;
    background-color: #fff;
    cursor: pointer;
`

const Serch = styled.input.attrs({
    placeholder: 'Search Symbol',
})`
    width: 100%;
    outline: none;
    border: none;
`
export default Dropdown;