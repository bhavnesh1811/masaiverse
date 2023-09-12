import './App.css';
import Banner from './Components/Banner';
import Course from './Components/Course';
import News from './Components/News';
import Outcome from './Components/Outcome';

function App() {
  return (
    <div className="App">
      <Banner/>
      <Outcome/>
      <Course/>
      <News/>
    </div>
  );
}

export default App;
