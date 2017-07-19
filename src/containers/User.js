import React from 'react';
import { connect } from 'react-redux';
import { setVisibilityFilter } from '../actions';
import Header from '../components/Header';

let User = ({user , onClick}) => {
     if(user){
        return(
        <Header user= {user} onClick = {onClick}></Header>
       )
     }
     
     return <div>Loading...</div>
}

const mapStateToProps = state => {
  return {
    user: state.fetchUser.user
  }
}

const mapDispatchToProps = dispatch => ({
  onClick: (filter) => {
    dispatch(setVisibilityFilter(filter))
  }
})

export default User = connect(
  mapStateToProps,
  mapDispatchToProps
)(User)
