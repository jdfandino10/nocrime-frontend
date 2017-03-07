import React from 'react';

const ReportedSelector = (props) => (
	<div>
		<label>{props.title}</label>
		<div>
			{props.options.map(option => {
				return (
					<label key={option}>
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

ReportedSelector.propTypes = {
	title: React.PropTypes.string.isRequired,
	type: React.PropTypes.oneOf(['checkbox', 'radio']).isRequired,
	setName: React.PropTypes.string.isRequired,
	options: React.PropTypes.array.isRequired,
	selectedOptions: React.PropTypes.array,
	controlFunc: React.PropTypes.func.isRequired
};

export default ReportedSelector;
//Ordenado, cort, concreto. Bueno especificar los tipos de los atributos props
