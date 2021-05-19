import React, { Component } from "react";
import { Link } from "react-router-dom";
import { withAuth } from "./../../context/auth.context";
import Text from "../text";
import SCNavbar from "./Navbar.styled";

class Navbar extends Component {
	render() {
		const { user, logout, isLoggedIn } = this.props;
		return (
			<SCNavbar className="navbar">
				<div id="home-btn">
					<Link to={"/"}>
					<img src="https://res.cloudinary.com/dkevcmz3i/image/upload/v1621436436/Feeling-Crypto/resources/heart-logo_vzn49g.webp" alt="brand-icon" id="brand-icon"></img>
						<Text as="h1" size="ml" color="letterColor1" weight="mulishSemiBold" id="brand-label">
							FeelingCrypto
						</Text>
					</Link>
				</div>
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
