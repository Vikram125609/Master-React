import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
const Covid20 = () => {
    const [data, setData] = useState([]);
    const getCovidData = async () => {
        const response = await fetch('https://data.covid19india.org/data.json');
        const actualData = await response.json();
        setData(actualData.statewise);
    };
    useEffect(() => {
        getCovidData();
    }, []);
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Confirmed</th>
                        <th>Deaths</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((current, index) => {
                            return (
                                <tr key = {index}>
                                    <th>{current.state}</th>
                                    <th>{current.deaths  }</th>
                                </tr>
                            );
                        })
                    }
                </tbody>
            </table>
        </>
    );
};
export default Covid20;