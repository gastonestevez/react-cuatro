const initialState = {
    username: '',
    token: '',
    loggedIn: false,
    email: ''
}

const SET_LOGGED_USER = 'SET_LOGGED_USER'
const SET_LOGOUT = 'SET_LOGOUT'

export const setLogout = () => {
    return {
        type: SET_LOGOUT,
    }
}

export const setLoggedUser = (payload) => {
    return {
        type: SET_LOGGED_USER,
        payload: {
            username: payload.username,
            token: payload.token,
            email: payload.email
        }
    }
}


const reducer = (state = initialState, action) => {
    switch(action.type) {
        case SET_LOGOUT: {
            return {
                ...state,
                username: '',
                token: '',
                loggedIn: false,
                email: ''
            }
        }
        case SET_LOGGED_USER: {
            const { username, email, token } = action.payload
            return {
                ...state,
                username,
                email,
                token,
                loggedIn: true
            }

        }
        default: {
            return state
        }
    }
}

export default reducer
