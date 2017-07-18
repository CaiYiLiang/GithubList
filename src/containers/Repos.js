import React from 'react';
import { connect } from 'react-redux';

// class Repos extends React.Component{
//    render(){
//      let {repos} = this.props;
//      console.log(repos);
//      return(
//        <div></div>
//      )
//    }
  
// }

let Repos = ({repos}) => {
    console.log(repos);
    return(
       <div></div>
     )
}


const mapStateToProps = (state) => {
  console.log("reposrepos");
  console.log(state.fetchRepos.repos);
  return {
    repos: state.fetchRepos.repos
  }
}

Repos = connect(
  mapStateToProps
)(Repos)

export default Repos