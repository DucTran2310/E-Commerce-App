import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

const App = () => {

  const user = true;

  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/products/:category" index element={<ProductList />} />
        <Route path="/product/:id" index element={<Product />} />
        <Route path="/cart" index element={<Cart />} />
        <Route path="/login" index element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" index element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
