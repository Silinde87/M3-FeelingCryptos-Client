import React, { Component } from "react";
import Form from "../../components/Form/Form";
import { withAuth } from "../../context/auth.context";
import Text from "../../components/text";
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
	};

	handleFormSubmit = (event) => {
		event.preventDefault();
		const { email, password } = this.state.fields;
		// Call function coming from AuthProvider ( via withAuth )
		this.props.login({ email, password });
	};

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

	render() {
		return (
			<section id="form-container">
				<Text id="form-title" as="h2" size="l" weight="mulishRegular" style={{"text-align":"center"}}>
					Log in to FeelingCrypto
				</Text>
				<Form
					handleFormSubmit={(e) => this.handleFormSubmit(e)}
					handleChange={(e) => this.handleChange(e)}
					state={this.state}
				/>
			</section>
		);
	}
}

export default withAuth(Login);
