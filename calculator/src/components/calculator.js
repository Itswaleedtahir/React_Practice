import React , { useState } from 'react';

import {Container , Screen , Prevoius, Current, Button} from '../styles/Main'

const Calculator = ()=>{
const [current , setCurrent] = useState("")
const [previous, setPrevious] = useState("")
const [operations, setOperations] = useState("")

const currentvalueHandler = (el)=>{
    const value = el.target.getAttribute("data")
    if(value === "." && current.includes(".")) return
    setCurrent(current + value);
}
const deleteHnadler = ()=>{
    setCurrent(String(current).slice(0, -1));
}
const allclearHandler = ()=>{
    setCurrent('')
    setPrevious('')
    setOperations('')
}

const operationsHandler =(el)=>{
    if(current === "")return;
    if(previous !== ""){
        let value = compute()
        setPrevious(value)
    }
    else {
        setPrevious(current)
    }
    setCurrent("");
    setOperations(el.target.getAttribute("data"));
}

const equalHandler = ()=>{
    let value = compute()
    if(value === undefined || value === null) return
    setCurrent(value)
    setPrevious('')
    setOperations('')
}

const compute = ()=>{
    let results;
    let previousNumber = parseFloat(previous)
    let currentNumber = parseFloat(current)
    if(isNaN(previousNumber) || isNaN(currentNumber)) return

    switch(operations){
        case "÷":
            results = previousNumber / currentNumber;
            break;
        case "+":
            results = previousNumber + currentNumber;
            break;
        case "-":
            results= previousNumber - currentNumber;
            break;
        case "x":
            results = previousNumber * currentNumber;
            break;
        default: return 
    }
    return results
}


    return(
        <>
        <Container>
            <Screen>
                <Prevoius>{previous} {operations}</Prevoius>
                <Current>{current}</Current>
            </Screen>
                <Button gridSpan={2} control onClick={allclearHandler} >AC</Button>
                <Button onClick={deleteHnadler}>DEL</Button>
                <Button data={"÷"} onClick={operationsHandler} operation>÷</Button>
                <Button data={7} onClick={currentvalueHandler}>7</Button>
                <Button data={8} onClick={currentvalueHandler}>8</Button>
                <Button data={9} onClick={currentvalueHandler}>9</Button>
                <Button data={"x"} onClick={operationsHandler} operation>x</Button>
                <Button data={4} onClick={currentvalueHandler}>4</Button>
                <Button data={5} onClick={currentvalueHandler}>5</Button>
                <Button data={6} onClick={currentvalueHandler}>6</Button>
                <Button data={"+"} onClick={operationsHandler} operation>+</Button>
                <Button data={1} onClick={currentvalueHandler}>1</Button>
                <Button data={2} onClick={currentvalueHandler}>2</Button>
                <Button data={3} onClick={currentvalueHandler}>3</Button>
                <Button data={"-"} onClick={operationsHandler} operation>-</Button>
                <Button data={"."} onClick={currentvalueHandler} decimal>.</Button>
                <Button data={0} onClick={currentvalueHandler}>0</Button>
                <Button gridSpan={2} onClick={equalHandler} equals >=</Button>
        </Container>
        </>
    )

}

export default Calculator