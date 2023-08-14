import {useState} from 'react';

function CalcList(props) {
	const [list, setList] = useState([]);
	const newItem = ['1','+','3','=','4'];


	return (
		<ul className='list-unstyled'>
			<li>{newItem}</li>
		</ul>
	);
}

export default CalcList