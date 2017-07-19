import React from 'react';
import './Header.css';
import {GoMarkGithub,GoRepo} from 'react-icons/lib/go';

const Header = ({ user, onClick }) => {
   const { login, avatar_url, url, public_repos, created_at, updated_at } = user
   return (  
    <div className="Header">
        <div className="UserImg">
          <img src={avatar_url} alt={login}/>
        </div>

        <div className="UserInfo">
          <div className="Github">
           <span><GoMarkGithub/> </span><a href={url} target="_blank">{login}</a>
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
    </div>
   )
}

export default Header


