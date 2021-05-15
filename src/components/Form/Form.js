import React from "react";
import FormButton from "../FormButton/FormButton";
import Text from "../text";
import SCForm from "./Form.styled";

export default function Form(props) {
	const { fields, errors } = props.state;
	const keys = Object.keys(fields);
	const values = Object.values(fields);	
	return (
		<SCForm id="form" onSubmit={props.handleFormSubmit} noValidate>
			{keys.map((el, i) => {
				return (
					<div className="form-group" key={el}>
						<label className="form-label" htmlFor={`${el}-input`}>
							<Text size="m">Introduce your {el}</Text>
						</label>
						<input
							className="form-input"
							id={`${el}-input`}
							aria-describedby={`${el}Help`}
							type={el}
							name={el}
							value={values[i]}
							onChange={props.handleChange}
							autoComplete="current-password"
						></input>
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
