import React, { useState } from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import themeLight from "./theme";
import themeDark from "./theme-dark";

// Pages
import Home from "./pages/Home/Home";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import Error from "./pages/ErrorPage/ErrorPage";
import Profile from "./pages/Profile/Profile";
// Components
import Navbar from "./components/Navbar/Navbar";
import AnonRoute from "./components/AnonRoute/AnonRoute";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import { useDarkMode } from "./utils/useDarkMode";

function App() {
	const [theme, toggleTheme, isDarkMode] = useDarkMode();

	return (
		<ThemeProvider theme={theme === 'light' ? themeLight : themeDark}>
			<div id="app-container">
				<Navbar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
				<Switch>
					<Route exact path="/" render={(props) => <Home {...props} theme={theme}/>} />
					<AnonRoute exact path="/signup" component={Signup} />
					<AnonRoute exact path="/login" component={Login} />
					<PrivateRoute exact path="/private" component={Profile} />
					<PrivateRoute exact path="/private/edit" component={Profile} />
					<PrivateRoute exact path="/private/feed" component={(props) => <Profile {...props} theme={theme}/>} />
					<PrivateRoute exact path="/private/:market" component={Profile} />
					<Route exact path="/markets/:market" component={Home} />
					<Route path="*" component={Error} />
				</Switch>
			</div>
		</ThemeProvider>
	);
}

export default App;
