import React from 'react'
import { firstName, lastName } from './App';


const ComC = () => {
    return (

        <>
            <firstName.Consumer>{(fname) => {
                return (
                    <lastName.Consumer>{(lname) => {
                        return <h1>My name is {fname} {lname}</h1>;
                    }}
                    </lastName.Consumer>
                )
            }}</firstName.Consumer>
        </>
    )
}

export default ComC;
