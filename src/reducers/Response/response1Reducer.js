import {
    CHANGE_COMPANY_SELECT,
    CHANGE_YEAR_REF,
    CHANGE_RESPONSE_COMPLIANT_VALUE,
    CHANGE_RESPONSE_SURVEY_ID_VALUE,
    CHANGE_RESPONSE_NUMBER_QUESTION_VALUE,
    CHANGE_RESPONSE_SUB_QUESTION_VALUE,
    CHANGE_OPTIONAL_TEXT_1_VALUE,
    CHANGE_FILE_1_VALUE,
    CHANGE_SELECT_FILE_VALUE,
    CHANGE_SURVEY_ID,
    CHANGE_SURVEY_ID_TEST,

} from '../../actions/Response/reponse1';

const initialState = {
    // ici l'état initial
    companySelect: '',
    yearRef: (new Date()).getFullYear() - 1,
    responseCompliant: '',
    responseSurveyId: '',
    responseNumberQuestion: '',
    responseSubQuestion: '',
    optionalText1Value: '',
    selectFile: '',
    file1: '',
    surveyId: '',
};

function response1Reducer(state = initialState, action = {}) {
    switch (action.type) {
        //Company
        case CHANGE_COMPANY_SELECT:
            return {
                ...state,
                companySelect: action.value,
            };

        //Year
        case CHANGE_YEAR_REF:
            return {
                ...state,
                yearRef: action.value,
            };

        //Question 1
        case CHANGE_RESPONSE_COMPLIANT_VALUE:
            return {
                ...state,
                responseCompliant: action.value,
            };

        case CHANGE_RESPONSE_SURVEY_ID_VALUE:
            return {
                ...state,
                responseSurveyId: action.value,
            };

        case CHANGE_RESPONSE_NUMBER_QUESTION_VALUE:
            return {
                ...state,
                responseNumberQuestion: action.value,
            };

        case CHANGE_RESPONSE_SUB_QUESTION_VALUE:
            return {
                ...state,
                responseSubQuestion: action.value,
            };

        case CHANGE_OPTIONAL_TEXT_1_VALUE:
            return {
                ...state,
                optionalText1: action.value,
            };

        case CHANGE_FILE_1_VALUE:
            return {
                ...state,
                file1: action.value,
            };

        case CHANGE_SELECT_FILE_VALUE:
            return {
                ...state,
                selectFile: action.value,
            };

        case CHANGE_SURVEY_ID:
            return {
                ...state,
                surveyId: action.value,
            };

        default:
            return state;
    }

}

export default response1Reducer;