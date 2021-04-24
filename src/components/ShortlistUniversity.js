import TopUniversities from './TopUniversities';

const ShortlistUniversity = ({ countries, onUniversityRemove }) => {

    const handleClick = function(alpha_two_code){
      onUniversityRemove(alpha_two_code);
    }
  
    return (
      <>
        
        
          {countries.map(country => {
            return (
                <div> 
              <ul key={country.alpha_two_code}>
                {country.name}
                <button onClick={() => handleClick(country.alpha_two_code)}>Remove</button>
              </ul>
              
              </div>
              
            )
          })}
        
      </>
    )
  }
  
  export default ShortlistUniversity;