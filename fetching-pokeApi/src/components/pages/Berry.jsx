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
        console.log(berryData);
    }

    return (
        <>
            <Header>
                <h1 className="display-1">Berries information</h1>
            </Header>  

            <Navigation />  

            <Search  
                label="Type the name of the berry that you want to search" 
                onChange={setName} 
                pHolder="leppa..."
                bText="Search" 
                onSubmit={fetchBerry} />

            {Object.keys(berryData).length > 0 &&
                <div className="Berry container">
                    <h1>{berryData.item.name}</h1>
                    
                    
                    <h2>Flavor table</h2>
                    <table className="table table-primary table-striped table-bordered border-white rounded">
                        <thead className="table-secondary">
                            <tr>
                                <th scope="col">Flavor</th>
                                <th scope="col">Potency</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th scope="row">Spicy</th>
                                <td>{berryData.flavors[0].potency}</td>
                            </tr>
                            <tr>
                                <th scope="row">Dry</th>
                                <td>{berryData.flavors[1].potency}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sweet</th>
                                <td>{berryData.flavors[2].potency}</td>
                            </tr>
                            <tr>
                                <th scope="row">Bitter</th>
                                <td>{berryData.flavors[3].potency}</td>
                            </tr>
                            <tr>
                                <th scope="row">Sour</th>
                                <td>{berryData.flavors[4].potency}</td>
                            </tr>
                        </tbody>
                    </table>

                    <h2>Berry details</h2>
                    <div className="table-responsive text-nowrap">
                        <table className="table table-primary table-striped table-bordered border-white rounded text-center">
                            <thead className="table-secondary">
                                <tr>
                                    <th scope="col">Growth Time</th>
                                    <th scope="col">Max Harvest</th>
                                    <th scope="col">Soil Dryness</th>
                                    <th scope="col">Size</th>
                                    <th scope="col">Smoothness</th>
                                    <th scope="col">Berry Firmness</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{berryData.growth_time}</td>
                                    <td>{berryData.max_harvest}</td>
                                    <td>{berryData.soil_dryness}</td>
                                    <td>{berryData.size}</td>
                                    <td>{berryData.smoothness}</td>
                                    <td>{berryData.firmness.name}</td>
                                </tr>
                            </tbody>
                        </table> 
                    </div>
                </div>
            }
        </>
    );
}

export default Berry