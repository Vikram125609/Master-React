import React, { useState } from 'react';
// with the use of Only one use state we are able to do this
const Tut36 = () => {
    const [state, setState] = useState({
        name: '',
        email: ''
    });
    const change = (event) => {
        // console.log(event.target.name);
        // console.log(event.target.value);
        // console.log(event.target.placeholder)
        // setState({name:"Vikram",email:"hello"}) This is also working
        // The below functin prev is the previous value of state
        const name = event.target.name;
        const value = event.target.value;
        setState((prev) => {
            if (name === "name") {
                return {
                    name: value,
                    email: prev.email
                };
            }
            if (name === "email") {
                return {
                    name: prev.name,
                    email: value
                }
            }
        });
    };
    const submit = (event) => {
        console.log('Form is submited')
        console.log(state.name);
        console.log(state.email);
        event.preventDefault();
    };
    return (
        <>
            <form action="/" onSubmit={submit} method="post">
                Name : <input onChange={change} type="text" name="name" id="" />
                Email : <input onChange={change} type="text" name="email" id="" />
                <input type="submit" value="Submit" />
            </form>
            <h1>{state.name}</h1>
            <h1>{state.email}</h1>
        </>
    );
};
export default Tut36;