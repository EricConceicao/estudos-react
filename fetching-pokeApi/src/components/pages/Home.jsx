import {Link} from 'react-router-dom';
import Header from '../layouts/Header.jsx';

import './Home.css';

import oran from '../../assets/oran.png';
import espurr from '../../assets/espurr.png';
import pokeball from '../../assets/pokeball.png';

function Home() {
    return (
        <div className="Home">
            <Header>
                <h1 className="display-1">Welcome!<br /><small>Select a tool to use PokéApi.</small></h1>
            </Header>

            <nav className="d-flex gap-5 text-center py-5 bg-danger">
                <Link to="/pokemon">
                    <figure>
                        <img className="img-thumbnail" 
                            src={espurr} alt="Image link to pokemon description page" role="link" />
                        <figcaption>Pokémon's Description</figcaption>
                    </figure>
                </Link>

                <Link to="/berry">
                    <figure>
                        <img className="img-thumbnail" 
                            src={oran} alt="Image link to berry description page" role="link" />
                        <figcaption>Berry information</figcaption>
                    </figure>
                </Link>

                <Link to="/teams">
                    <figure>
                        <img className="img-thumbnail" 
                            src={pokeball} alt="Image link to team builder page" role="link" />
                        <figcaption>Team Builder</figcaption>
                    </figure>
                </Link>
            </nav>
        </div>
    );
}

export default Home