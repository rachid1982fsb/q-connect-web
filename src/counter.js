import React from 'react'
import LoaderHOC from './HOC/LoaderHOC'
import noChangeHOC from './HOC/NoChangeHOC'
import getUserHOC from './HOC/GetUserHOC'


class Counter extends React.Component{

state=({
    counter: 0, 
    LoadingTime: 0
})

componentDidMount(){
    this.startTimer = Date.now()
    console.log("here", this.startTimer  )
    this.setState({
        LoadingTime:  ((this.startTimer - this.props.time) / 1000).toFixed(2)
    })
}

   
handelAdd=()=>{
    this.setState({
        counter: this.state.counter + 1
    })
}
    
    render(){
        return (<div>
            <a> Counter Hello: {this.state.counter} </a>
            <p>{this.props.user}</p>
        <p>{this.props.load ? "yes":"no"} Loading time: {this.state.LoadingTime}</p>
            <button onClick={this.handelAdd}>ADD </button>
        </div>)
    }
}
// export default  LoaderHOC(Counter)

// export default  noChangeHOC(Counter)


const See = props => (
    <div class="user-container">
      <p>My name is {props.user}!</p>
    </div>
  );
  
export default  LoaderHOC(Counter)

