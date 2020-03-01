import React from 'react';
import './DynamicallyTable.css';

export const DynamicallyTable = ({
	temperature,
	maxTemp,
	minTemp,
	pressure,
	humidity,
	visibility,
	list
}) => {
	const renderHeader = () => {
		return (
			<thead>
				<tr>
					<th>Date/Time</th>
					{temperature && <th>Temperature</th>}
					{maxTemp && <th>Max Temp.</th>}
					{minTemp && <th>Min Temp.</th>}
					{pressure && <th>Pressure</th>}
					{humidity && <th>Humidity</th>}
					{visibility && <th>Visibility</th>}
				</tr>
			</thead>
		);
	};
	const renderRow = (item, index) => {
		return (
			<tr key={index} className={`${index % 2 === 1 ? 'bg-light-gray' : 'bg-white'}`}>
				<td>
					{item.dt_txt} ({item.weather[0].description})
				</td>
				{temperature && <td>{item.main.temp}</td>}
				{maxTemp && <td>{item.main.temp_max}</td>}
				{minTemp && <td>{item.main.temp_min}</td>}
				{pressure && <td>{item.main.pressure}</td>}
				{humidity && <td>{item.main.humidity}</td>}
				{visibility && <td>some value</td>}
			</tr>
		);
	};

	return (
		<section className="dynamically-table-section">
			<table className="weather-table">
				{renderHeader()}
				<tbody>{list.map((item, index) => renderRow(item, index))}</tbody>
			</table>
		</section>
	);
};
