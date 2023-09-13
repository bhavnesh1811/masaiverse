import Outcomes from "./Components/Outcomes/Outcomes";
import Banner from "./Components/Banner";
import Certification from "./Components/Certification";
import Course from "./Components/Course";
import Footer from "./Components/Footer";
import News from "./Components/News";
import HiringPartner from "./Components/HiringPartner";
import Outcome from "./Components/Outcome";
import ElevateCarrier from "./Components/ElevateCarrier";
import Curriculum from "./Components/Curriculum";
import Carousel from "./Components/Carousel";
import Navbar from "./Components/Navbar/Navbar";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Outcome />
      <Outcomes/>
      <Course />
      <Curriculum />
      <Carousel />
      <Certification />
      <ElevateCarrier />
      <HiringPartner />
      <News />
      <Footer />
    </div>
  );
}


     


export default App;
