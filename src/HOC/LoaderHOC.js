import React from 'react'



const LoaderHOC = (WrappedComponent) =>{
    return class RenderWrapped extends React.Component{
        render(){
            return this.props.load ? <WrappedComponent/> : <h2>Loading...</h2>
        }
    }
}

export default LoaderHOC