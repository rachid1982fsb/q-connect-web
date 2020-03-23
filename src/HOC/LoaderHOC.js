import React from 'react'



// const RenderWrapped=(load)=>{
//     return 
// }



const LoaderHOC = (WrappedComponent) =>{
    return class RenderWrapped extends React.Component{
        state=({
            time: 0
        })

        componentDidMount(){
            this.startTimer = Date.now()
            this.setState({
                time: this.startTimer
            })
            console.log("here", this.startTimer  )
        }

        componentWillUpdate(nextProps) {
            this.endTimer = Date.now()
            console.log("here", this.endTimer , ((this.endTimer - this.startTimer) / 1000).toFixed(2) )
            // this.setState({
            //     time: ((this.endTimer - this.startTimer) / 1000).toFixed(2)
            // })
        }

        render(){
        return this.props.load ? 
                    <WrappedComponent{...this.props} {...this.state}/> 
                    : <>
                        <h2>Loading...</h2>
                        <h2>{((this.endTimer - this.startTimer) / 1000).toFixed(2)}</h2>
                        <h2>{this.state.time}</h2>
                      </>
            // return this.props.load ? <WrappedComponent/> : <h2>Loading...</h2> // for this exomple I dont have to send the prop to the WrappedCompeent
        }
    }
}

export default LoaderHOC