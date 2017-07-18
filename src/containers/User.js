import React from 'react'
import { connect } from 'react-redux'
import {fetchUser} from '../actions';
import Header from '../components/Header';

export class User extends React.Component {
   render(){
     let {user} = this.props;
     return(
       <div>{user}</div>
     )
   }

}
const mapStateToProps = state => {
  console.log(state.user);
  return {
    user: state.fetchUser
  }
}

// const mapDispatchToProps = dispatch => {
//   return {
//     onTodoClick: id => {
//       dispatch(toggleTodo(id))
//     }
//   }
// }

User = connect(
  mapStateToProps
)(User)

export default User