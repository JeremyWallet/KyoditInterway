import {
    LOG_IN,
    saveUserData,
    KEEP_SESSION,
    emailError,
    emailNotFound,
    passworLenghtError,
    wrongPassword,
    missingEmail,
    missingPassword
} from '../actions/auth';

import http from '../api/http-common';

const authMiddleware = (store) => (next) => (action) => {
    // console.log('on a intercepté une action dans le middleware auth: ', action);

    switch (action.type) {
        //To manage the connection
        case LOG_IN: {
            const email = store.getState().auth.email;
            const password = store.getState().auth.password;
            http.post('/login/create',
                {
                    email: email,
                    password: password,
                }
            ).then(response => {
                //Retrieve the data and save it in saveUserData
                console.log(response.data.message);
                const newAction = saveUserData(
                    response.data.token,
                    response.data.username,
                    response.data.isLogged,
                    response.data.message
                );
                store.dispatch(newAction);
            })
                //Error handling, they will be displayed in the login modal
                .catch(error => {
                    console.log(error.response.data);
                    if (error.response.data.messages.email === 'The email field must contain a valid email address.') {
                        const newAction = emailError(true);
                        store.dispatch(newAction);
                        console.log(error.response.data.messages.email);
                    }

                    if (error.response.data.messages.error === 'Email Not Found') {
                        const newAction = emailNotFound(true);
                        store.dispatch(newAction);
                        console.log(error.response.data.messages.error);
                    }

                    if (error.response.data.messages.password === 'The password field must be at least 6 characters in length.') {
                        const newAction = passworLenghtError(true);
                        store.dispatch(newAction);
                    }

                    if (error.response.data.messages.error === 'Wrong Password') {
                        const newAction = wrongPassword(true);
                        store.dispatch(newAction);
                    }

                    if (error.response.data.messages.email === 'The email field is required.') {
                        const newAction = missingEmail(true);
                        store.dispatch(newAction);
                    }

                    if (error.response.data.messages.password === 'The password field is required.') {
                        const newAction = missingPassword(true);
                        store.dispatch(newAction);
                    }
                });
            break;
        }
    }
    next(action);
};

export default authMiddleware;