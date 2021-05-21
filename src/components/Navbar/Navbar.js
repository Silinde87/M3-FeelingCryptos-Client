import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth.context";
import Text from "../text";
import SCNavbar from "./Navbar.styled";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import DarkModeToggle from "react-dark-mode-toggle";

class Navbar extends Component {
	render() {
		const { user, logout, isLoggedIn, toggleTheme,isDarkMode } = this.props;
		return (
			<SCNavbar className="navbar">
				<div id="home-btn">
					<Link to={"/"}>
						
						<Text as="h1" size="ml" color="letterColor1" weight="mulishSemiBold" id="brand-label">
							Feeling<FavoriteBorderIcon id="heart-icon"/>Crypto
						</Text>
					</Link>
				</div>
				<DarkModeToggle
					id="dark-mode-toggle"
					onChange={toggleTheme}
					checked={isDarkMode}
					size={80}
				/>				
				{isLoggedIn ? (
					<div className="logged-user-box">
						<Link to="/private">
							<img id="avatar" src={user.photo} alt="avatar"></img>
							<Text id="username" size="m" weight="mulishMedium">
								{user && user.username}
							</Text>
						</Link>
						<Text id="logout-text" size="m" weight="mulishMedium">
							|
						</Text>
						<Text id="logout-text" size="m" weight="mulishMedium" onClick={logout}>
							Logout
						</Text>
					</div>
				) : (
					<div className="login-box">
						<Link to="/login">
							<Text size="m" weight="mulishMedium">
								Login
							</Text>
						</Link>
						<Text size="m" weight="mulishMedium">
							|
						</Text>
						<Link to="/signup">
							<Text size="m" weight="mulishMedium">
								Sign Up
							</Text>
						</Link>
					</div>
				)}
			</SCNavbar>
		);
	}
}

export default withAuth(Navbar);
