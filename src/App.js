import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Header from "./components/header/Header";
import Products from "./components/pages/Products";
import SingleProduct from "./components/pages/SingleProduct";
import Cart from "./components/pages/Cart";
import Error from "./components/pages/Error";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
      <Header />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/singleproduct/:id" element={<SingleProduct />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
