import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import NavBar from "./components/atoms/NavBar/NavBar";
import ProductForm from "./components/templates/product/ProductForm";
import ProductList from "./components/templates/product/ProductList";
import Login from "./components/templates/user/Login";
import Register from "./components/templates/user/Register";

function AppRoutes() {

  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="products" element={<ProductList />} />
        <Route path="products/form" element={<ProductForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes
