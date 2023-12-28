import { Route, Routes } from "react-router-dom";
import Booking from "./Booking/Booking";
import Contact from "./Contact/Contact";
import Home from "./Home/Home";
import Menu from "./Menu/Menu";
import Starters from "./Menu/Starters";
import Breakfast from "./Menu/Breakfast";
import Lunch from "./Menu/Lunch";
import Dinner from "./Menu/Dinner";
import About from "./About/About";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import Review from "./Review/Review";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/booking" element={<Booking />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/menu" element={<Menu />}></Route>
      <Route path="/starters" element={<Starters />}></Route>
      <Route path="/breakfast" element={<Breakfast />}></Route>
      <Route path="/lunch" element={<Lunch/>}></Route>
      <Route path="/review" element={<Review />}></Route>
      <Route path="/dinner" element={<Dinner />}></Route>
      <Route path="/privacypolicy" element={<PrivacyPolicy />}></Route>
    </Routes>
  );
}

export default App;
