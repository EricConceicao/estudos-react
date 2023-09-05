import {useState} from 'react';

// Component imports
import Header from '../layouts/Header.jsx';
import Navigation from '../layouts/Navigation.jsx';
import Search from '../layouts/Search.jsx';

function Berry() {

    const [berryData, setBerryData] = useState({});
    const [name, setName] = useState('');

    // link https://pokeapi.co/api/v2/berry/{id or name}/
    async function fetchBerry(e) {
        e.preventDefault();

        const data = await fetch(`https://pokeapi.co/api/v2/berry/${name}`);
        setBerryData(await data.json());
        console.log(berryData)
    }

    return (
        <>
            <Header>
                <h1 className="display-1">Berries information</h1>
            </Header>  

            <Navigation />  

            <Search 
                type="text" 
                label="Type the name of the berry that you want to search" 
                onChange={setName} 
                pHolder="leppa"
                bText="Search" 
                onSubmit={fetchBerry} />

            {Object.keys(berryData).length > 0 &&
                <div className="Berry container">
                    <h1>{berryData.item.name}</h1>

                    <button className="btn btn-primary" onClick={fetchBerry}>Teste</button>
                </div>
            }
        </>
    );
}

export default Berry