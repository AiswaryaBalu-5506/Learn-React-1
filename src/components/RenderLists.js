import React, { Component } from 'react'
import Person from './Person'

class RenderLists extends Component {
    render() {
        const people = [
            {
                id: 1,
                name: 'Aish',
                age: 21
            },
            {
                id: 2,
                name: 'SR',
                age: 25
            },
            {
                id: 3,
                name: 'GV',
                age: 22
            }
        ];

        const names = ['Aishu', 'SR', 'GV']        
        return (
            <div>
                {
                    names.map( (name, index) => <h2 key={index}> {index} {name} </h2>)
                }
            </div>
        )
    }
}

export default RenderLists
