import { useEffect } from "react"
import { useState } from "react"
import Country from "./country/country";
import './country/country'

const Countries = () => {
    const [countries, setCountries] = useState([]);
    useEffect(()  => {
        fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => setCountries(data))
    }, [])
    return (
        <>
        <h3>Countries: {countries.length}</h3>
        <div className="country-container">
        {
            countries.map(country => <Country key={country.ccn3} country={country} ></Country>)
        }
        </div>       
        </>
    )
} 

export default Countries