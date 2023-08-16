import {useState} from 'react';

function CalcList(props) {
	
	return (
		<li className="list-group-item my-1">
			{props.expression}
			<strong>{props.result}</strong>
		</li>	
	);
}

export default CalcList