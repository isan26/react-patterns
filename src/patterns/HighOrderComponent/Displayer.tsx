import React from 'react'

const Displayer : React.FC<{data : any}> = ({data}) => {
    return (
        <div>
            Here is your data 
            {JSON.stringify(data)}
        </div>
    )
}

export default Displayer
