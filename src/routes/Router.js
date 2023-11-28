import { Routes, Route } from "react-router-dom";
import Home from "../component/home/Home";
import Product from "../component/products/Product";
import Layout from "../container/layout/Layout";
import Login from "../component/auth/login/Login";
import SignIn from "../component/auth/signin/SignIn";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/singIn" element={<SignIn />} />

      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
      </Route>
    </Routes>
  );
};
export default Router;
