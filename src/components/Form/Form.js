import React from "react";
import Text from "../text";

export default function Form(props) {
	const { fields, errors } = props.state;
	const keys = Object.keys(fields);
	const values = Object.values(fields);
	return (
		<form id="form" onSubmit={props.handleFormSubmit}>
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
						{errors[el] && <Text >{errors[el]}</Text>}
					</div>
				);
			})}
			<input id="form-btn" type="submit" value="Login" />
		</form>
	);
}
