import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from '@redux-devtools/extension';
import reducer from '../reducers';
import authMiddleware from '../middlewares/authMiddleware';
import signInMiddleware from '../middlewares/signInMiddleware';
import companyMiddleware from '../middlewares/companyMiddleware';
import responseMiddleware from '../middlewares/responseMiddleware';
import contactMiddleware from '../middlewares/contactMiddleware';
import surveyMiddleware from '../middlewares/surveyMiddleware';
import userProfilMiddleware from '../middlewares/userProfilMiddleware';
import logger from 'redux-logger';
import throttle from 'lodash/throttle';
import { loadState, saveState } from '../utils/localstorage';

const persistedState = loadState();

const enchancers = composeWithDevTools(
    applyMiddleware(
        authMiddleware,
        signInMiddleware,
        companyMiddleware,
        responseMiddleware,
        contactMiddleware,
        surveyMiddleware,
        userProfilMiddleware,
        logger
    ),
);

const store = createStore(
    reducer,
    persistedState,
    enchancers,
);

store.subscribe(throttle(() => {
    const { auth } = store.getState();
    saveState({
        auth: {
            token: auth.token,
            username: auth.username,
            isLogged: auth.isLogged,

        },
    });
}, 1000));
export default store;