import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import OneProduct from "./pages/OneProduct";
import Cart from "./pages/Cart";
import NavBar from "./components/NavBar";

import "./App.css";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Router>
        <div className="app">
          <NavBar />
          <main className="main">
            <div className="container">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/:id" element={<OneProduct />} />
                <Route path="/cart" element={<Cart />} />
              </Routes>
            </div>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
