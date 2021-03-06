import React from 'react';
import './Person.css'
import Radium from 'radium'

const person = (props) => {

    return (
        <div className="Person">
            <p>
                Hi, my name is {props.name} and I'm {props.age} years old!!
            </p>
            <button onClick={() => props.deletePerson(props.index)}>X</button>
            <input type="text"  value={props.name} onChange={props.changed}/>
        </div>
    )
}

export default Radium(person);
