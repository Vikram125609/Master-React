import React from 'react';
import { useState } from 'react';

const Reactcontact = () => {
    const [user, setUser] = useState({
        name: "",
        email: ""
    });
    const getUserData = (event) => {
        let name = event.target.name;
        let value = event.target.value;
        setUser({ ...user, [name]: value });
        // const {value,name} = event.target;
        // setUser((Prev) => {
        //     if (name === `name`) {
        //         return ({
        //             name: value,
        //             email: Prev.email,
        //         }); 
        //     }
        //     if (name === `email`)
        //     {
        //         return ({
        //             name: Prev.name,
        //             email: value,
        //         });
        //     }
        // });
    };
    const Submit = (event) => {
        event.preventDefault();
        console.log(user.name);
        console.log(user.email);
    };
    const postData = async (e) => {
        e.preventDefault();
        const {name,email} = user;
        const res = await fetch(`https://reactform-2212e-default-rtdb.firebaseio.com/youtubereactform.json`, {
            method: "post",
            headers: {
                "Content-Type":"application/json",
            },
            body : JSON.stringify({
                name,
                email,
            })
        }) 
    };
    return (
        <>
            <form action="" method='POST'>
                <label htmlFor="">Name : </label>
                <input onChange={getUserData} value={user.name} type="text" name="name" id="" />
                <br />
                <label htmlFor="">Email : </label>
                <input onChange={getUserData} value={user.email} type="email" name="email" id="" />
                <br />
                <button onClick={postData}>Click</button>
            </form>
        </>
    );
};
export default Reactcontact;