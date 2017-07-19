import { connect } from 'react-redux';
import RepoList from '../components/RepoList';

const mapStateToProps = (state) => {
  return {
    repos: state.fetchRepos.repos,
    filter:state.visibilityFilter
  }
}

let Repos = connect(
  mapStateToProps
)(RepoList)

export default Repos