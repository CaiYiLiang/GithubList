import React from 'react'
import { connect } from 'react-redux'
import {fetchUser} from '../actions';
import Header from '../components/Header';

class User extends React.Component {
   render(){
     console.log(this.props.user)
     let {user} = this.props;
     if(user){
        return(
        <Header user={user}></Header>
       )
     }
     
     return <div>Wait...</div>
   }

}

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

export default User = connect(
  mapStateToProps
)(User)
