// Library imports
import {useState} from 'react';

import './Pokemon.css';

function Pokemon() {

    const [name, setName] = useState('');
    const [data, setData] = useState({});

    async function fetchPokemon(e) {
        e.preventDefault();

        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`);
        const newData = await res.json()
        setData(newData); 

        console.log(newData);
    }

    return (
        <div className="Pokemon container">
            <h1 className="display-1">Digite o nome do pokémon que quer pesquisar!</h1>

            <form onSubmit={fetchPokemon}>
                <input type="text" onChange={(e) => setName(e.target.value)} placeholder="ditto..."/>
                <button className="btn-primary" type="submit">Pesquisar</button>
            </form>

            
                <figure className="border p-2 d-inline-block ">
                    {data && <img clasName="image-thumbnail" src={data?.sprites?.front_default} alt={`Image of ${data?.name}`} />}
                    <figcaption className="display-6">{data?.name}</figcaption>
                </figure>
            
            <h2>
                {data?.types?.map(poke => {
                    return poke.type.name + " ";
                })}
            </h2>
        </div>
    );
}

export default Pokemon