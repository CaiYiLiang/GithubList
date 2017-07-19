import React from 'react';
import {GoRepo, GoStar,GoRepoForked,GoOctoface} from 'react-icons/lib/go';
import './Repo.css';

const Repo = ({ name, id, fork, html_url, stargazers_count,description}) => (
  <li>
    <h3><GoRepo/> <a href={html_url} target="_blank">{name}</a></h3>
    {description ? <p>{description}</p> : <p>No Project Description</p>}
    <span>{stargazers_count>0 && <span><GoStar/> {stargazers_count}</span>}</span>
    <span>{fork? <span><GoRepoForked/> Forked Repos</span>:<span><GoOctoface/> Owner Repos</span> }</span>
  </li>
)

export default Repo