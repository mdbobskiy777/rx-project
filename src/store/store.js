import { Subject } from 'rxjs';
import { scan, startWith, shareReplay } from 'rxjs/operators';
import { userAPI as usersAPI } from "../api/api";

export const initialState = {
    users:[],
    totalUsersCount:0
};

const handlers = {
    SET_USERS: (state, action) => ({...state, users: action.users}),
    SET_TOTAL_USERS_COUNT: (state, action) => ({...state, totalUsersCount: action.totalUsersCount}),
    DEFAULT: state => state
};

function reducer(state = initialState, action) {
    const handler = handlers[action.type] || handlers.DEFAULT;
    return handler(state, action);
}

function createStore(rootReducer) {
    const subj$ = new Subject();

    const store$ = subj$.pipe(
        startWith({type: '__INIT__'}),
        scan(rootReducer, undefined),
        shareReplay(1)
    );

    store$.dispatch = action => subj$.next(action);

    return store$;
}

const setUsers = (users) => ({type: 'SET_USERS', users});

export const setTotalUsersCount = (totalUsersCount) => ({type: 'SET_TOTAL_USERS_COUNT',
    totalUsersCount: totalUsersCount});

export const getUsers = async (currentPage, pageSize) => {
    let data = await usersAPI.getUsers(currentPage, pageSize);
    store$.dispatch(setUsers(data.users));
    store$.dispatch(setTotalUsersCount(data.totalUsersCount));
};

export const store$ = createStore(reducer);


