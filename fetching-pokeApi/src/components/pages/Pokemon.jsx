// Library imports
import {useState} from 'react';

import './Pokemon.css';

function Pokemon() {

    const [name, setName] = useState('');
    const [data, setData] = useState({});

    async function fetchPokemon(e) {
        e.preventDefault();

        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        const res = await response.json(); 
        const pokeData = res;

        const dexData = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokeData.id}`);
        const {flavor_text_entries} = await dexData.json()
        
        const pokedexEntry = flavor_text_entries[0];
        setData({...pokeData, pokedexEntry});
    }

    return (
        <>
            <header className="text-center bg-danger p-2">
               <h1 className="display-1">Mini Pokédex</h1> 
            </header>
            
            <form className="container-fluid bg-info p-1" onSubmit={fetchPokemon}>
                <legend>Type the name of the pokémon that you want to search</legend>
                <input className="p-1 rounded" type="text" onChange={(e) => setName(e.target.value)} placeholder="ditto..."/>
                <button className="btn btn-outline-danger border-3 mx-1" type="submit">Pesquisar</button>
            </form>
            <div className="Pokemon container">
                
                

                {Object.keys(data).length > 0 &&
                    <>
                        <div style={{backgroundColor: '#ddd'}} className="p-3 my-3 border-bottom border-2 border-dark rounded-3">
                            <figure className="border border-2 border-dark rounded-3 bg-info p-2 my-2 d-flex align-items-center gap-1">
                                <img className="bg-white " src={data.sprites.front_default} alt={`Image of ${data.name}`} />
                                <figcaption className="display-6">{data?.name}</figcaption>
                            </figure>
                                
                            <h2>{data.types?.map(poke => poke.type.name + ' ')}</h2>

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