import React, { useState } from 'react';
const Tut35 = () => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [finalEmail,setFinalEmail] = useState("");
    const [finalPass,setFinalPass] = useState("");
    const emailChange = (event) => {
        setEmail(event.target.value);
    };
    const passChange = (event) => {
        setPass(event.target.value);
    };
    const onSubmit = (event) => {
        setFinalEmail(email)
        setFinalPass(pass);
        event.preventDefault();
    };
    return (
        <>
            <h1>{finalEmail}</h1>
            <h1>{finalPass}</h1>
            <form onSubmit={onSubmit} action="" method="get">
                Email : <input type="text" onChange={emailChange} name="" id="" />
                Password : <input type="text" onChange={passChange} name="" id="" />
                <input type="submit" value="Submit" />
            </form>
        </>
    );
};
export default Tut35;