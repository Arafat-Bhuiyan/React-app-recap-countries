import { useEffect } from "react"
import { useState } from "react"
import Country from "./country/country";

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
        {
            countries.map(country => <Country country={country} ></Country>)
        }
        </>
    )
} 

export default Countries