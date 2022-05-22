import React, { useState } from 'react';
const Tut33 = () => {
    // You should use useState at the top of the functional components
    const [bg, setBg] = useState("red");
    const [click,setClick] = useState("Click Me");
    const ChangeBg = () => {
        setBg("green");
        setClick("Ouch");
        console.log(`Button is clicked`);
    };
    const ChangeBg2 = () => {
        setBg("red");
        setClick("Click");
    }
    return (
        <>
            <div style={{ backgroundColor: bg }}>
                <button onDoubleClick={ChangeBg2} onClick={ChangeBg} id="btn">{click}</button>
            </div>
        </>
    );
};
export default Tut33;