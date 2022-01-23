import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { useSelector } from "react-redux";

import Cart from "./pages/Cart";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Product from "./pages/Product";
import ProductList from "./pages/ProductList";
import Register from "./pages/Register";
import Success from './pages/Success';


const App = () => {

  // Hook này cho phép chúng ta lấy state từ Redux store
  const user = useSelector((state) => state.user.currentUser)

  return (
    <Router>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/products/:category" index element={<ProductList />} />
        <Route path="/product/:id" index element={<Product />} />
        <Route path="/cart" index element={<Cart />} />
        <Route path="/success" element={<Success />} />
        <Route path="/login" index element={user ? <Navigate to="/" /> : <Login />} />
        <Route path="/register" index element={user ? <Navigate to="/" /> : <Register />} />
      </Routes>
    </Router>
  );
}

export default App;
