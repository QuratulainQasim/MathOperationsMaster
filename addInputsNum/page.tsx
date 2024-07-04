"use client";

import "./style.css"
import React, { useState } from "react";

const AddInputsNum = () => {
    const [input, setInput] = useState({ num1: 0, num2: 0 });
    const [result, setResult] = useState("");
    // states for subtraction management..

    const [subInput, setSubInput] = useState({ numb1: 0, numb2: 0 });
    const [subResult, setSubResult] = useState("");

    // states for Multiplication management..
    const [mulInput, setMulInput] = useState({ numbe1: 0, numbe2: 0 });
    const [mulResult, setMulResult] = useState("");

    // states for division management..
    const [divInput, setDivInput] = useState({ number1: 0, number2: 0 });
    const [divResult, setDivResult] = useState("");


    const handleInput = (e: any) => {
        setInput({
            ...input, [e.target.name]: Number(e.target.value)

        });
    };

    const sum = () => {
        const { num1, num2 } = input;
        setResult(num1 + num2);
    };
    // functions for subtraction

    const handleInputSub = (e: any) => {
        setSubInput({
            ...subInput,
            [e.target.name]: Number(e.target.value)
        });
    };

    const subtract = () => {
        const { numb1, numb2 } = subInput;
        setSubResult(numb1 - numb2);
    };

    // functions for Multiplication

    const handleInputMul = (e:any) => {
        setMulInput({
            ...mulInput,
            [e.target.name]: Number(e.target.value)
        });
    };

    const multiply = () => {
        const { numbe1, numbe2 } = mulInput;
        setMulResult(numbe1 * numbe2);
    };

    // functions for Division

    const handleInputDiv = (e:any) => {
        setDivInput({
            ...divInput,
            [e.target.name]: Number(e.target.value)
        });
    };

    const division = (e:any) => {
        const { number1, number2 } = divInput;
        setDivResult(number1 / number2);
    };
    return (
        <>
       <div className="biggestContainer"><br /><br />
       <h3>A React-based Next.js calculator performing various arithmetic operations with a user-friendly interface.</h3>
           <div className="biggContainer">

          
            <div className="container">
            <h1>Addition</h1>
                <input onChange={handleInput} name="num1" value={input.num1} type="number" />
                <input onChange={handleInput} name="num2" value={input.num2} type="number" /> <br /> <br />
                <button onClick={sum}>+</button>
                <h3>results: {result}</h3>
            </div>
            <div className="container">
                <h1>Multiplication</h1>
                <input onChange={handleInputMul} name="numbe1" value={mulInput.numbe1} type="number" />
                <input onChange={handleInputMul} name="numbe2" value={mulInput.numbe2} type="number" /> <br /> <br />
                <button onClick={multiply}>*</button>
                <h3>Results: {mulResult}</h3>
            </div><br /><br />
            <div className="container">
                <h1>Subtraction</h1>
                <input onChange={handleInputSub} name="numb1" value={subInput.numb1} type="number" />
                <input onChange={handleInputSub} name="numb2" value={subInput.numb2} type="number" /> <br /> <br />
                <button onClick={subtract}>-</button>
                <h3>Results: {subResult}</h3>
            </div>
            <div className="container">
                <h1>Division</h1>
                <input onChange={handleInputDiv} name="number1" value={divInput.number1} type="number" />
                <input onChange={handleInputDiv} name="number2" value={divInput.number2} type="number" /> <br /> <br />
                <button onClick={division}>/</button>
                <h3>Results: {divResult}</h3>
            </div>
           </div>
       </div>
        </>
    );
};

export default AddInputsNum;
