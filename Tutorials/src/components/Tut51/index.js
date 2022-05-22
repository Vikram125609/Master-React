import React from 'react';
import { createContext } from 'react';
import CompA from './CompA';
const FirstName = createContext();
const LastName = createContext();
const Tut51 = () => {
    return (
        <>
            <h1>Context API</h1>
            <ol>
                <li>First You have to create a context state</li>
                <li>and now you need a provider</li>
                <li>and we have consumer</li>
                <li>Our Consumer will accept a funciton form us</li>
            </ol>
            <FirstName.Provider value={"KANHA"}>
                <LastName.Provider value={"MADHAV"}>
                    <CompA />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};
export default Tut51;
export { FirstName , LastName   };