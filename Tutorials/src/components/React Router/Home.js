import { useNavigate } from 'react-router-dom';
import React from 'react';
const Home = () => {
    const navigate = useNavigate();
    return (
        <>
            <h1>Hello World This is the home page</h1>
            <button onClick={()=>{
                navigate('/order-summary')
            }}>Place Order</button>
        </>
    );
}
export default Home; 