import React from 'react';
import logo from './images/read_child_bg.orig.jpg';
import Counter from './counter'
import Root from './Root'
import FirstRunScreen from './screens/FirstRunScreen'


// import Test1 from './Test1.js'
import './App.css';

class  App extends React.Component {

  state=({
    page: "home",
    load: false
  })



  handelClick =()=>{
    localStorage.setItem('user', "Rachid Rakaa");
    this.setState({
      page: "counter"
    }) 
    setTimeout(() => this.setState({
      load: true
    }) , 5000)
  }


  render(){
    return <>
    Hello
            <FirstRunScreen />
          </>
  }

  // render(){
  //   const {page} = this.state
  //           return page === "home" ? (
  //             <div className="App">
  //               <header className="App-header">
  //                 <img src={logo} className="App-logo" alt="logo" />
  //                 <h4>
  //                   QuranConnect 
  //                 </h4>
  //                 <p> Serving your passion for the Quran</p>
  //                 <a
  //                   className="App-link"
  //                   href="https://reactjs.org"
  //                   target="_blank"
  //                   rel="noopener noreferrer"
  //                 >
  //                   Login
  //                 </a>
  //                 <p onClick={this.handelClick}> Counter </p>
  //               </header>
  //               {/* <Test1/> */}
               
  //             </div>
  //           ) : <Counter load={this.state.load}/>
  //       }
}

export default App;
