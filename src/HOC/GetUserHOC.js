import React from 'react'


// const getUserHOC = (WrappedComponent) =>{

//     class GetUserHOC extends React.Component{
//         state=({
//             user: localStorage.getItem('user')
//         })

//         render(){
//             return <WrappedComponent user={this.state.user} {...this.props}/>
//             }
//     }

//     return GetUserHOC
// }


const getUserHOC = WrappedComponent => {
    const user = localStorage.getItem('user')
    return props => <WrappedComponent user={user} {...props} />;
};


export default getUserHOC