



export enum UserActionTypes {
    FETCH_USERS = "FETCH_USERS",
    FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS",
    FETCH_USERS_ERROR = "FETCH_USERS_ERROR",
}

interface FetchUsersAction {
    type: UserActionTypes.FETCH_USERS;
}

interface FetchUsersSuccess {
    type: UserActionTypes.FETCH_USERS_SUCCESS;
    payload: any[]
}

interface FetchUsersError {
    type: UserActionTypes.FETCH_USERS_ERROR;
    payload: string;
}

export interface UserState {
    users: any[];
    loading: boolean;
    error: null | string;
} 

/* interface UserAction {
    type: string; // type - must have in 'actions'
    payload?:any;

} */

export type UserAction = FetchUsersAction | FetchUsersSuccess | FetchUsersError