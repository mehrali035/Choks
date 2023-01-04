import React from 'react'
import { firstName } from './App';


const ComC = () => {
    return (

        <>
            <firstName.Consumer>{(fname) => {
                return <h1>My name is {fname}</h1>;
            }}</firstName.Consumer>
        </>
    )
}

export default ComC;
