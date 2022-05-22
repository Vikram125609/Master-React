import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
const Tut54 = () => {
    const [num, setNum] = useState(0);
    const [nums, setNums] = useState(0);
    const [number,setNumber] = useState(0);
    useEffect(()=>{
        document.title = `You Clicked ` + number + ` times`;
    })
    return (
        <>
            <h1>
                THIS IS USE EFFECT HOOKS
                Theory of use effect
            </h1>
            <ol>
                <li>
                    By using this hooks we can tell react that your component needs to do something after render
                </li>
                <li>
                    if we want to use hooks then we have to go with the funcitonal component
                </li>
                <li>
                    Hooks are always written at the top of the functional component
                </li>
                <li>
                    Use effect always want a function
                </li>
            </ol>
            <button onClick={() => {
                setNum(num + 1);
            }}>{num}</button>
            <br />
            <button onClick={() => {
                setNums(nums + 1);
            }}>{nums}</button>
            <h1>use Effect Hook Challange </h1>
            <h4>This is the button</h4>
            <button onClick={()=>{
                setNumber(number + 1);
            }}>Click Here {number}</button>
        </>
    );
};
export default Tut54 