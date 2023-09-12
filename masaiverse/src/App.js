import Banner from "./Components/Banner";
import Certification from "./Components/Certification";
import Course from "./Components/Course";
import Footer from "./Components/Footer";
import Navbar from "./Components/NavBar";
import News from "./Components/News";
import HiringPartner from "./Components/HiringPartner";
import Outcome from "./Components/Outcome";
import ElevateCarrier from "./Components/ElevateCarrier";
import Curriculum from "./Components/Curriculum";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <Outcome />
      <Course />
      <Curriculum />
      <Certification />
      <ElevateCarrier />
      <HiringPartner />
      <News />
      <Footer />
    </div>
  );
}
export default App;
