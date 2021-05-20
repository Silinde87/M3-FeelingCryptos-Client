import React from "react";
import FormButton from "../FormButton/FormButton";
import Text from "../text";
import SCForm from "./Form.styled";

export default function Form(props) {
	const { fields, errors } = props.state;
	const { editForm } = props;
	const keys = Object.keys(fields);
	const values = Object.values(fields);
	return (
		<SCForm id="form" onSubmit={props.handleFormSubmit} noValidate>
			{keys.map((el, i) => {
				return (
					<div className="form-group" key={el}>
						<label className="form-label" htmlFor={`${el}-input`}>
							{editForm ? (
								<Text size="m">Change your {el}</Text>
							) : (
								<Text size="m">Enter your {el}</Text>
							)}
						</label>
						{el !== "photo" ? (
							<input
								className="form-input"
								id={`${el}-input`}
								aria-describedby={`${el}Help`}
								type={el === "photo" ? "file" : el}
								name={el}
								value={values[i]}
								onChange={props.handleChange}
								autoComplete={el === "password" ? "current-password" : ""}
							></input>
						) : (
							<input
								className="form-input"
								id={`photo-input`}
								aria-describedby={`photoHelp`}
								type={"file"}
								name={el}
								onChange={props.handleChange}
							></input>
						)}
						{errors[el] && (
							<Text className="form-error" color="lettersColorRed">
								{errors[el]}
							</Text>
						)}
					</div>
				);
			})}
			<FormButton disabled={!props.isValid()}>{props.textButton}</FormButton>
		</SCForm>
	);
}
