import React from 'react';
import { useContext } from 'react';
import { FirstName, LastName } from '../Tut52';
const CompA = () => {
    const FName = useContext(FirstName);
    const LName = useContext(LastName);
    return (<h1>HIS NAME IS {FName} {LName}</h1>);
};
export default CompA;