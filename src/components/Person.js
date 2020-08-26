import React from 'react'

function Person(props) {
    const {name, age} = props;
    return (
        <div>
            Hi. My name is {name} and I am {age} years old.
        </div>
    )
}

export default Person
