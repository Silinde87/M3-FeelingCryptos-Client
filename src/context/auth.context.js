import React from 'react';
import authService from '../services/auth.service';

const { Consumer, Provider } = React.createContext();


class AuthProvider extends React.Component {
  state = {
    isLoggedIn: false,
    isLoading: true,
    user: null
  }

  async componentDidMount(){
    try {
      const result = await this.authService.isLoggedIn();
      if(result){
        console.log(result);
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
    authService.login(data)
      .then((response) => this.setState({ isLoggedIn: true, user: response.data }))
      .catch((err) => {
        this.setState({ isLoggedIn: false, user: null });
      })
  }

  logout = () => {
    authService.logout()
      .then(() => this.setState({ isLoggedIn: false, user: null }))
      .catch((err) => console.log(err));
  }


  render() {
    const { isLoggedIn, isLoading, user } = this.state;
    const { signup, login, logout } = this;

    if (isLoading) return <p>Loading</p>;

    return(
      <Provider value={{ isLoggedIn, isLoading, user, signup, login, logout }}  >
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
            const { isLoggedIn, isLoading, user, signup, login, logout } = value;

            return (
              <WrappedComponent 
                isLoggedIn={isLoggedIn} 
                isLoading={isLoading} 
                user={user} 
                signup={signup} 
                login={login} 
                logout={logout}
                {...props}
              />
            )

          } }
        </Consumer>
        )
    }
}


export { AuthProvider, withAuth }