import React from 'react';

const CrimeSelector = (props) => (
	<div>
		<label className="panelField-content">{props.title}</label>
		<div >
			{props.options.map(option => {
				return (
					<label key={option} className="checkbox-inline">
						<input
							name={props.setName}
							onChange={props.controlFunc}
							value={option}
							checked={props.selectedOptions.indexOf(option) > -1}
							type={props.type} /> {option}
					</label>
				);
			})}
		</div>
	</div>
);

CrimeSelector.propTypes = {
	title: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOptions: React.PropTypes.array,
	controlFunc: React.PropTypes.func.isRequired
};

export default CrimeSelector;
//Ordenado, cort, concreto. Bueno especificar los tipos de los atributos props