import { connect } from 'react-redux';
import { updateLoginField, logIn } from '../../actions/auth';

// on importe le composant de présentation
import Header from '../../components/Modal/Login/ModalLogin';

// === mapStateToProps
// si j'ai besoin de lire des informations dans le state
const mapStateToProps = (state) => ({
    // nom de la prop à remplir: élément à récupérer dans le state
    email: state.auth.email,
    password: state.auth.password,
    isLogged: state.auth.isLogged,
    username: state.auth.username,
    userSurname: state.auth.userSurname,
    // isLogged: state.auth.isLogged,
    token: state.auth.token,
    myInformationList: state.auth.myInformationList,
    emailError: state.auth.emailError,
    emailNotFound: state.auth.emailNotFound,
    passworLenghtError: state.auth.passworLenghtError,
    missingEmail: state.auth.missingEmail,
    missingPassword: state.auth.missingPassword,
    wrongPassword: state.auth.wrongPassword,

});

// === mapDispatchToProps
// si j'ai besoin de dispatcher des actions vers le store (mettre à jour le state)
const mapDispatchToProps = (dispatch) => ({
    // Nom de la props à remplir
    changeField: (newValue, name) => {
        // console.log(`newValue=${newValue}, name=${name}`);
        const action = updateLoginField(newValue, name);
        dispatch(action);
    },
    handleLogin: () => {
        dispatch(logIn());
    },
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(Header);