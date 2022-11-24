/* actions qui concernent l'authentification */

// === action types
export const UPDATE_LOGIN_FIELD = 'UPDATE_LOGIN_FIELD';
export const LOG_IN = 'LOG_IN';
export const KEEP_SESSION = 'KEEP_SESSION';
export const SAVE_USER_DATA = 'SAVE_USER_DATA';
export const LOGOUT = 'LOGOUT';
export const LOGIN_ERROR = "LOGIN_ERROR";
export const LOGIN_SUCCESSFULL = "LOGIN_SUCCESSFULL";

//Error Handling
export const EMAIL_ERROR = 'EMAIL_ERROR';
export const EMAIL_NOT_FOUND = 'EMAIL_NOT_FOUND';
export const PASSWORD_LENGHT_ERROR = 'PASSWORD_LENGHT_ERROR';
export const WRONG_PASSWORD = 'WRONG_PASSWORD';
export const MISSING_EMAIL = 'MISSING_EMAIL';
export const MISSING_PASSWORD = 'MISSING_PASSWORD';


// === action creators
export const updateLoginField = (newValue, name) => ({
    type: UPDATE_LOGIN_FIELD,
    newValue: newValue,
    name: name,
});

export const logIn = () => ({
    type: LOG_IN,
});

export const keepSession = (isLogged, token) => ({
    type: KEEP_SESSION,
    logged: isLogged,
    token: token,
});

export const saveUserData = (token, username, isLogged) => ({
    type: SAVE_USER_DATA,
    token: token,
    username: username,
    isLogged: isLogged,
});

// isLogged
export const logOut = () => ({
    type: LOGOUT,
});

//Error Handling
export const emailError = () => ({
    type: EMAIL_ERROR,
});

export const emailNotFound = () => ({
    type: EMAIL_NOT_FOUND,
});

export const passworLenghtError = () => ({
    type: PASSWORD_LENGHT_ERROR,
});

export const wrongPassword = () => ({
    type: WRONG_PASSWORD,
});

export const missingEmail = () => ({
    type: MISSING_EMAIL,
});

export const missingPassword = () => ({
    type: MISSING_PASSWORD,
});





