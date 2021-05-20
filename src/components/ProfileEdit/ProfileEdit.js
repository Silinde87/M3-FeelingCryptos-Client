import React, { Component } from "react";
import Form from "../Form/Form";
import { withAuth } from "../../context/auth.context";
import Text from "../text";
import SCProfileEdit from "./ProfileEdit.styled";
import Credits from "../Credits/Credits";

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
	},
	photo: (value) => {
		let message;
		if(!value) {
			message = 'Photo is required';
		}
		return message;
	}
};

class ProfileEdit extends Component {
	state = {
		fields: {
			username: this.props.user.username,
			email: this.props.user.email,
			photo: null,
		},
		errors: {
			username: null,
			email: null,
			photo: null,
		},
		submitSuccessful: false,
		errorOnSubmit: false
	};

	//This method handles the form submit. Changes the state if there is an error validation.
	handleFormSubmit = (event) => {
		event.preventDefault();
		const uploadData = new FormData();
		Object.keys(this.state.fields).forEach(key => {
			uploadData.append(key, this.state.fields[key]);
		})
		if (this.isValid()) {
			// Call function coming from AuthProvider ( via withAuth )
            this.props.edit(uploadData)
				.then(() => {
					this.setState({ submitSuccessful: true });
				})
				.catch(() => {
					this.setState({ submitSuccessful: false });
					this.setState({ errorOnSubmit: true });
				})
			//Render update succesful
			setTimeout(() => {
				this.setState({ submitSuccessful: false });
				this.setState({ errorOnSubmit: false });
			}, 2000);
		}
	};

	//This method handles the input changes
	handleChange = (event) => {
		const { name, value, type, files } = event.target;
		this.setState({
			fields: {
				...this.state.fields,
				[name]: type === 'file' ? files[0] : value
			},
			errors: {
				...this.state.errors,
				[name]: type === 'file' ? validators[name](files[0]) : validators[name](value)
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
			<SCProfileEdit id="profile-edit-container">
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
							editForm
						/>
						{this.state.submitSuccessful && (
							<Text color="lettersColor1" style={{ textAlign: "center", marginTop: "10px" }}>
								Succesfully updated
							</Text>
						)}
						{this.state.errorOnSubmit && (
							<Text color="lettersColorRed" style={{ textAlign: "center", marginTop: "10px" }}>
								User already exists. Can't update.
							</Text>
						)}
						<Text id="recover-label" size="s" weight="mulishLight">
							Recover password
						</Text>
					</div>
					<img id="profile-pic" src={this.props.user.photo} alt=""></img>
				</div>
				<Credits />
			</SCProfileEdit>
		);
	}
}

export default withAuth(ProfileEdit);
