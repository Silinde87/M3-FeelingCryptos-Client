import React from 'react';
import authService from '../services/auth.service';
import privateService from '../services/private.service'

const { Consumer, Provider } = React.createContext();


class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null
  }

  async componentDidMount(){
    try {
      const result = await authService.loggedIn();
      if(result){
        this.setState({ isLoggedIn: true, isLoading: false, user: result.data });
      }
    } catch(err){
      this.setState({ isLoggedIn: false, isLoading: false, user: null });
    }
  }

  signup = (data) => {
    authService.signup(data)
      .then((response) => this.setState({ isLoggedIn: true, user: response.data }) )
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      })
  }

  login = (data) => {
    return authService.login(data)
      .then((response) => this.setState({ isLoggedIn: true, user: response.data }))
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
        throw new Error();
      })
  }

  logout = () => {
    authService.logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((err) => console.error(err));
  }

  edit = (data) => {
    return authService.edit(data)
      .then(response => this.setState({ ...this.state, user: response.data}))
      .catch(error => {
        console.error(error);
        throw new Error();
      })
  }

  twitter = () => {
    window.open(`${process.env.REACT_APP_API_URL}/auth/twitter`, '_self');
  }

  addFavoritesCryptos = ( data ) => {
    privateService.add(data)
    .then(response => this.setState({ ...this.state, user: response.data}))
    .catch(error => console.error(error));
  }

  deleteFavoritesCryptos = ( data ) => {
    privateService.delete(data)
    .then(response => {
      this.setState({ ...this.state, user: response.data})
    })
    .catch(error => console.error(error));
  }

  render() {
    const { isLoggedIn, isLoading, user } = this.state;
    const { signup, login, logout, edit, twitter, addFavoritesCryptos, deleteFavoritesCryptos } = this;

    if (isLoading) return <p>Loading</p>;

    return(
      <Provider value={{ isLoggedIn, isLoading, user, signup, login, logout, edit, twitter, addFavoritesCryptos, deleteFavoritesCryptos }}  >
        {this.props.children}
      </Provider>
    )
  }

}

// HOC that converts regular component into a Consumer
const withAuth = (WrappedComponent) => {
  
  return function (props) {
      return(
        <Consumer>
          { (value) => {
            const { isLoggedIn, isLoading, user, signup, login, logout, edit, twitter, addFavoritesCryptos, deleteFavoritesCryptos } = value;

            return (
              <WrappedComponent 
                isLoggedIn={isLoggedIn} 
                isLoading={isLoading} 
                user={user} 
                signup={signup} 
                login={login} 
                logout={logout}
                edit={edit}
                twitter={twitter}
                addFavoritesCryptos={addFavoritesCryptos}
                deleteFavoritesCryptos={deleteFavoritesCryptos}
                {...props}
              />
            )

          } }
        </Consumer>
        )
    }
}


export { AuthProvider, withAuth }