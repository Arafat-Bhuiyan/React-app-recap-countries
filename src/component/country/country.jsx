import { useState } from 'react';
import './country.css'
const Country = ({country}) => {
    const {name, flags, population, area} = country;

    const [visited, setVisited] = useState(false);
    const handleVisited =  () => {
        setVisited(!visited);
    }
    return (
        <div className='country'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {country.cca3}</small></p>
            <button onClick={handleVisited}>{visited ? 'Visited' : 'Going'}</button>
            {visited ? " I've visited this country" : " I want to go there"}
        </div>
    );
};

export default Country;