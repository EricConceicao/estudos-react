import {NavLink} from 'react-router-dom';

import './Navigation.css';

function Navigation(props) {
	return (
		<nav className="nav bg-danger p-2">
            <NavLink to="/berry" className="nav-link">Berry Search</NavLink>
            <NavLink to="/pokemon" className="nav-link">Pokémon Description</NavLink>
            <NavLink to="/teams" className="nav-link"> Team Builder</NavLink>
        </nav>
	);
}

export default Navigation