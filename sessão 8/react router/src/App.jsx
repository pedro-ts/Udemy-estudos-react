import "./App.css";
// 1 - config react router
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// 2 - import pages
import Home from "./pages/home/Home";
import About from "./pages/about/About";
import Product from "./pages/product/Product";
import Info from "./pages/info/Info";
import NotFound from "./pages/notFound/NotFound";
// 3- import elementos que contém itens do react router
import Navbar from "./components/Navbar/Navbar";
import SearchForm from "./components/SearchForm/SearchForm";
import Search from "./pages/Search/Search";

function App() {
  return (
    <>
      <h1>React Router</h1>
      {/* Esse elemento/componente não contem nada do react router por isso está fora da tag BrowsweRouter */}
      <BrowserRouter>
        <Navbar />
        {/* A navbar aparecerá em todas as páginas mas está sendo colocada dentro da tag BrowserRouter pois ela contém elementos do react router */}
        {/* 9 - search */}
        <SearchForm/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/products/:id/info" element={<Info/>} />
          <Route path="/search" element={<Search/>} />
          {/* Redirect */}
          <Route path="/company" element={<Navigate to="/about"/>} />
          <Route path="*" element={<NotFound/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
