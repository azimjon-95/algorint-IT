import { LOG_IN, LOG_OUT } from './action/actionTypes'

let userStorage = JSON.parse(localStorage.getItem("user"))
export const initialState = {
    auth: userStorage ? userStorage : null
    // auth: userStorage ? userStorage : userStorage
}

const reducer = (state, action) => {
    switch (action.type) {
        case LOG_IN:
            return { ...state, auth: action.payload }

        case LOG_OUT:
            return { ...state, auth: null }
        default:
            return state
    }
}
export default reducer;