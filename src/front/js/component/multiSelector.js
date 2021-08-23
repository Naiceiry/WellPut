import React from "react";

import Select from "react-select";
import makeAnimated from "react-select/animated";

const animatedComponents = makeAnimated();


export function AnimatedMulti(selectOptions) {
	return (
		<Select
			closeMenuOnSelect={false}
			components={animatedComponents}
			isMulti
			options={selectOptions.options}
			className="fontColor"
			onChange={e => selectOptions.change(e)}
		/>
	);
}
