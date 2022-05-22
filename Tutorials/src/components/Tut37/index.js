import React, { useState } from 'react';
import './index.css'
const Tut37 = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        phone: '',
    });
    const change = (event) => {
        // Here we can use object destructuring as well
        const {value,name} = event.target;
        // const name = event.target.name;
        // console.log(name);
        setState((Prev) => {
            // Here we can use Spread Operator to minize the content 
            // You Must use === sing for comparing
            if (name === `name`) {
                return ({
                    name: value,
                    email: Prev.email,
                    phone: Prev.phone
                });
            }
            if (name === `email`)
            {
                return ({
                    name: Prev.name,
                    email: value,
                    phone: Prev.phone
                });
            }
            if (name === `phone`)
            {
                return ({
                    name: Prev.name,
                    email: Prev.email,
                    phone: value
                });
            }

        });
    };
    const submit = (event) => {
        alert(`Form Submitted`);
    }
    return (
        <>
            <form action="/" onSubmit={submit} method="get">
                <input type="text" name='name' onChange={change} placeholder='Name' />
                <br />
                <input type="text" name='email' autoComplete='off' onChange={change} placeholder='Email' />
                <br />
                <input type="text" name='phone' onChange={change} placeholder='Phone' />
                <br />
                <input type="submit" onChange={change} value="Submit" />
            </form>
            <h1>This is my Name {state.name}</h1>
            <h1>This is my Email {state.email}</h1>
            <h1>This is my Phone {state.phone}</h1>
        </>
    );
};
export default Tut37;