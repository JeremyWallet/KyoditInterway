import React, { useState } from "react";
// import { toast } from 'react-toastify';
import { Navigate, useNavigate } from 'react-router-dom';
import Field from './Field';
import PropTypes from 'prop-types';
import FlashMessage from 'react-flash-message';
import { Message } from 'semantic-ui-react';
import "./ModalLogin.scss";

const Modal = ({
    setOpenModal,
    email,
    password,
    changeField,
    handleLogin,
    loginError,
    isLogged,
    emailError,
    emailNotFound,
    passworLenghtError,
    wrongPassword,
    missingEmail,
    missingPassword
}) => {

    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleLogin();
        // toast.success('Content de vous revoir');
    };
    const [setShow] = useState(false);
    const handleClose = () => setShow(false);

    const navigate = useNavigate();


    // SI login correct, donc changement state pour loginsuccessfull alors on redirige vers page principale
    // if (isLogged) {
    //     return <Navigate to="/survey" />;
    // }
    return (
        <div className="modal-background">
            <div className="modal-container">
                <form className="login-form-element" onSubmit={handleSubmit}>
                    <div className="title-close-btn row">

                        <button
                            type='button'
                            onClick={() => {
                                setOpenModal(false);
                            }}
                            className="col btn-out"
                        >
                            X
                        </button>

                    </div>
                    <div className="titleCloseBtn row">
                        <p className="title-close col">LOGIN</p>
                    </div>
                    <div className="body">
                        <div >
                            <Field
                                autofocus
                                name="email"
                                placeholder="Email"
                                manageChange={changeField}
                                value={email}
                            />
                        </div>
                        {/* Message displayed only if the email is invalid */}
                        {emailError && (
                            <FlashMessage duration={7000}>
                                <p className="error-email">Email non valide</p>
                            </FlashMessage>
                        )}
                        {/* Message displayed only if the email does not exist */}
                        {emailNotFound && (
                            <FlashMessage duration={7000}>
                                <p className="email-not-exist">Cet identifiant n'existe pas!</p>
                            </FlashMessage>
                        )}
                        {/* Message displayed only if the email is invalid */}
                        {missingEmail && (
                            <FlashMessage duration={7000}>
                                <p className="error-email">Veuillez renseigner votre email</p>
                            </FlashMessage>
                        )}
                        <div>
                            <Field
                                name="password"
                                type="password"
                                placeholder="Password"
                                manageChange={changeField}
                                value={password}
                            />
                        </div>
                        {/* Message displayed only if the password is too short*/}
                        {passworLenghtError && (
                            <FlashMessage duration={7000}>
                                <p className="error-lenght-password">Mot de passe trop court</p>
                            </FlashMessage>
                        )}
                        {/* Message displayed only if the password is incorrect*/}
                        {wrongPassword && (
                            <FlashMessage duration={7000}>
                                <p className="wrong-password-login">Mauvais mot de passe </p>
                            </FlashMessage>
                        )}
                        {/* Message displayed only if the password is incorrect*/}
                        {missingPassword && (
                            <FlashMessage duration={7000}>
                                <p className="wrong-password-login">Veuillez renseigner votre mot de passe</p>
                            </FlashMessage>
                        )}
                    </div>
                    <div className="footer-login">
                        <button
                            type="submit"
                            onClick={() => {
                                navigate('/dashboard');
                                handleClose();
                            }}
                        >
                            SUBMIT
                        </button>
                    </div>
                    {loginError && (
                        <Message
                            error
                            header="Impossible de se connecter"
                            content="Veuillez vérifier votre email/mot de passe"
                        />
                    )}
                </form>
            </div>
        </div>
    );
}

// Modal.propTypes = {
//     email: PropTypes.string.isRequired,
//     password: PropTypes.string.isRequired,
//     changeField: PropTypes.func.isRequired,
//     handleLogin: PropTypes.func.isRequired,
// };
export default Modal;