import { combineReducers } from 'redux';

//on importe tous les reducers
import authReducer from '../reducers/authReducer';
import signInReducer from '../reducers/signInReducer';
import companyReducer from '../reducers/companyReducer';
import responseReducer from '../reducers/responseReducer';
import response1Reducer from '../reducers/Response/response1Reducer';
import contactReducer from '../reducers/contactReducer';
import surveyReducer from './surveyReducer';
import validateSurveyReducer from './validateSurveyReducer';
import createSurveyReducer from './createSurveyReducer';
import userProfilReducer from './userProfilReducer';
import surveyProfilReducer from './userProfilReducer';


// Va regrouper tous les reducers
const rootReducer = combineReducers({
    // Tiroir auth créé, et le reducer va gérer les données dans ce tiroir.
    auth: authReducer,
    signIn: signInReducer,
    company: companyReducer,
    response: responseReducer,
    response1: response1Reducer,
    survey: surveyReducer,
    contact: contactReducer,
    validateSurvey: validateSurveyReducer,
    createSurvey: createSurveyReducer,
    users: userProfilReducer,
    surveyInfo: surveyProfilReducer,

});

export default rootReducer;