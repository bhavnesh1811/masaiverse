import Banner from './Components/Banner';
import Course from './Components/Course';
import News from './Components/News';
import Outcome from './Components/Outcome';
import Outcomes from "./Components/Outcomes/Outcomes";

function App() {
  return (
    <div className="App">
      <Banner/>
      <Outcome/>
      <Outcomes/>
      <Course/>
      <News/>
    </div>
  );
}

export default App;


