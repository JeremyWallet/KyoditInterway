import { connect } from 'react-redux';

// We import the presentation component
import Response6 from '../../components/Response/NewResponse/response6';

import {
    submitResponse1,
    changeResponseCompliantValue,
    changeResponseSurveyIdValue,
    changeResponseNumberQuestionValue,
    changeResponseSubQuestionValue,
    changeFile1Value,
    changeSelectFileValue
} from '../../actions/Response/reponse1';


// === mapStateToProps
// If I need to read information in the state
const mapStateToProps = (state) => ({
    // Name of the prop to fill: element to retrieve from the state
    responseCompliant: state.response1.inputResponseCompliant,
    responseSurveyId: state.response1.inputResponseSurveyId,
    responseNumberQuestion: state.response1.inputResponseNumberQuestion,
    responseSubQuestion: state.response1.inputSubQuestion,
    selectFile: state.response1.inputSelectFile,
    file1: state.response1.inputFile1,

    isLogged: state.auth.isLogged,
    username: state.auth.username,
    token: state.auth.token,
});

// === mapDispatchToProps
// If I need to dispatch actions to the store (update the state)
const mapDispatchToProps = (dispatch) => ({
    // Name of the prop to fill: function that dispatches the action

    handleResponse6: () => {
        dispatch(submitResponse1());
    },

    setResponseCompliant: (newValue) => {
        dispatch(changeResponseCompliantValue(newValue));
    },

    setResponseSurveyId: (newValue) => {
        dispatch(changeResponseSurveyIdValue(newValue));
    },
    setResponseNumberQuestion: (newValue) => {
        dispatch(changeResponseNumberQuestionValue(newValue));
    },

    setResponseSubQuestion: (newValue) => {
        dispatch(changeResponseSubQuestionValue(newValue));
    },

    setFile1: (newValue) => {
        dispatch(changeFile1Value(newValue));
    },

    setSelectedFile: (newValue) => {
        dispatch(changeSelectFileValue(newValue));
    },
});

// === creation of the assistant
export default connect(mapStateToProps, mapDispatchToProps)(Response6);
