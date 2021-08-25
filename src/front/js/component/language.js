import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";


const animatedComponents = makeAnimated();

export function Language() {
	return (
		<Select
			closeMenuOnSelect={false}
			components={animatedComponents}
			isMulti
			options={languageOptions}
			className="fontColor"
		/>
	);
}
