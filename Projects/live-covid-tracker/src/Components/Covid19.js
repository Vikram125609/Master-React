import React, { useEffect } from 'react';
import { useState } from 'react';
const Covid19 = () => {
    const [data, setData] = useState([]);
    const getCovidDate = async () => {
        try {
            const response = await fetch(`https://data.covid19india.org/data.json`)
            const actualData = await response.json();
            setData(actualData.statewise[0]) ;
            console.log(data);

        } catch (error) {
            console.log(error);
        }
    };
    useEffect(() => {
        getCovidDate();
    },[]);
    return (
        <>
            <h1>Real Time Covid 19 Tracking from an API</h1>
            <h2>India</h2>
            <ol>
                <li>
                    Total Death {data.deaths}
                </li>
            </ol>
        </>
    );
};
export default Covid19;