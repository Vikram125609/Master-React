// There are total two type of component first one is controlled and second one is uncontrolled  
// A input form element whose value is controlled by the react is called controlled component
import React, { useState } from 'react';
const Tut34 = () => {
    const [state, setState] = useState("");
    const [fullname,setFullname] = useState("");
    const change = (event) => {
        setState(event.target.value);
    };
    const onSubmit = () => {
        setFullname(state)
    };
    return (
        <> 
            <h1>Hello {fullname} </h1>
            <input className='input' type="text" name="name" onChange={change} id="" placeholder="Name" />
            <button onClick={onSubmit}>Submit</button>
        </>
    );
};
export default Tut34;