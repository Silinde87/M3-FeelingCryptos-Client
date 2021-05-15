import React, { Component } from "react";
import Form from "../../components/Form/Form";
import { withAuth } from "../../context/auth.context";
import Text from "../../components/text";
import SCEditProfilePage from "./EditProfilePage.styled";

const EMAIL_PATTERN =
	/(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;

//Fields validators
const validators = {
	username: (value) => {
		let message;
		if (!value) {
			message = "Username is required";
		}
		return message;
	},
	email: (value) => {
		let message;
		if (!value) {
			message = "Email is required";
		} else if (!EMAIL_PATTERN.test(value)) {
			message = "Invalid email";
		}
		return message;
	}
};

class EditProfilePage extends Component {
	state = {
		fields: {
			username: this.props.user.username,
			email: this.props.user.email,
		},
		errors: {
			username: null,
			email: null,
		},
		submitSuccessful: false,
	};

	//This method handles the form submit. Changes the state if there is an error validation.
	handleFormSubmit = (event) => {
		event.preventDefault();
		const { username, email } = this.state.fields;
		if (this.isValid()) {
			// Call function coming from AuthProvider ( via withAuth )
            this.props.edit({ username, email });            
			//Render update succesful
			this.setState({ submitSuccessful: true });
			setTimeout(() => {
				this.setState({ submitSuccessful: false });
			}, 1500);
		}
	};

	//This method handles the input changes
	handleChange = (event) => {
		const { name, value } = event.target;
		this.setState({
			fields: {
				...this.state.fields,
				[name]: value
			},
			errors: {
				...this.state.errors,
				[name]: validators[name](value)
			},
		});
	};

	//Returns if there is an error on any input
	isValid() {
		const { errors } = this.state;
		return Object.keys(errors).every((key) => errors[key] == null);
	}

	render() {
		return (
			<SCEditProfilePage id="profile-container">
				<div id="info-container">
					<div id="form-container">
                        <Text id="form-title" as="h2" size="l" weight="mulishRegular" style={{ textAlign: "center" }}>
                            Edit your profile
                        </Text>
						<Form
							handleFormSubmit={(e) => this.handleFormSubmit(e)}
							handleChange={(e) => this.handleChange(e)}
							state={this.state}
							isValid={this.isValid}
							textButton={"Submit"}
						/>
						{this.state.submitSuccessful && (
							<Text color="lettersColor1" style={{ textAlign: "center", marginTop: "10px" }}>
								Succesfully updated
							</Text>
						)}
						<Text id="recover-label" size="s" weight="mulishLight">
							Recover password
						</Text>
					</div>
					<img id="profile-pic" src={this.props.user.photo} alt=""></img>
				</div>
			</SCEditProfilePage>
		);
	}
}

export default withAuth(EditProfilePage);
