// import "./App.css";

import ShoppingCartProvider from "./Context/ShoppingCartContext";
import { Route, Routes, BrowserRouter as Router } from "react-router-dom";
import CartPage from "./components/main/CartPage";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <ShoppingCartProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/CartPage" element={<CartPage />} />
          </Routes>
        </Router>
      </ShoppingCartProvider>
    </div>
  );
}

export default App;
