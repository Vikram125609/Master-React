import React from 'react';
import { createContext } from 'react';
import App from './app';
const FirstName = createContext();
const LastName = createContext();
const Tut52 = () => {
    return (
        <>
            <FirstName.Provider value={"Vikram"}>
                <LastName.Provider value={"Singh"}>
                    <App />
                </LastName.Provider>
            </FirstName.Provider>
        </>
    );
};
export default Tut52;
export {FirstName,LastName};