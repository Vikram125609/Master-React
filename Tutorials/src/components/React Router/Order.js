import { useNavigate  } from 'react-router-dom';
import React from 'react';
const Order = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>This is the Order Page</h1>
            <button onClick={()=>{
                navigate(-1)
            }}>Back Button</button>
        </>
    );
};
export default Order;