import * as types from '../actions/actions'
import { REHYDRATE } from "redux-persist";

let initState = {
    token: null,
    userID: "",
    users: [],
    employees: [],
}

function rootReducer(state = initState, action) {
    switch (action.type) {
        case "TOKEN_KEY":
            return {
                ...state,
                token: action.res,
            }
        case "USER_ID":
            return {
                ...state,
                userID: action.res,
            }
        case "GET_USERS":
            return {
                ...state,
                users: action.res,
            }
        case "GET_EMPLOYEES":
            return {
                ...state,
                employees: action.res,
            }
        default:
            return {
                ...state,
            };
    }
}

export const reducer = rootReducer;


