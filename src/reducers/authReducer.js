import {
    UPDATE_LOGIN_FIELD,
    SAVE_USER_DATA,
    LOGOUT,
    KEEP_SESSION,
    EMAIL_ERROR,
    EMAIL_NOT_FOUND,
    PASSWORD_LENGHT_ERROR,
    WRONG_PASSWORD,
    MISSING_EMAIL,
    MISSING_PASSWORD
} from '../actions/auth';

const initialState = {
    // état initial
    email: '',
    password: '',
    // logged: false,
    isLogged: false,
    // pseudo du user
    username: null,
    userSurname: '',
    token: null,
    tokenLs: null,
    loginError: false,
    emailError: false,
    emailNotFound: false,
    passworLenghtError: false,
    wrongPassword: false
};

function authReducer(state = initialState, action = {}) {
    switch (action.type) {
        case UPDATE_LOGIN_FIELD:
            return {
                ...state,
                [action.name]: action.newValue,
            };

        case SAVE_USER_DATA:
            return {
                ...state,
                isLogged: action.isLogged,
                token: action.token,
                username: action.username,
                email: '',
                password: ''
            };

        case LOGOUT:
            return {
                ...state,
                isLogged: false,
                token: null,
                username: '',
            };

        case KEEP_SESSION:
            return {
                ...state,
                isLogged: true,
                tokenLS: localStorage.getItem('tokenLS'),
            };

        case EMAIL_ERROR:
            return {
                ...state,
                emailError: true,
            };

        case EMAIL_NOT_FOUND:
            return {
                ...state,
                emailNotFound: true,
            };

        case PASSWORD_LENGHT_ERROR:
            return {
                ...state,
                passworLenghtError: true,
            };

        case WRONG_PASSWORD:
            return {
                ...state,
                wrongPassword: true,
            };

        case MISSING_EMAIL:
            return {
                ...state,
                missingEmail: true,
            };

        case MISSING_PASSWORD:
            return {
                ...state,
                missingPassword: true,
            };


        default:
            return state;
    }

}

export default authReducer;