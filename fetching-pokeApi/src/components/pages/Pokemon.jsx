// Library imports
import {useState} from 'react';

// Component imports
import Header from '../layouts/Header.jsx';
import Search from '../layouts/Search.jsx'; 
import Figure from '../layouts/Figure.jsx';
import Navigation from '../layouts/Navigation.jsx';

// Fetching function for obtaining pokeAPI data

function Pokemon() {

    const [name, setName] = useState('');
    const [data, setData] = useState({});

    // Function for fetching pokeAPI data
    async function fetchPokemon(e) {
        e.preventDefault();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        const res = await response.json(); 
        const pokeData = res;

        const dexData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeData.id}`);
        const {flavor_text_entries} = await dexData.json()

        // A filter to obtain only pokedex entries in english
        const description = flavor_text_entries.filter(text => {
            if (text.language.name === 'en') {
               return text 
            } 
        });
        // To pick the most newer entry to use
        const pokedexEntry = description[description.length - 1];

        setData({...pokeData, pokedexEntry});
    }

    return (
        <>  
            <Header>
                <h1 className="display-1">Mini Pokédex</h1> 
            </Header>

            <Navigation />

            <Search 
                type="text" 
                label="Type the name of the pokémon that you want to search" 
                onChange={setName} 
                pHolder="ditto..."
                bText="Search" 
                onSubmit={fetchPokemon} />

            <div className="Pokemon container">
                
                {Object.keys(data).length > 0 &&
                    <>
                        <div style={{backgroundColor: '#ddd'}} className="p-3 my-3 border-bottom border-2 border-dark rounded-3">
                            <Figure
                            imgSrc={data.sprites.front_default}
                            imgName={data.name} />

                            <h2 style={{textTransform: "capitalize"}}>{data.types?.map(poke => poke.type.name + ' ')}</h2>
                            <p>{data.pokedexEntry?.flavor_text}</p>
                        </div>

                        <table className="table table-primary table-striped table-bordered border-white table-responsive rounded">
                            <thead>
                                <tr>
                                    <th>Attribute</th>
                                    <th>Value</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row"><abbr className="initialism" title="Health Points">HP</abbr></th>
                                    <td>{data.stats[0].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Attack</th>
                                    <td>{data.stats[1].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Defense</th>
                                    <td>{data.stats[2].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sp-Attack</th>
                                    <td>{data.stats[3].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Sp-Defense</th>
                                    <td>{data.stats[4].base_stat}</td>
                                </tr>
                                <tr>
                                    <th scope="row">Speed</th>
                                    <td>{data.stats[5].base_stat}</td>
                                </tr>
                            </tbody>
                        </table>
                    </>
                }
            </div>
        </>
    );
}

export default Pokemon