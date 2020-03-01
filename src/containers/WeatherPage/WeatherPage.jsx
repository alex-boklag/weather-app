import React, { useState, useEffect } from 'react';
import { TextField } from '../../components/TextField';
import { CityInfo } from '../../components/CityInfo';
import { MultipleSelect } from '../../components/MultipleSelect';
import { DynamicallyTable } from '../../components/DynamicallyTable';
import { Switcher } from '../../components/Switcher';
import './WeatherPage.css';

export const WeatherPage = () => {
	const [weatherData, setWeatherData] = useState(null);
	const [cityName, setCityName] = useState('Dnipro');
	const [textFieldValue, setTextFieldValue] = useState('');
	const [cityIsFound, setCityIsFound] = useState(true);
	const [units, setUnits] = useState('imperial');
	const [multipleSelectState, setMultipleSelectState] = useState({
		temperature: true,
		maxTemp: true,
		minTemp: true,
		pressure: true,
		humidity: true,
		visibility: true
	});

	const api = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&units=${units}&appid=fd4fbed251513a7146e1342278f59ccc`;

	const handleInputChange = value => setTextFieldValue(value);
	const handleButtonClick = () => setCityName(textFieldValue);
	const handleSwitcherChange = value => setUnits(value);
	const handleMultipleSelectChange = type => {
		setMultipleSelectState({
			...multipleSelectState,
			[type]: !multipleSelectState[type]
		});
	};

	useEffect(() => {
		fetch(api)
			.then(response => response.json())
			.then(data => {
				if (data.cod === '200') {
					setWeatherData(data);
					setCityIsFound(true);
					setTextFieldValue('');
				} else {
					setCityIsFound(false);
				}
			})
			.catch(error => {
				setCityIsFound(error);
			});
	}, [cityName, units, api]);

	return (
		weatherData && (
			<article className="container">
				<TextField
					textFieldValue={textFieldValue}
					cityIsFound={cityIsFound}
					handleInputChange={handleInputChange}
					handleButtonClick={handleButtonClick}
				/>
				<CityInfo city={weatherData.city} />
				<Switcher units={units} handleSwitcherChange={handleSwitcherChange} />
				<DynamicallyTable {...multipleSelectState} list={weatherData.list} />
				<MultipleSelect
					{...multipleSelectState}
					handleMultipleSelectChange={handleMultipleSelectChange}
				/>
			</article>
		)
	);
};
