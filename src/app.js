import React from 'react'
import {connect} from "react-redux";
import { VscTerminalLinux } from 'react-icons/vsc';
import {
    firstValueFunc,
    secondValueFunc,
    operatorFunc,
    calculate
} from "./action/action";

const App = ({
                 result,
                 firstValue,
                 secondValue,
                 array,
                 firstValueFunc,
                 secondValueFunc,
                 operatorFunc,
                 calculate
             }) => {

    return (
        <>
            <div>Result{result}</div>
            <div>{array}</div>
            <div>First{firstValue}</div>
            <div>Second{secondValue}</div>
            <form>
                <label>
                    <input
                    type='text'
                    name='firstValue'
                    placeholder='first value'
                    onChange={event => firstValueFunc(event.target.value)}/>
                </label>
                <label>
                    <input
                    type='text'
                    name='secondValue'
                    placeholder='second value'
                    onChange={event => secondValueFunc(event.target.value)}/>
                </label>
                <select onChange={event => operatorFunc(event.target.value)}>
                    <option>Шо делать?</option>
                    <option>+</option>
                    <option>-</option>
                    <option>/</option>
                    <option>*</option>
                </select>
                <button
                    onClick={calculate}
                    type='button'>
                    Calculate
                </button>
                <VscTerminalLinux/>
            </form>
        </>
    );
}

const mapStateToProps = ({result, firstValue, secondValue, array}) => {

    return {result, firstValue, secondValue, array}
}

const mapDispatchToProps = {
    firstValueFunc,
    secondValueFunc,
    operatorFunc,
    calculate
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
