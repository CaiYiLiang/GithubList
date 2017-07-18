import React from 'react';
import { connect } from 'react-redux';

class Repos extends React.Component{
   render(){
     return(
       <div></div>
     )
   }
  
}

const mapStateToProps = (state) => {
  console.log(state.repos);
  return {
    repos: state.repos
  }
}


Repos = connect(
  mapStateToProps
)(Repos)

export default Repos