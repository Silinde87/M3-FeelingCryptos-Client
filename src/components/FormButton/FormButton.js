import React from "react";
import SCFormButton from "./FormButton.styled";
import Text from "../text";

export default function FormButton({ disabled, children }) {
	return (
		<SCFormButton disabled={disabled} className="form-btn" type="submit">
			<Text color="white" size="m" weight="mulishRegular">
				{children}
			</Text>
		</SCFormButton>
	);
}
