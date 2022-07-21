import { UserAction , UserActionTypes, UserState} from "../../types/user"

// actions
/* const FETCH_USERS = "FETCH_USERS";
const FETCH_USERS_SUCCESS = "FETCH_USERS_SUCCESS";
const FETCH_USERS_ERROR = "FETCH_USERS_ERROR"; */


const initialState: UserState = {
    users: [],
    loading: false,
    error: null
}

export const userReducer = (state = initialState, action:UserAction): UserState => {
    switch (action.type) {
        case UserActionTypes.FETCH_USERS :
            return {loading:true, error: null, users: [] }
        case UserActionTypes.FETCH_USERS_SUCCESS :
            return {loading:false, error: null, users: action.payload }
        case UserActionTypes.FETCH_USERS_ERROR :
            return {loading:false, error: action.payload, users: [] }
        default:
            return state
    }
    
}