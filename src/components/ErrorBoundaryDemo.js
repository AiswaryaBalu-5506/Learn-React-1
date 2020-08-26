import React from 'react'

function ErrorBoundaryDemo(props) {
    const {heroName} = props

    if(heroName==='Joker'){
        throw new Error('Joker is a villain')
    }

    return (
        <div>
            {heroName}
        </div>
    )
}

export default ErrorBoundaryDemo
