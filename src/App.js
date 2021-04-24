import './App.css';
import TopUniversities from './components/TopUniversities';
import UniversitiesContainer from './containers/UniversitiesContainer';

function App() {
  return (
    <>
    <div className='more-universities'>
      <UniversitiesContainer />
      <TopUniversities />
      </div>
      </>
  );
}

export default App;
