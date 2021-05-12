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
				<Link to={"/"} id="home-btn">
					<Text as="h4" size="l" color="letterColor1" weight="mulishMedium">
						FeelingScrypt
					</Text>
				</Link>
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
