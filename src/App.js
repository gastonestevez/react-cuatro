import './App.css';
import { setLogout, setLoggedUser } from './redux/reducers/loginReducer'
import { connect } from 'react-redux'

/*
  Como accedo al store?
  Como muestro datos del store.
  Como "dispatcheo" una accion? (logout) / (login) / (Cargar usuarios)

*/
function App(props) {
  const handleLogOut = () => {
    props.logout()
  }

  const handleLogIn = () => {
    const user = {
      username: 'Gastón',
      token: 'asdf-qwert-uiop',
      email: 'gaston@asdf.com'
    }
    props.login(user)
  }

  return (
    <div className="App">
      {
        props.loginReducer.loggedIn ? (
          <>
            <p>User logged in: {props.loginReducer.username}</p>
            <p>Email: {props.loginReducer.email} </p>
            <p>Token: {props.loginReducer.token} </p>
          </>
        ) : (
          <>
            <p>No hay usuario logeado...</p>
          </>
        )
      }


      <button onClick={() => handleLogOut()}>LOGOUT! :D </button>
      <button onClick={() => handleLogIn()}>LOGIN !!</button>
    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    loginReducer: state.loginReducer
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => dispatch(setLogout()),
    login: (user) => dispatch(setLoggedUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
