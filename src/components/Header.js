import React from 'react'

export default class Header extends React.Component{

   render(){
     console.log(this.props.user);
     let {user} = this.props
     return(
       <div>
        {user} 
        <div>Test</div>
       </div>
     )
   }
}
