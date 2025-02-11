

import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import Header from "./components/Header";
import "./styles/App.scss";
import "./styles/Header.scss";
import "./styles/footer.scss";
import "./styles/home.scss";
import "./styles/contact.scss";
import "./styles/services.scss";
import Home from "./components/Home";
import Footer from "./components/Footer";
import Contact from"./components/Contact";
import Services from"./components/Services";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path ="/" element={<Home/>}></Route>
        <Route path ="/contact" element={<Contact/>}></Route>
        <Route path ="/services" element={<Services/>}></Route>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;


