import React from 'react'
import { FirstName, LastName } from './index';
const CompC = () => {
    return (
        <>
            <FirstName.Consumer>
                {
                    (fName) => {
                        return (
                            <LastName.Consumer>
                                {
                                    (lName) => {
                                        return (
                                            <h1>My Name is {fName} {lName}</h1>
                                        );
                                    }
                                }
                            </LastName.Consumer>
                        );
                    }
                }
            </FirstName.Consumer>
            <h1>This is by using contextState and this is a Callback Hell</h1>
        </>
    );
};
export default CompC;