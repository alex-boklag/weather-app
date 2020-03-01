import React from 'react';
import './TextField.css';

export const TextField = ({
	textFieldValue,
	cityIsFound,
	handleInputChange,
	handleButtonClick
}) => {
	return (
		<section className="text-field-section">
			<label htmlFor="city-name-field">Enter city name</label>
			<br />
			<input
				id="city-name-field"
				type="text"
				value={textFieldValue}
				onChange={ev => handleInputChange(ev.target.value)}
				onKeyPress={ev => ev.key === 'Enter' && handleButtonClick()}
			/>
			<button
				disabled={textFieldValue.length === 0 ? true : false}
				onClick={() => handleButtonClick()}
			>
				Show
			</button>
			<br />
			{!cityIsFound && <span className="errorMessage">The city isn't found!</span>}
		</section>
	);
};
