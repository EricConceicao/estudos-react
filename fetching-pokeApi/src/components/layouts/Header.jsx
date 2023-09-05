import {NavLink} from 'react-router-dom';

import './Header.css';

function Header({children}) {
	return (
		<header className="bg-danger">
			{children}
		</header>
	);
}

export default Header