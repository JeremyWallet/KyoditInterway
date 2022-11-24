import React, { useState } from 'react';
import FlashMessage from 'react-flash-message';
// import PropTypes from 'prop-types';
// import { Navigate } from "react-router-dom";

import './ModalSignIn.scss';
import { Form } from 'react-bootstrap';

const SignIn = ({
    name,
    setName,
    surname,
    setSurname,
    password,
    setPassword,
    confirmPassword,
    setConfirmPassword,
    email,
    setEmail,
    role,
    setRole,
    isCreated,
    setOpenModalSignin,
    handleFormSubmit,
    emailError,
    uniqueEmailError,
    passworLenghtError,
    roleError,
}) => {
    const handleSubmit = (evt) => {
        evt.preventDefault();
        handleFormSubmit();
    }

    // To close the registration form
    const [setShowSignin] = useState(false);
    const handleClose = () => setShowSignin(false);

    // If created close the modal
    if (isCreated) {
        return handleClose;
    }

    return (
        <div className="modal-background-signIn">
            <div className="modal-container-signIn">
                <form className="login-form-element" onSubmit={handleSubmit}>
                    <div className="title-close-btn row">

                        <button
                            type='button'
                            onClick={() => {
                                setOpenModalSignin(false);
                            }}
                            className="col btn-out"
                        >
                            X
                        </button>
                    </div>
                    <div className="titleCloseBtn row">
                        <p className="title-close col">INSCRIPTION</p>
                    </div>
                    <div className="body-signIn">

                        <input
                            className="input-signin"
                            placeholder="Nom"
                            type="text"
                            required
                            value={surname}
                            onChange={(event) => {
                                // console.log(event.currentTarget.value);
                                setSurname(event.currentTarget.value);
                            }}
                        />

                        <input
                            className="input-signin"
                            placeholder="Prénom"
                            type="text"
                            required
                            value={name}
                            onChange={(event) => {
                                // console.log(event.currentTarget.value);
                                setName(event.currentTarget.value);
                            }}
                        />

                        <input
                            className="input-signin"
                            placeholder="email"
                            type="email"
                            required
                            value={email}
                            onChange={(event) => {
                                // console.log(event.currentTarget.value);
                                setEmail(event.currentTarget.value);
                            }}
                        />
                        {/* Message displayed only if the email is invalid */}
                        {emailError && (
                            <FlashMessage duration={7000}>
                                <p className="error-email">Email non valide</p>
                            </FlashMessage>
                        )}
                        {/*Message displayed only if the email is already in use*/}
                        {uniqueEmailError && (
                            <FlashMessage duration={7000}>
                                <p className="error-unique-email">Email déjà utilisé</p>
                            </FlashMessage>
                        )}

                        <input
                            className="input-signin"
                            autoComplete="password"
                            placeholder="Mot de passe d'au moins 6 caractères"
                            type="password"
                            required
                            value={password}
                            onChange={(event) => {
                                // console.log(event.currentTarget.value);
                                setPassword(event.currentTarget.value);
                            }}
                        />
                        {/*Message displayed only if the password is too short*/}
                        {passworLenghtError && (
                            <FlashMessage duration={7000}>
                                <p className="error-lenght-password">Au moins 6 caractères.</p>
                            </FlashMessage>
                        )}
                        <input
                            className="input-signin"
                            autoComplete="password"
                            placeholder="confirmer le mot de passe"
                            type="password"
                            required
                            value={confirmPassword}
                            onChange={(event) => {
                                // console.log(event.currentTarget.value);
                                setConfirmPassword(event.currentTarget.value);
                            }}
                        />

                        <select
                            value={role}
                            onChange={(event) => {
                                // console.log(event.currentTarget.value);
                                setRole(event.currentTarget.value);
                            }}
                        >
                            <option value="">Veuillez choisir le rôle pour l'utilisateur</option>
                            <option value="admin">Administrateur</option>
                            <option value="superadmin">Super Administrateur</option>
                            <option value="clientcontact">Client contact</option>
                        </select>
                        {/*  Message displayed only if the role is  missing */}
                        {roleError && (
                            <FlashMessage duration={7000}>
                                <p className="error-role">Veuillez sélectionner un rôle.</p>
                            </FlashMessage>
                        )}
                        <Form.Check
                            className="cgu-signIn-label"
                            label="&nbsp; J'accepte les CGU"
                            required
                        />
                    </div>
                    <div className="footer-logi-signIn">
                        <button
                            onClick={() => {
                                handleClose();
                            }}
                        >
                            SUBMIT
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

SignIn.propTypes = {
    // name: PropTypes.string.isRequired,
    // setName: PropTypes.func.isRequired,
    // surname: PropTypes.string.isRequired,
    // setSurname: PropTypes.func.isRequired,
    // password: PropTypes.string.isRequired,
    // setPassword: PropTypes.func.isRequired,
    // confirmPassword: PropTypes.string.isRequired,
    // setConfirmPassword: PropTypes.func.isRequired,
    // email: PropTypes.string.isRequired,
    // setEmail: PropTypes.func.isRequired,
    // Role: PropTypes.string.isRequired,
    // setRole: PropTypes.func.isRequired,
    // handleFormSubmit: PropTypes.func.isRequired,
    // isCreated: PropTypes.string.isRequired,
};


export default SignIn;