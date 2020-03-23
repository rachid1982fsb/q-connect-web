import React from 'react'



const noChangeHOC = (WrappedComponent) =>{
    return props => <WrappedComponent {...props}/>
}



export default noChangeHOC