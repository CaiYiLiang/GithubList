import React from 'react';

const Header = ({ user }) => {
   const { login, avatar_url, url, public_repos, created_at, updated_at } = user
   return (  
    <div className="User">
        <div style={{display:'inline-block'}}>
          <img src={avatar_url} alt={login} width="150" height="150" />
          <h3>
             <span>Github:</span><a href={url} target="_blank">{login}</a>
          </h3>
        </div>

        <div style={{display:'inline-block'}}>
          <div>Create At {created_at.slice(0,10)}</div>
          <div>Update At {updated_at.slice(0,10)}</div>
          <div>Public Repository: {public_repos}</div>
        </div>

        <div style={{display:'inline-block'}}>
        </div>
    </div>
   )
}

export default Header


