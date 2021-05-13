import React from "react";
import FormButton from "../FormButton/FormButton";
import Text from "../text";
import SCForm from "./Form.styled";
import { Link } from "react-router-dom";

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
						></input>
						{errors[el] && (
							<Text className="form-error" color="lettersColorRed">
								{errors[el]}
							</Text>
						)}
					</div>
				);
			})}
			<Text className="form-already-label" size="s">
				Not a member? <Link to="/signup" style={{color:`#53B9EA`}}>Sign up</Link>
			</Text>
			<FormButton disabled={!props.isValid()}>Login</FormButton>
		</SCForm>
	);
}
