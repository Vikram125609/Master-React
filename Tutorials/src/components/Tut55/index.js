import React from 'react';
import axios from 'axios';
import { useEffect } from 'react';
const Tut55 = () => {
    useEffect(()=>{
        alert(`This is Axios`)
    },[]);
    return (
        <>
            This is preety simple
            <h1>you just have to use below lines</h1>
            <h2>await axios.get(url) </h2>
        </>
    );
};
export default Tut55;