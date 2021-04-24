import React from "react";
import UniversitySelector from "./UniversitySelector";
import ShortlistUniversity from './ShortlistUniversity';
import TopUniversities from './TopUniversities';
import './University.css';


const University = ({ country, onAddToShortlist }) => {

    if (!country) {
      return null
    }
    const handleClick = () => {
        onAddToShortlist(country.alpha_two_code)
      }

    return(
        <div className='university-list'>
       <h2>University details:</h2>
        <ul>
             { country.name } 
            <p>Country: { country.country }</p>
            <a href={country.web_pages}>Check out more details</a>
        </ul>
        <br/>
        <button onClick={handleClick}>Add to shortlist</button>
        <h3>Short List:</h3>
      <br/>
      
        </div>
    )
}
    export default University;
        