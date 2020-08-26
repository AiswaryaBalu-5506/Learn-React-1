import React from 'react'

const ChildRefCmp = React.forwardRef( (props, ref) => {            //STEP 3 - change the childcomponent like this.
    return (
        <div>
            <input type="text" ref={ref} />     {/* STEP 4 - attach the ref to the input tag */}
        </div>
    )
})

export default ChildRefCmp
