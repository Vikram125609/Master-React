import React, { createElement, useState } from 'react';
import './index.css';
const Tut40 = () => {
    let listItem = document.getElementById("listItem");
    const [state,setState] = useState("");
    const change = (event) => {
        setState(event.target.value);
    };
    const added = () => {
        let para = createElement('p');
        para.innerHtml = state;
        listItem.appendChild(para);
    };
    return (
        <>
            <h1>To Do List</h1>
            <textarea onChange={change} id='textarea' cols={90}></textarea>
            <span onClick={added} className="add">+</span>
            <div id='listItem'>

            </div>
        </>
    );
};
export default Tut40;