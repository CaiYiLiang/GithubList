import React, {Component} from 'react';
import './Header.css';
import {GoMarkGithub,GoRepo,GoClock} from 'react-icons/lib/go';

export default class Header extends Component {
    componentDidMount(){
         this.props.fetchUser("caiyiliang");
    }

     render() {
       let {user, onClick} = this.props;
       if(user){
           const { login, avatar_url, html_url, public_repos, created_at, updated_at } = user;
        return (  
         <div className="Header">
         <div className="UserImg">
           <img src={avatar_url} alt={login}/>
         </div>

         <div className="UserInfo">
           <div className="Github">
           <span><GoMarkGithub/> </span><a href={html_url} target="_blank">{login}</a>
         </div>
         <div className="GithubTimeStamp">
         <div>Create : {created_at.slice(0,10)}</div>
         <div>Update: {updated_at.slice(0,10)}</div>
         </div>
         <div className="GithubReposInfo"><GoRepo/>Repository: {public_repos}</div>
         <div className="GithubReposFilter">
           <span>SHOW: </span>
           <span onClick={e => {
              e.preventDefault()
              onClick("SHOW_ALL")
             }}>ALL </span>
            <span onClick={e => {
              e.preventDefault()
              onClick("OWNER")
             }}>OWNER </span> 
            <span onClick={e => {
              e.preventDefault()
              onClick("FORK")
             }}>FORK </span>
          </div>
         </div>
      </div>) 
       }
       return <div className="Loading"><GoClock/> Loading... </div>
    }
}


