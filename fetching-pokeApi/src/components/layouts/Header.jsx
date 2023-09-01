import {NavLink} from 'react-router-dom';

import './Header.css';

function Header({children}) {
	return (
		<header className="bg-danger">
			{children}
			<nav className="nav">
                <NavLink to="/berry" className="nav-link">Berry Search</NavLink>
                <NavLink to="/pokemon" className="nav-link">Pokémon Description</NavLink>
                <NavLink to="/teams" className="nav-link"> Team Builder</NavLink>
            </nav>
		</header>
	);
}

export default Header