import React, { Component } from 'react';
import _ from 'lodash';
import Repo from '../components/Repo';
import './RepoList.css';

export default class RepoList extends Component {
       componentDidMount(){
         this.props.fetchGitRepos("caiyiliang");
       }

       render() {
         let {repos,filter} = this.props;
          if(repos){
            let reposSort = repos.map(repo => _.pick(repo,['id','name','fork','html_url','stargazers_count','description']));
            let reposFilter = getVisibleRepos(reposSort,filter);
         return (
            <div className="ReposList"> 
            <ul>
             {reposFilter.map(repo => 
             <Repo key={repo.id} {...repo}/>
             )}
            </ul>
         </div>)
        }
        return <div></div>
      }
}

 const getVisibleRepos = (repos, filter) => {
    switch (filter) {
     case 'SHOW_ALL':
       return repos
     case 'OWNER':
       return repos.filter(repo => !repo.fork )
     case 'FORK':
       return repos.filter(repo => repo.fork )
     default:
       throw new Error('Unknown filter: ' + filter)
  }
}
