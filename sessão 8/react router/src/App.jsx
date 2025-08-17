import "./App.css";
// 1 - config react router
import { BrowserRouter, Routes, Route } from "react-router-dom";
// 2 - import pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
// 3- import elementos que contém itens do react router
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <h1>React Router</h1>{" "}
      {/* Esse elemento/componente não contem nada do react router por isso está fora da tag BrowsweRouter */}
      <BrowserRouter>
        <Navbar />
        {/* A navbar aparecerá em todas as páginas mas está sendo colocada dentro da tag BrowserRouter pois ela contém elementos do react router */}
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
