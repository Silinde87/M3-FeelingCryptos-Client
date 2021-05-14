import React, { Component } from "react";
import Form from "../../components/Form/Form";
import { withAuth } from "../../context/auth.context";
import Text from "../../components/text";
import { Link } from "react-router-dom";

const EMAIL_PATTERN =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

//Fields validators
const validators = {
	email: (value) => {
		let message;
		if (!value) {
			message = "Email is required";
		} else if (!EMAIL_PATTERN.test(value)) {
			message = "Invalid email";
		}
		return message;
	},
	password: (value) => {
		let message;
		if (!value) {
			message = "Password is required";
		} else if (value.length < 6) {
			message = "Invalid password";
		}
		return message;
	},
};

class Login extends Component {
	state = {
		fields: {
			email: "",
			password: "",
		},
		errors: {
			email: null,
			password: null,
		},
		errorOnSubmit: false,
	};

	//This method handles the form submit. Changes the state if there is an error validation.
	handleFormSubmit = (event) => {
		event.preventDefault();
		const { email, password } = this.state.fields;
		if (this.isValid()) {
			// Call function coming from AuthProvider ( via withAuth )
			this.props.login({ email, password });
			if (!this.props.isLoggedIn) { //TODO: Wait until this.props.login ends. This is sowing errorOnSubmit before login validates
				this.setState({ errorOnSubmit: true });
			}
		}
	};

	//This method handles the input changes
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			fields: {
				...this.state.fields,
				[name]: value,
			},
			errors: {
				...this.state.errors,
				[name]: validators[name](value),
			},
		});
	};

	//Returns if there is an error on any input
	isValid() {
		const { errors } = this.state;
		return !Object.keys(errors).some((key) => errors[key] !== undefined);
	}

	render() {
		return (
			<section id="form-container" style={{ maxWidth: "500px" }}>
				<Text id="form-title" as="h2" size="l" weight="mulishRegular" style={{ textAlign: "center" }}>
					Log in to FeelingCrypto
				</Text>
				<Form
					handleFormSubmit={(e) => this.handleFormSubmit(e)}
					handleChange={(e) => this.handleChange(e)}
					state={this.state}
					isValid={this.isValid}
					textButton={"Login"}
				/>
				<Text className="form-already-label" size="s">
					Not a member?{" "}
					<Link to="/signup" style={{ color: `#53B9EA` }}>
						Sign up
					</Link>
				</Text>
				{this.state.errorOnSubmit && (
					<Text color="lettersColorRed" style={{ textAlign: "center", marginTop: "10px" }}>
						Wrong e-mail or password, please try again.
					</Text>
				)}
			</section>
		);
	}
}

export default withAuth(Login);
