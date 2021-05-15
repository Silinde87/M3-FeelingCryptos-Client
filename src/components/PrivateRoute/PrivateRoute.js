import React from 'react'
import { Route, Redirect } from 'react-router-dom';
import { withAuth } from './../../context/auth.context';

// Route that forbids access to a user who is not logged in

function PrivateRoute (routeProps) {
  // Value coming from `AuthProvider` ( via `withAuth` )
  const { isLoggedIn, isLoading } = routeProps;

  // Values coming from the PrivateRoute itself
  const ComponentToShow = routeProps.component;
  const { exact, path } = routeProps;

  // If AuthProvider is still making request to check the user
  if (isLoading) return 'Loading';

  return (
    <Route
      exact={exact}
      path={path}
      render={
        function(props) {
          if (! isLoggedIn) return <Redirect to="/login" />;
          else if (isLoggedIn) return <ComponentToShow {...props} />;
        }
      }
     />
    )
}


export default withAuth(PrivateRoute);


/* 
// Concise way
function PrivateRoute({ component: Component, isLoggedIn, ...rest }) {
  return (
   <Route
    {...rest}
    render={ (props)  => isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />}
   /> 
)} 
*/
