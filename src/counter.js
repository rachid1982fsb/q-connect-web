import React from 'react'
import LoaderHOC from './HOC/LoaderHOC'

class Counter extends React.Component{

state=({
    counter: 0
})
   
handelAdd=()=>{
    this.setState({
        counter: this.state.counter + 1
    })
}
    
    render(){
        return (<div>
            <a> Counter Hello: {this.state.counter} </a>
            <button onClick={this.handelAdd}>ADD </button>
        </div>)
    }
}
export default  LoaderHOC(Counter)