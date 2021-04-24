import React, { useState, useEffect} from 'react';

const UniversitySelector = (({countries, onCountrySelected}) => {

    const handleChange = event => {
        onCountrySelected(event.target.value)
      }

    const CountryOptions = countries.map((country, index) => {
        return <option value={index} key={index}>{country.country}</option>
    })
  
    return (
<>

 <br/>
 <br/>
<select defaultValue="" onChange={handleChange}>
        <option value="" disabled>Select University:</option>
        {countries.map(country => {
          return (
           <option key={country.alpha_two_code} value={country.alpha_two_code}>{country.name}</option>
          )

        })}
      </select>
      

</>
    )
});


  
  export default UniversitySelector;