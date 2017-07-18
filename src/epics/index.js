import { ajax } from 'rxjs/observable/dom/ajax';
import * as ActionType from '../actions';

export const fetchUserEpic = (action$) =>
  action$.ofType(ActionType.FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => ActionType.fetchUserFulfilled(response))
    );

export const fetchReposEpic = (action$) =>
  action$.ofType(ActionType.FETCH_GITREPOS)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => ActionType.fetchGitReposFulfilled(response))
    );