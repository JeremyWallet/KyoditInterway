import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../ValideSurvey/valideSurvey.scss';

const Contact = ({
    setOpenModalValideSurvey,
    handleValideSurvey,
    // surveyID,
    // setSurveyId

}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleValideSurvey();
    };

    const [setShowValideSurvey] = useState(false);
    const handleCloseValideSurvey = () => setShowValideSurvey(false);

    return (
        <div className="modalBackgroundValideSurvey">
            <div className="modalContainerValideSurvey">
                <form className="login-form-element" onSubmit={handleSubmit}>
                    <div className="titleCloseBtn row">
                        <button
                            onClick={() => {
                                setOpenModalValideSurvey(false);
                            }}
                            className="btnClose col btn-out"
                        >
                            X
                        </button>
                    </div>
                    <div className="body-ValideSurvey">
                        <h6>Après validation, aucune modification ne sera possible.</h6>

                        <input
                            className="input-signin"
                        // type="text"
                        // value={surveyID}
                        // onChange={(event) => {
                        //     console.log(event.currentTarget.value);
                        //     setSurveyId(event.currentTarget.value);
                        // }}
                        />
                    </div>
                    <div className="footer-login-ValideSurvey">
                        <button
                            onClick={handleCloseValideSurvey}
                        >
                            VALIDER
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

Contact.propTypes = {
    nameContact: PropTypes.string.isRequired,
    surNameContact: PropTypes.string.isRequired,
    mailCommentContact: PropTypes.string.isRequired,
    contactComment: PropTypes.string.isRequired,
    setContactComment: PropTypes.func.isRequired,
    handleContact: PropTypes.func.isRequired,
};

export default Contact;