import { ajax } from 'rxjs/observable/dom/ajax';
import {FETCH_USER,fetchUserFulfilled} from '../actions';

export const fetchUserEpic = (action$,store) =>
  action$.ofType(FETCH_USER)
    .mergeMap(action =>
      ajax.getJSON(`https://api.github.com/users/${action.payload}`)
        .map(response => fetchUserFulfilled(response))
    );