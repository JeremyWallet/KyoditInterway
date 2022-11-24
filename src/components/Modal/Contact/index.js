import React, { useState } from 'react'
import PropTypes from 'prop-types';
import Field from './Field';
import '../Contact/contact.scss';

const Contact = ({
    setOpenModalContact,
    nameContact,
    surNameContact,
    mailCommentContact,
    contactComment,
    setContactComment,
    changeField,
    handleContact,
}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleContact();
    };

    const [setShowContact] = useState(false);
    const handleCloseContact = () => setShowContact(false);

    return (
        <div className="modalBackgroundContact">
            <div className="modalContainerContact">
                <form className="login-element" onSubmit={handleSubmit}>
                    <div className="titleCloseBtn row">
                        <button
                            type='button'
                            onClick={() => {
                                setOpenModalContact(false);
                            }}
                            className="btnClose col btn-out"
                        >
                            X
                        </button>
                    </div>
                    <div className="titleCloseBtn row">
                        <p className="title-close col">CONTACT</p>
                    </div>
                    <div className="body-contact">
                        <div>
                            <Field
                                name="nameContact"
                                placeholder="Nom"
                                required
                                manageChange={changeField}
                                value={nameContact}
                            />
                        </div>
                        <div>
                            <Field
                                name="surNameContact"
                                placeholder="Prénom"
                                required
                                manageChange={changeField}
                                value={surNameContact}
                            />
                        </div>
                        <div>
                            <Field
                                name="mailCommentContact"
                                type="email"
                                required
                                placeholder="Email"
                                manageChange={changeField}
                                value={mailCommentContact}
                            />
                        </div>
                        <div className="mt-5 mb-3">
                            <h6>Information supplémentaire</h6>
                            <textarea
                                className="infoContact"
                                value={contactComment}
                                type="text"
                                name="contactComment"
                                placeholder="500 caractères maximum"
                                maxLength="500"
                                onChange={(event) => {
                                    console.log(event.currentTarget.value);
                                    setContactComment(event.currentTarget.value);
                                }}
                            />
                            {/* {messageSent && (
                                <Message
                                    positive
                                    header="Votre message a bien été envoyé"
                                    content="Nous y répondrons dans les plus bref délais"
                                />
                            )} */}
                        </div>
                    </div>
                    <div className="footer-login-contact">
                        <button
                            onClick={handleCloseContact}
                        >
                            ENVOYER
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