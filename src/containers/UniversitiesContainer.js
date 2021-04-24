import React, { useState, useEffect} from 'react';
import Header from '../components/Header';
import UniversitySelector from '../components/UniversitySelector'
import University from '../components/University'
import ShortlistUniversity from '../components/ShortlistUniversity';
import './UniversityContainer.css';




const UniversitiesContainer = () => {

    const [countries, setCountries] = useState([])
    const [selectedCountryalpha_two_code, setSelectedCountryalpha_two_code] = useState(null);
    const [shortlistUniversity, setShortlistUniversity] = useState([]);
   
    useEffect(() => {
        getCountries()
      }, [])
    
      const getCountries = () => {
        fetch(`http://universities.hipolabs.com/search?name=middle`)
          .then(res => res.json())
          .then(countriesData => setCountries(countriesData))
      }
      const handleCountrySelected = alpha_two_code => {
        setSelectedCountryalpha_two_code(alpha_two_code)
      }

      const handleAddToShortlist = (alpha_two_code) => {
        const university = countries.find(university => university.alpha_two_code === alpha_two_code);
        if (!shortlistUniversity.includes(university)){
            setShortlistUniversity([...shortlistUniversity, university])
        }
      }
    
      const handleRemoveFromShortlist = (alpha_two_code) => {
        const newShortlists = shortlistUniversity.filter(university => {
        return university.alpha_two_code !== alpha_two_code 
        })
        setShortlistUniversity(newShortlists);
      }
      const selectedCountry = countries.find(country => country.alpha_two_code === selectedCountryalpha_two_code)
    return (
        <div className='university-container'>
             <Header title='Top Universities of the World!' />
            
          
            <UniversitySelector countries={countries} onCountrySelected={handleCountrySelected}/>
            
            
            <University country={selectedCountry} onAddToShortlist={handleAddToShortlist}/>
            <ShortlistUniversity countries={shortlistUniversity}  onUniversityRemove={handleRemoveFromShortlist} />
            
        </div>
        
    )
}



export default UniversitiesContainer;