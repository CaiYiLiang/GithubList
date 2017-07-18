import React from 'react'
import { connect } from 'react-redux'
import {fetchUser} from '../actions';
import Header from '../components/Header';

let User = ({user}) => {
     if(user){
        console.log(user);
        return(
        <Header user={user}></Header>
       )
     }
     
     return <div>Wait...</div>
}

const mapStateToProps = state => {
  return {
    user: state.fetchUser.user
  }
}

export default User = connect(
  mapStateToProps
)(User)
