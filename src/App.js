import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import Prostorije from "./components/Prostorije";
import Rezervacije from "./components/Rezervacije";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {

  const prostorije = [
    {
      id: 1,
      description:
        "Uvek prijatna i topla atmosfera",
      image: "images/5.jpg"
    },
    {
      id: 2,
      description:
        "Bajkovita basta.",
      image: "images/6.jpg"
    },
    {
      id: 3,
      description:
        "Veliki izbor raznovrsnih jela i pića.",
      image: "images/7.jpg"
    },
    {
      id: 4,
      description:
        "Organizacija raznih vrsta proslava.",
      image: "images/8.jpg"
    },
  ];

  return (
    <BrowserRouter className="App">
      <NavBar />
      <Routes>
      <Route
          path="/"
          element={<Prostorije prostorije={prostorije}/>}
        />
        <Route path="/rezervacije" element={<Rezervacije />} />
      </Routes>
      <Footer />
      
    </BrowserRouter>
   
  );
}

export default App;
