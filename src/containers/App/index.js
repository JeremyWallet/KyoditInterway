/* eslint-disable max-len */
import { connect } from 'react-redux';
import App from '../../components/App';

// === mapStateToProps
const mapStateToProps = (state) => ({
    isLogged: state.auth.isLogged,
    username: state.auth.username,
    token: state.auth.token
});

// === mapDispatchToProps
const mapDispatchToProps = (dispatch) => ({
});

// === création de l'assistant
export default connect(mapStateToProps, mapDispatchToProps)(App);