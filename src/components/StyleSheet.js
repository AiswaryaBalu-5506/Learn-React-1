import React from 'react'
import './myStyle.css'

function StyleSheet() {
    let primary = false;

    const inlineStyle = {
        fontSize: '72px',
        color: 'greenyellow'
    }

    if(primary){
        return (
            <div>
                <h1 className="primary"> Hey </h1>
            </div>
        )
    }

    else{
        return (
            <div>
                <h1 style={inlineStyle}> Hey </h1>
            </div>
        )
    }
    
}

export default StyleSheet
