import React, { useState } from 'react';
import ToDo from './ToDo';
import './index.css';
const Notes = () => {
    const [state, setState] = useState("");
    const [data, setData] = useState([]);
    const itemEvent = (e) => {
        setState(e.target.value);
    }
    const addItem = () => {
        setData((oldItem) => {
            return [...oldItem, state];
        });
        setState("");
    };
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>To Do List</h1>
                    <br />
                    <input onChange={itemEvent} type="text" value={state} placeholder='Add Items' />
                    <button onClick={addItem}>+</button>
                    <ol>
                        {
                            data.map((itemVal, index) => {
                                return <ToDo key={index} text={itemVal} />
                            })
                        }
                    </ol>
                </div>
            </div>
        </>
    );
};
export default Notes;