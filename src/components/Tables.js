import React, { Component } from 'react'
import Columns from './Columns'

class Tables extends Component {
    render() {
        return (
            <div>
                <table> 
                    <thead>
                        <th> SNo </th>
                        <th> Name </th>
                        <th> Company </th>
                    </thead>

                    <tbody> 
                        <Columns> </Columns>
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Tables
