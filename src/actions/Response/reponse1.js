export const SUBMIT_RESPONSE_1 = 'SUBMIT_RESPONSE_1';
export const SUBMIT_CREATE_SURVEY = 'SUBMIT_CREATE_SURVEY';
export const CHANGE_SURVEY_ID = 'CHANGE_SURVEY_ID';
// export const CHANGE_CLIENT_ID = 'CHANGE_CLIENT_ID';

//Company
export const CHANGE_COMPANY_SELECT = 'CHANGE_COMPANY_SELECT';
export const CHANGE_YEAR_REF = 'CHANGE_YEAR_REF';


//Question 1
export const CHANGE_RESPONSE_COMPLIANT_VALUE = 'CHANGE_RESPONSE_COMPLIANT_VALUE';
export const CHANGE_RESPONSE_SURVEY_ID_VALUE = 'CHANGE_RESPONSE_SURVEY_ID_VALUE';
export const CHANGE_RESPONSE_NUMBER_QUESTION_VALUE = 'CHANGE_RESPONSE_NUMBER_QUESTION_VALUE';
export const CHANGE_RESPONSE_SUB_QUESTION_VALUE = 'CHANGE_RESPONSE_SUB_QUESTION_VALUE';
export const CHANGE_RESPONSE_1_VALUE = 'CHANGE_RESPONSE_1_VALUE';
export const CHANGE_OPTIONAL_TEXT_1_VALUE = 'CHANGE_OPTIONAL_TEXT_1_VALUE';
export const CHANGE_FILE_1_VALUE = 'CHANGE_FILE_1_VALUE';
export const CHANGE_SELECT_FILE_VALUE = 'CHANGE_SELECT_FILE_VALUE';

// To see survey info
export const FETCH_SURVEY_INFORMATION = 'FETCH_SURVEY_INFORMATION';
export const SAVE_INFORMATION_SURVEY = 'SAVE_INFORMATION_SURVEY';

// //Success handling 
// export const SURVEY_CREATED = 'SURVEY_CREATED';
// export const NEW_CREATE_SURVEY_ID = 'NEW_CREATE_SURVEY_ID';
// export const UPDATE_SURVEY_CREATED = 'UPDATE_SURVEY_CREATED';

// //Error Handling
// export const MISSING_CLIENT_ID = 'MISSING_CLIENT_ID';
// export const MISSING_YEAR = 'MISSING_YEAR';


export const submitResponse1 = () => ({
    type: SUBMIT_RESPONSE_1,
});

export const submitCreateSurvey = () => ({
    type: SUBMIT_CREATE_SURVEY,
});

export const changeSurveyId = (value) => ({
    type: CHANGE_SURVEY_ID,
    value: value,
});


export const changeCompanySelect = (value) => ({
    type: CHANGE_COMPANY_SELECT,
    value: value,
});

export const changeYearRef = (value) => ({
    type: CHANGE_YEAR_REF,
    value: value,
});


//Question 1
export const changeResponseCompliantValue = (value) => ({
    type: CHANGE_RESPONSE_COMPLIANT_VALUE,
    value: value,
});

export const changeResponseSurveyIdValue = (value) => ({
    type: CHANGE_RESPONSE_SURVEY_ID_VALUE,
    value: value,
});

export const changeResponseNumberQuestionValue = (value) => ({
    type: CHANGE_RESPONSE_NUMBER_QUESTION_VALUE,
    value: value,
});

export const changeResponseSubQuestionValue = (value) => ({
    type: CHANGE_RESPONSE_SUB_QUESTION_VALUE,
    value: value,
});


export const changeOptionalText1Value = (value) => ({
    type: CHANGE_OPTIONAL_TEXT_1_VALUE,
    value: value,
});

export const changeFile1Value = (value) => ({
    type: CHANGE_FILE_1_VALUE,
    value: value,
});

export const changeSelectFileValue = (value) => ({
    type: CHANGE_SELECT_FILE_VALUE,
    value: value,
});

// To see survey info
export const fetchSurveyInformation = () => ({
    type: FETCH_SURVEY_INFORMATION,
});

export const saveInformationSurvey = (infoSurvey) => ({
    type: SAVE_INFORMATION_SURVEY,
    infoSurvey,
});


//Success handling
// export const surveyCreated = () => ({
//     type: SURVEY_CREATED,
// });

// export const newCreateSurveyId = (newCreateSurveyId) => ({
//     type: NEW_CREATE_SURVEY_ID,
//     newCreateSurveyId: newCreateSurveyId,
// });

// export const updateSurveyCreated = () => ({
//     type: UPDATE_SURVEY_CREATED,
// });

//Error Handling
// export const missingClientId = () => ({
//     type: MISSING_CLIENT_ID,
// });

// export const missingYear = () => ({
//     type: MISSING_YEAR,
// });

